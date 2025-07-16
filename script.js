const semestres = [
  {
    "titulo": "Semestre 1",
    "ramos": [
      {
        "nombre": "Habilidades Profesionales I",
        "abre": ["Habilidades Profesionales II", "Seminario de Grado I"]
      },
      {
        "nombre": "Introducción al Análisis de Datos",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Fundamentos Biológicos de la Psicología",
        "abre": ["Neurofisiología", "Seminario de Grado I"]
      },
      {
        "nombre": "Introducción a la Psicología",
        "abre": ["Identidad y Personalidad", "Psicología del Desarrollo I", "Seminario de Grado I"]
      },
      {
        "nombre": "Fundamentos Epistemológicos de las Ciencias Sociales",
        "abre": ["Teorías Sociales", "Metodología de la Investigación Social I", "Seminario de Grado I"]
      },
      {
        "nombre": "Fundamentos Sociales de la Psicología",
        "abre": ["Seminario de Grado I"]
      }
    ]
  },
  {
    "titulo": "Semestre 2",
    "ramos": [
      {
        "nombre": "Neurofisiología",
        "abre": ["Psicofisiología", "Seminario de Grado I"]
      },
      {
        "nombre": "Procesos Psicológicos",
        "abre": ["Evaluación Psicológica I", "Psicopatología", "Seminario de Grado I"]
      },
      {
        "nombre": "Fundamentos Científicos de la Psicología",
        "abre": ["Metodología de la Investigación Social I", "Seminario de Grado I"]
      },
      {
        "nombre": "Teorías Sociales",
        "abre": ["Psicología Social", "Políticas Públicas", "Seminario de Grado I"]
      },
      {
        "nombre": "Epistemología para Psicología",
        "abre": ["Identidad y Personalidad", "Teorías Psicológicas I", "Seminario de Grado I"]
      },
      {
        "nombre": "Seminario ADAI I",
        "abre": ["Seminario ADAI II", "Seminario de Grado I"]
      }
    ]
  },
  {
    "titulo": "Semestre 3",
    "ramos": [
      {
        "nombre": "Habilidades Profesionales II",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Psicología del Desarrollo I",
        "abre": ["Psicología del Desarrollo II", "Seminario de Grado I", "Seminario ADAI II"]
      },
      {
        "nombre": "Psicofisiología",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Psicología Social",
        "abre": ["Psicología Comunitaria", "Psicología del Trabajo", "Seminario de Grado I", "Seminario ADAI III"]
      },
      {
        "nombre": "Metodología de la Investigación Social I",
        "abre": ["Metodología de la Investigación Social II", "Taller Integrado de Investigación Social", "Seminario de Grado I"]
      },
      {
        "nombre": "Identidad y Personalidad",
        "abre": ["Psicopatología", "Seminario de Grado I"]
      }
    ]
  },
  {
    "titulo": "Semestre 4",
    "ramos": [
      {
        "nombre": "Evaluación Psicológica I",
        "abre": ["Evaluación Psicológica II", "Seminario de Grado I"]
      },
      {
        "nombre": "Psicología del Desarrollo II",
        "abre": ["Clínica Infanto-Juvenil I", "Seminario de Grado I"]
      },
      {
        "nombre": "Metodología de la Investigación Social II",
        "abre": ["Taller Integrado de Investigación Social", "Seminario de Grado I"]
      },
      {
        "nombre": "Psicopatología",
        "abre": ["Psiquiatría", "Seminario de Grado I"]
      },
      {
        "nombre": "Teorías Psicológicas I",
        "abre": ["Teorías Psicológicas II", "Psicoterapias I", "Seminario de Grado I"]
      },
      {
        "nombre": "Seminario ADAI II",
        "abre": ["Seminario ADAI III"]
      }
    ]
  },
  {
    "titulo": "Semestre 5",
    "ramos": [
      {
        "nombre": "Políticas Públicas",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Evaluación Psicológica II",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Psiquiatría",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Áreas Emergentes de la Psicología",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Psicología Comunitaria",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Teorías Psicológicas II",
        "abre": ["Psicoterapias I", "Seminario de Grado I"]
      }
    ]
  },
  {
    "titulo": "Semestre 6",
    "ramos": [
      {
        "nombre": "Psicología de la Comunicación",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Clínica Infanto-Juvenil I",
        "abre": ["Clínica Infanto-Juvenil II", "Seminario de Grado I"]
      },
      {
        "nombre": "Evaluación Psicológica III",
        "abre": ["Evaluación Psicológica IV", "Seminario de Grado I"]
      },
      {
        "nombre": "Taller Integrado de Investigación Social",
        "abre": ["Proyectos Sociales I", "Seminario de Grado I"]
      },
      {
        "nombre": "Psicoterapias I",
        "abre": ["Psicoterapias II", "Seminario de Grado I"]
      },
      {
        "nombre": "Seminario ADAI III",
        "abre": ["Seminario ADAI IV", "Seminario de Grado I"]
      }
    ]
  },
  {
    "titulo": "Semestre 7",
    "ramos": [
      {
        "nombre": "Evaluación Psicológica IV",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Proyectos Sociales I",
        "abre": ["Proyectos Sociales II", "Seminario de Grado I"]
      },
      {
        "nombre": "Psicología Educacional I",
        "abre": ["Psicología Educacional II", "Seminario de Grado I"]
      },
      {
        "nombre": "Psicoterapias II",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Clínica Infanto-Juvenil II",
        "abre": ["Seminario de Grado I"]
      },
      {
        "nombre": "Psicología del Trabajo",
        "abre": ["Psicología Organizacional", "Seminario de Grado I"]
      }
    ]
  },
  {
    "titulo": "Semestre 8",
    "ramos": [
      {
        "nombre": "Psicología Organizacional",
        "abre": ["Práctica Profesional I"]
      },
      {
        "nombre": "Proyectos Sociales II",
        "abre": ["Práctica Profesional I"]
      },
      {
        "nombre": "Psicología Educacional II"
      },
      {
        "nombre": "Seminario de Grado I",
        "abre": ["Seminario de Grado II", "Práctica Profesional I"]
      },
      {
        "nombre": "Seminario ADAI IV",
        "abre": ["Práctica Profesional I"]
      }
    ]
  },
  {
    "titulo": "Semestre 9",
    "ramos": [
      {
        "nombre": "Seminario de Grado II",
        "abre": ["Seminario de Título"]
      },
      {
        "nombre": "Práctica Profesional I",
        "abre": ["Seminario de Título", "Práctica Profesional II"]
      }
    ]
  },
  {
    "titulo": "Semestre 10",
    "ramos": [
      {
        "nombre": "Seminario de Título"
      },
      {
        "nombre": "Práctica Profesional II"
      }
    ]
  }
];
