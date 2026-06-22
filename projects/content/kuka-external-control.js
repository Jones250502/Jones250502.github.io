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
      "assets/projects/kuka-external-control/Kalibrierung Druckbett.png",
      "assets/projects/kuka-external-control/Mathematisch Bestimmung.png",
      "assets/projects/kuka-external-control/Ergebnissse Workflow.png",
      "assets/projects/kuka-external-control/betteinmessen.jpg"
    ]
  },
  en: {
    slug: "kuka-external-control",
    href: "kuka-external-control.html",
    title: "KUKA External Control",
    subtitle: "External control and calibration of a KUKA industrial robot",
    category: "Bachelor Thesis",
    type: "Bachelor thesis",
    period: "03/2023 - 08/2023",
    status: "Completed",
    cover: "assets/projects/kuka-external-control/RobotEinmessen.png",
    summary:
      "Development of external control software for a KUKA KR 6 R900 2. One focus was a C# communication library and a graphical user interface for controlling the robot. In addition, a separate workflow was developed to measure changing modular tables and auxiliary systems precisely and reproducibly.",
    focus: ["KUKA", "TCP calibration", "C#", "MATLAB"],
    tools: ["KRL", "C#", "MATLAB"],
    timeline: [
      {
        icon: "01",
        title: "Communication and External Control",
        paragraphs: [
          "For the external control of the KUKA robot, a communication library was developed in C#. A TCP/IP client handled communication with the Kappa K interface and enabled starting programs, exchanging variables and reading status information.",
          "This architecture formed the basis for the later user interface and for integrating the robot into automated workflows."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/UML Klassendiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/UML KappaConnect.png",
            alt: "UML class diagram of the KUKA communication library"
          },
          {
            src: "assets/projects/kuka-external-control/Kommunikationsdiagramm.png",
            previewSrc: "assets/projects/kuka-external-control/KommunikationsdiagrammAusschnitt.png",
            alt: "Communication diagram between PC, Kappa K and KUKA robot"
          }
        ],
        tags: ["KRL", "C#", "TCP/IP"]
      },
      {
        icon: "02",
        title: "Software GUI",
        paragraphs: [
          "Based on the developed communication library, a custom user interface was created for controlling and monitoring the robot. The application made it possible to start programs, transfer variables and display status information in real time.",
          "The software served as the central interface between user and robot system and simplified testing, parameterization and commissioning."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/MatlabApp.png",
            previewSrc: "assets/projects/kuka-external-control/MatlabApp_Preview.png",
            alt: "MATLAB GUI for robot control"
          }
        ],
        tags: ["MATLAB"]
      },
      {
        icon: "03",
        title: "Base Calibration Workflow",
        paragraphs: [
          "For measuring changing modular tables, an extended 6-point method was developed. Compared to the common 3-point measurement, the additional information allows a more robust determination of the coordinate system and reduces the influence of individual measurement errors.",
          "The measurement process was integrated into a dedicated software workflow and could be used directly for path planning and robot control."
        ],
        images: [
          {
            src: "assets/projects/kuka-external-control/RobotEinmessen.png",
            previewSrc: "assets/projects/kuka-external-control/RobotEinmessen.png",
            alt: "Robot calibration setup with dial gauge model"
          },
          {
            src: "assets/projects/kuka-external-control/WorkflowEinmessen.png",
            previewSrc: "assets/projects/kuka-external-control/WorkflowEinmessen.png",
            alt: "Workflow for calibrating the robot base"
          },
          {
            src: "assets/projects/kuka-external-control/MesspunkteModultisch.png",
            previewSrc: "assets/projects/kuka-external-control/MesspunkteModultisch_Preview.png",
            alt: "Measurement surfaces and points on the modular table"
          },
          {
            src: "assets/projects/kuka-external-control/KoordinatenModultisch.png",
            previewSrc: "assets/projects/kuka-external-control/KoordinatenModultisch.png",
            alt: "Modular table with calibrated coordinate system"
          }
        ],
        tags: ["KRL"]
      }
    ],
    galleryImages: [
      "assets/projects/kuka-external-control/Kalibrierung Druckbett.png",
      "assets/projects/kuka-external-control/Mathematisch Bestimmung.png",
      "assets/projects/kuka-external-control/Ergebnissse Workflow.png",
      "assets/projects/kuka-external-control/betteinmessen.jpg"
    ]
  }
};

window.projectDetailContent = kukaExternalControlContent;
window.projectContentRegistry = window.projectContentRegistry || {};
window.projectContentRegistry[kukaExternalControlContent.de.slug] = kukaExternalControlContent;
