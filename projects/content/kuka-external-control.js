const kukaExternalControlContent = {
  de: {
    slug: "kuka-external-control",
    href: "kuka-external-control.html",
    title: "KUKA External Control",
    subtitle: "Externe Steuerung und Kalibrierung eines KUKA Industrieroboters",
    category: "Bachelorarbeit",
    type: "Bachelorarbeit",
    period: "03/2023 – 08/2023",
    status: "Abgeschlossen",
    cover: "assets/projects/kuka-external-control/cover.jpg",
    summary:
      "Entwicklung einer externen Steuerungssoftware für einen KUKA KR 6 R900 2. Ein Schwerpunkt lag auf einer C# Kommunikationsbibliothek und einer grafischen Bedienoberfläche zur Steuerung des Roboters. Zusätzlich wurde ein separater Workflow entwickelt, um wechselnde Modultische und Zusatzsysteme präzise und reproduzierbar einzumessen.",
    focus: ["KUKA", "TCP einmessen ", "C#", "MATLAB"],
    tools: ["KRL", "C#", "MATLAB"],
    timeline: [
      {
        icon: "01",
        title: "Kommunikation und externe Steuerung",
        paragraphs: [
          "Für die externe Steuerung des KUKA Roboters wurde eine Kommunikationsbibliothek in C# entwickelt. Ein TCP/IP Client übernahm die Kommunikation mit der Kappa K Schnittstelle und ermöglichte das Starten von Programmen, den Austausch von Variablen und das Auslesen von Statusinformationen.",
          "Die Architektur bildete die Grundlage für die spätere Bedienoberfläche und die Integration des Roboters in automatisierte Abläufe."
        ],
        images: ["assets/projects/kuka-external-control/UML Klassendiagramm.png","assets/projects/kuka-external-control/Kommunikationsdiagramm.png"],
        tags: ["KUKA Robot", "C#", "TCP/IP"]
      },
      {
        icon: "02",
        title: "Kommunikation",
        paragraphs: [
          "Die Kommunikation zwischen PC und Roboter wurde so aufgebaut, dass Bewegungsbefehle und Statusinformationen zuverlässig übertragen werden können."
        ],
        images: ["assets/projects/kuka-external-control/timeline-02.jpg"],
        tags: ["KRL", "KUKA Schnittstelle", "Datenkommunikation"]
      },
      {
        icon: "03",
        title: "Software GUI",
        paragraphs: [
          "Für die Bedienung entstand eine eigene Oberfläche zur Steuerung, Überwachung und Auswertung der Roboterbewegung.",
          "Die GUI diente als Brücke zwischen Bahnplanung, Parametern und praktischem Testbetrieb."
        ],
        images: ["assets/projects/kuka-external-control/timeline-03.jpg"],
        tags: ["C#", "Visual Studio", "GUI", "Bahnparameter"]
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
        images: ["assets/projects/kuka-external-control/timeline-01.jpg"],
        tags: ["KUKA Robot", "Robot Cell", "System Analysis"]
      },
      {
        icon: "02",
        title: "Communication",
        paragraphs: [
          "The communication between PC and robot was structured to transfer motion commands and status information reliably."
        ],
        images: ["assets/projects/kuka-external-control/timeline-02.jpg"],
        tags: ["KRL", "KUKA Interface", "Data Communication"]
      },
      {
        icon: "03",
        title: "Software GUI",
        paragraphs: [
          "A custom interface was developed for controlling, monitoring and evaluating robot motion.",
          "The GUI connected path planning, parameters and practical test operation."
        ],
        images: ["assets/projects/kuka-external-control/timeline-03.jpg"],
        tags: ["C#", "Visual Studio", "GUI", "Path Parameters"]
      },
      {
        icon: "04",
        title: "Testing and Validation",
        paragraphs: [
          "The developed workflows were tested on the real system and improved step by step.",
          "The focus was on reproducible motions, safe test procedures and evaluation of the control logic."
        ],
        images: ["assets/projects/kuka-external-control/timeline-04.jpg"],
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
