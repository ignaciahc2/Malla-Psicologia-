// ← Asegúrate de que aquí esté el bloque `const semestres = [...]` con todos los ramos

const malla = document.getElementById('malla');
const estadoRamos = {};

function crearMalla() {
  malla.innerHTML = "";

  const ramosAprobadosGuardados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

  semestres.forEach((sem) => {
    const semestreDiv = document.createElement('div');
    semestreDiv.classList.add('semestre');

    const titulo = document.createElement('h2');
    titulo.textContent = sem.titulo;
    semestreDiv.appendChild(titulo);

    sem.ramos.forEach((ramoData) => {
      const ramoDiv = document.createElement('div');
      ramoDiv.classList.add('ramo');
      ramoDiv.textContent = ramoData.nombre;

      const estado = {
        div: ramoDiv,
        aprobado: false,
        requiere: ramoData.requiere || [],
        abre: ramoData.abre || []
      };

      estadoRamos[ramoData.nombre] = estado;

      // Verificar si está aprobado desde almacenamiento
      if (ramosAprobadosGuardados.includes(ramoData.nombre)) {
        estado.aprobado = true;
        ramoDiv.classList.add('aprobado');
      }

      // Determinar si está bloqueado
      if (estado.requiere.length > 0 && !estado.requiere.every(r => ramosAprobadosGuardados.includes(r))) {
        ramoDiv.classList.add('bloqueado');
      }

      // Evento de clic
      ramoDiv.addEventListener('click', () => {
        if (estado.aprobado) return;
        if (estado.requiere.length > 0 && !estado.requiere.every(r => estadoRamos[r]?.aprobado)) return;

        estado.aprobado = true;
        ramoDiv.classList.remove('bloqueado');
        ramoDiv.classList.add('aprobado');

        guardarEstado();

        estado.abre.forEach((destino) => {
          const target = estadoRamos[destino];
          if (target && target.requiere.every(r => estadoRamos[r]?.aprobado)) {
            target.div.classList.remove('bloqueado');
          }
        });
      });

      // 🔍 Resaltar requisitos al pasar el mouse
      ramoDiv.addEventListener('mouseenter', () => {
        estado.requiere.forEach(r => {
          if (estadoRamos[r]) {
            estadoRamos[r].div.style.border = '2px solid yellow';
          }
        });
      });

      ramoDiv.addEventListener('mouseleave', () => {
        estado.requiere.forEach(r => {
          if (estadoRamos[r]) {
            estadoRamos[r].div.style.border = '';
          }
        });
      });

      semestreDiv.appendChild(ramoDiv);
    });

    malla.appendChild(semestreDiv);
  });
}

function guardarEstado() {
  const aprobados = Object.entries(estadoRamos)
    .filter(([_, estado]) => estado.aprobado)
    .map(([nombre]) => nombre);

  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function resetMalla() {
  localStorage.removeItem("ramosAprobados");
  crearMalla();
}

crearMalla();
