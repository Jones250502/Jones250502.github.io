const kukaExternalControlContent = {
  de: {
    slug: "kuka-external-control",
    href: "kuka-external-control.html",
    title: "KUKA External Control",
    subtitle: "Externe Steuerung eines Industrieroboters",
    category: "Bachelorarbeit",
    type: "Bachelorarbeit",
    period: "Platzhalter Zeitraum",
    status: "Abgeschlossen",
    cover: "assets/projects/kuka-external-control/cover.jpg",
    summary:
      "Entwicklung einer externen Steuerung für einen KUKA Industrieroboter. Der Fokus lag auf der Kommunikation zwischen Roboter und PC, einer eigenen Bedienoberfläche, Bahnplanung und experimenteller Validierung am realen System.",
    focus: ["KUKA", "Robot Control", "C#", "MATLAB", "Bahnplanung"],
    tools: ["KUKA", "KRL", "C#", "MATLAB", "Visual Studio"],
    timeline: [
      {
        icon: "01",
        title: "Ausgangssituation",
        paragraphs: [
          "Zu Beginn stand die Analyse der Roboterzelle, der vorhandenen Schnittstellen und der Anforderungen an eine externe Steuerung.",
          "Wichtig war ein Aufbau, der spätere Tests am realen Roboter nachvollziehbar und kontrollierbar macht."
        ],
        image: "assets/projects/kuka-external-control/timeline-01.jpg",
        tags: ["KUKA Robot", "Roboterzelle", "Systemanalyse"]
      },
      {
        icon: "02",
        title: "Kommunikation",
        paragraphs: [
          "Die Kommunikation zwischen PC und Roboter wurde so aufgebaut, dass Bewegungsbefehle und Statusinformationen zuverlässig übertragen werden können."
        ],
        image: "assets/projects/kuka-external-control/timeline-02.jpg",
        tags: ["KRL", "KUKA Schnittstelle", "Datenkommunikation"]
      },
      {
        icon: "03",
        title: "Software GUI",
        paragraphs: [
          "Für die Bedienung entstand eine eigene Oberfläche zur Steuerung, Überwachung und Auswertung der Roboterbewegung.",
          "Die GUI diente als Brücke zwischen Bahnplanung, Parametern und praktischem Testbetrieb."
        ],
        image: "assets/projects/kuka-external-control/timeline-03.jpg",
        tags: ["C#", "Visual Studio", "GUI", "Bahnparameter"]
      },
      {
        icon: "04",
        title: "Tests und Validierung",
        paragraphs: [
          "Die entwickelten Abläufe wurden am realen System getestet und schrittweise verbessert.",
          "Dabei standen reproduzierbare Bewegungen, sichere Testschritte und die Bewertung der Steuerlogik im Vordergrund."
        ],
        image: "assets/projects/kuka-external-control/timeline-04.jpg",
        tags: ["MATLAB", "Robot Control", "Validierung", "Testing"]
      }
    ],
    galleryImages: [
      "assets/projects/kuka-external-control/gallery-01.jpg",
      "assets/projects/kuka-external-control/gallery-02.jpg",
      "assets/projects/kuka-external-control/gallery-03.jpg"
    ]
  },
  en: {
    slug: "kuka-external-control",
    href: "kuka-external-control.html",
    title: "KUKA External Control",
    subtitle: "External control of an industrial robot",
    category: "Bachelor Thesis",
    type: "Bachelor thesis",
    period: "Placeholder period",
    status: "Completed",
    cover: "assets/projects/kuka-external-control/cover.jpg",
    summary:
      "Development of an external control system for a KUKA industrial robot. The focus was on communication between robot and PC, a custom user interface, path planning and experimental validation on the real system.",
    focus: ["KUKA", "Robot Control", "C#", "MATLAB", "Path Planning"],
    tools: ["KUKA", "KRL", "C#", "MATLAB", "Visual Studio"],
    timeline: [
      {
        icon: "01",
        title: "Initial Situation",
        paragraphs: [
          "The project started with an analysis of the robot cell, available interfaces and requirements for external control.",
          "A key goal was to create a setup that made later tests on the real robot traceable and controlled."
        ],
        image: "assets/projects/kuka-external-control/timeline-01.jpg",
        tags: ["KUKA Robot", "Robot Cell", "System Analysis"]
      },
      {
        icon: "02",
        title: "Communication",
        paragraphs: [
          "The communication between PC and robot was structured to transfer motion commands and status information reliably."
        ],
        image: "assets/projects/kuka-external-control/timeline-02.jpg",
        tags: ["KRL", "KUKA Interface", "Data Communication"]
      },
      {
        icon: "03",
        title: "Software GUI",
        paragraphs: [
          "A custom interface was developed for controlling, monitoring and evaluating robot motion.",
          "The GUI connected path planning, parameters and practical test operation."
        ],
        image: "assets/projects/kuka-external-control/timeline-03.jpg",
        tags: ["C#", "Visual Studio", "GUI", "Path Parameters"]
      },
      {
        icon: "04",
        title: "Testing and Validation",
        paragraphs: [
          "The developed workflows were tested on the real system and improved step by step.",
          "The focus was on reproducible motions, safe test procedures and evaluation of the control logic."
        ],
        image: "assets/projects/kuka-external-control/timeline-04.jpg",
        tags: ["MATLAB", "Robot Control", "Validation", "Testing"]
      }
    ],
    galleryImages: [
      "assets/projects/kuka-external-control/gallery-01.jpg",
      "assets/projects/kuka-external-control/gallery-02.jpg",
      "assets/projects/kuka-external-control/gallery-03.jpg"
    ]
  }
};

window.projectDetailContent = kukaExternalControlContent;
