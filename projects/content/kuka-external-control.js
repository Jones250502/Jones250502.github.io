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
    cover: "assets/projects/kuka-external-control/RobotEinmessen.png",
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
        // previewSrc can later point to a manually cropped image. The lightbox always opens src.
        images: [
          {
            src: "assets/projects/kuka-external-control/UML Klassendiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/UML KappaConnect.png",
            alt: "UML Klassendiagramm der KUKA Kommunikationsbibliothek"
          },
          {
            src: "assets/projects/kuka-external-control/Kommunikationsdiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/KommunikationsdiagrammAusschnitt.png",
            alt: "Kommunikationsdiagramm zwischen PC, Kappa K und KUKA Roboter"
          }
        ],
        tags: ["KRL", "C#", "TCP/IP"]
      },
      {
        icon: "02",
        title: "Software GUI",
        paragraphs: [
          "Auf Basis der entwickelten Kommunikationsbibliothek entstand eine eigene Bedienoberfläche zur Steuerung und Überwachung des Roboters. Über die Anwendung konnten Programme gestartet, Variablen übertragen und Zustandsinformationen in Echtzeit dargestellt werden.",
          "Die Software diente als zentrale Schnittstelle zwischen Anwender und Robotersystem und vereinfachte Tests, Parametrierung und Inbetriebnahme."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/MatlabApp.png",
            previewSrc: "assets/projects/kuka-external-control/MatlabApp_Preview.png",
            alt: "Matlab GUI zur Steuerung"
          }
        ],
        tags: ["MATLAB"]
      },
      {
        icon: "03",
        title: "Basisvermessungs Workflow",
        paragraphs: [
          "Für die Einmessung wechselnder Modultische wurde eine erweiterte 6 Punkt Methode entwickelt. Im Vergleich zur üblichen 3 Punkt Vermessung ermöglicht der zusätzliche Informationsgehalt eine robustere Bestimmung des Koordinatensystems und reduziert den Einfluss einzelner Messfehler.",
          "Die Vermessung wurde in einen eigenen Softwareworkflow integriert und konnte direkt für die Bahnplanung und Robotersteuerung verwendet werden."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/RobotEinmessen.png",
            previewSrc: "assets/projects/kuka-external-control/RobotEinmessen.png",
            alt: "Roboter am einmessen mit Messuhr Modell"
          },
          {
            src: "assets/projects/kuka-external-control/WorkflowEinmessen.png",
            previewSrc: "assets/projects/kuka-external-control/WorkflowEinmessen.png",
            alt: "Workflow zum einmessen des Roboters"
          },
          {
            src: "assets/projects/kuka-external-control/MesspunkteModultisch.png",
            previewSrc: "assets/projects/kuka-external-control/MesspunkteModultisch_Preview.png",
            alt: "Messflächen und Punkte am Modultisch"
          },
          {
            src: "assets/projects/kuka-external-control/KoordinatenModultisch.png",
            previewSrc: "assets/projects/kuka-external-control/KoordinatenModultisch.png",
            alt: "Modultisch mit Kalibrierten Koordinatensystem"
          }
        ],
        tags: ["KRL"]
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
        // previewSrc can later point to a manually cropped image. The lightbox always opens src.
        images: [
          {
            src: "assets/projects/kuka-external-control/UML Klassendiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/UML Klassendiagramm.png",
            alt: "UML class diagram of the KUKA communication library"
          }
        ],
        tags: ["KUKA Robot", "Robot Cell", "System Analysis"]
      },
      {
        icon: "02",
        title: "Communication",
        paragraphs: [
          "The communication between PC and robot was structured to transfer motion commands and status information reliably."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/Kommunikationsdiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/Kommunikationsdiagramm.png",
            alt: "Communication diagram between PC, Kappa K and KUKA robot"
          }
        ],
        tags: ["KRL", "KUKA Interface", "Data Communication"]
      },
      {
        icon: "03",
        title: "Software GUI",
        paragraphs: [
          "A custom interface was developed for controlling, monitoring and evaluating robot motion.",
          "The GUI connected path planning, parameters and practical test operation."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/UML Klassendiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/UML Klassendiagramm.png",
            alt: "C# software library structure"
          }
        ],
        tags: ["C#", "Visual Studio", "GUI", "Path Parameters"]
      },
      {
        icon: "04",
        title: "Testing and Validation",
        paragraphs: [
          "The developed workflows were tested on the real system and improved step by step.",
          "The focus was on reproducible motions, safe test procedures and evaluation of the control logic."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/Kommunikationsdiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/Kommunikationsdiagramm.png",
            alt: "External robot control communication workflow"
          }
        ],
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
