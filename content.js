const siteContent = {
  de: {
    meta: {
      title: "Jonas Fritsch | Engineering & Robotics Portfolio",
      description: "Portfolio für Mechatronik, Robotik, Automatisierung und technische Entwicklung."
    },
    brand: {
      mark: "J",
      text: "Engineering Portfolio",
      homeLabel: "Zur Startseite"
    },
    language: {
      label: "Sprache wechseln",
      toggle: "EN"
    },
    nav: {
      label: "Hauptnavigation",
      menuLabel: "Menü öffnen",
      items: [
        { label: "Start", href: "#home" },
        { label: "Über mich", href: "#about" },
        { label: "Werdegang", href: "#journey" },
        { label: "Projekte", href: "#projects" },
        { label: "Lebenslauf", href: "#cv" },
        { label: "Kontakt", href: "#contact" }
      ]
    },
    hero: {
      kicker: "Hi, Ich bin",
      name: "Jonas Fritsch",
      degree: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering\nTechnische Universität München",
      focus: "Robotik • Automatisierung • Prototyping • Regelung",
      actionsLabel: "Hero Navigation",
      buttons: [
        { label: "Projekte", href: "#projects", style: "primary" },
        { label: "Lebenslauf", href: "#cv", style: "secondary" },
        { label: "Kontakt", href: "#contact", style: "ghost" }
      ]
    },
    about: {
      eyebrow: "Über mich",
      heading: "Über mich",
      cardTitle: "Robotik und technische Entwicklung",
      paragraphs: [
        "Mich begeistert Robotik und technische Entwicklung, bei der Ideen nicht nur theoretisch bestehen, sondern als reale Systeme sichtbar werden.",
        "Mein Interesse liegt besonders in der Verbindung von Mechanik, Elektronik und Software. Ich arbeite gerne interdisziplinär, vom Konzept über Konstruktion und Steuerung bis hin zu Prototyping und experimenteller Validierung."
      ]
    },
    toolbox: {
      label: "Werkzeuge",
      title: "Werkzeuge",
      subtitle: "Tools und Technologien",
      tools: [
        { name: "Fusion 360", category: "CAD", logo: "assets/logos/Fusion360_Logo.svg" },
        { name: "Creo Parametric", category: "CAD", logo: "assets/logos/PTC_Creo_logo.svg" },
        { name: "SolidWorks", category: "CAD", logo: "assets/logos/SolidWorks_logo.tiff" },
        { name: "Unity", category: "Simulation", logo: "assets/logos/Unity_Technologies_logo.svg" },
        { name: "KRL", category: "Robot Programming", logo: "assets/logos/KUKA-logo.svg" },
        { name: "Isaac Sim", category: "Robotics Simulation", logo: "assets/logos/NVIDIA_logo.svg" },
        { name: "Isaac Lab", category: "Reinforcement Learning", logo: "assets/logos/NVIDIA_logo.svg" },
        { name: "MATLAB", category: "Engineering Computing", logo: "assets/logos/Matlab_Logo.png", secondary: true },
        { name: "Visual Studio", category: "Development", logo: "assets/logos/visual-studio.svg", secondary: true },
        { name: "VS Code", category: "Development", logo: "assets/logos/vs-code.svg", secondary: true },
        { name: "Arduino", category: "Embedded Prototyping", logo: "assets/logos/arduino.svg", secondary: true }
      ]
    },
    skills: {
      label: "Technische Schwerpunkte",
      items: ["Robot Control", "Mechatronics", "CAD Design", "Embedded Systems", "Motion Planning", "Sensor Integration", "Automation"]
    },
    journey: {
      eyebrow: "Werdegang",
      heading: "Ausbildung und Hintergrund",
      entries: [
        {
          logo: "KIT",
          logoPath: "assets/logos/Logo_KIT.svg",
          label: "Bachelor",
          title: "Karlsruher Institut für Technologie (KIT)",
          text: "Bachelor Maschinenbau mit technischer Grundlage in Konstruktion, Mechanik und ingenieurwissenschaftlichem Denken."
        },
        {
          logo: "TUM",
          logoPath: "assets/logos/Logo_of_the_Technical_University_of_Munich.svg",
          label: "Master",
          title: "Technische Universität München (TUM)",
          text: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering mit Fokus auf Robotik, Systeme und Regelung."
        },
        {
          logo: "UPC",
          logoPath: "assets/logos/Logo_UPC.svg",
          label: "International",
          title: "Universitat Politècnica de Catalunya (UPC)",
          text: "Auslandssemester mit internationaler Erfahrung und akademischem Austausch."
        }
      ]
    },
    projects: {
      eyebrow: "Projekte",
      heading: "Ausgewählte Projekte",
      detailLabel: "Mehr erfahren",
      cards: [
        {
          title: "KUKA External Control",
          category: "Bachelorarbeit",
          cover: "assets/projects/kuka-external-control/cover.jpg",
          description: "Externe Steuerung eines KUKA Industrieroboters über Schnittstellen, Bahnplanung und experimentelle Validierung.",
          technologies: ["KUKA", "Robot Control", "C#", "MATLAB"],
          linkLabel: "Mehr erfahren über KUKA External Control",
          href: "projects/kuka-external-control.html"
        },
        {
          title: "Parallel SCARA Robot",
          category: "Eigenprojekt",
          cover: "assets/projects/parallel-scara/cover.jpg",
          description: "Entwicklung eines parallelen SCARA Roboters mit mechanischer Konstruktion, Kinematik und eigener Steuerung.",
          technologies: ["Robotik", "CAD", "Kinematik", "Steuerung"],
          linkLabel: "Mehr erfahren über Parallel SCARA Robot",
          href: "projects/parallel-scara.html"
        },
        {
          title: "Taktile Sensorhaut",
          category: "Semesterarbeit",
          cover: "assets/projects/tactile-skin/cover.jpg",
          description: "Entwicklung und Validierung einer flexiblen taktilen Sensorhaut zur Erfassung von Kontaktposition sowie Normal und Scherkräften.",
          technologies: ["Sensorik", "Robotik", "Validierung", "Prototyping"],
          linkLabel: "Mehr erfahren über Taktile Sensorhaut",
          href: "projects/tactile-skin.html"
        },
        {
          title: "Robot Planning mit Reinforcement Learning",
          category: "Masterarbeit",
          cover: "assets/projects/robot-planning-rl/cover.jpg",
          description: "Masterarbeitsprojekt im Bereich roboterbasierter Planung mit Reinforcement Learning und simulativer Evaluierung.",
          technologies: ["Reinforcement Learning", "Robot Planning", "Simulation", "Research"],
          linkLabel: "Mehr erfahren über Robot Planning mit Reinforcement Learning",
          href: "projects/robot-planning-rl.html"
        },
        {
          title: "Path Planning mit OMPL und Kautham",
          category: "Uniaufgabe",
          cover: "assets/projects/path-planning/cover.jpg",
          description: "Umsetzung von Pfadplanung und Robotik Simulation mit OMPL, Kautham und ROS2 im Kontext von Task and Motion Planning.",
          technologies: ["ROS2", "OMPL", "Kautham", "Motion Planning"],
          linkLabel: "Mehr erfahren über Path Planning mit OMPL und Kautham",
          href: "projects/path-planning.html"
        },
        {
          title: "Moveo Robotermodell",
          category: "Eigenprojekt",
          cover: "assets/projects/moveo-robot/cover.jpg",
          description: "Umbau und Aufbau eines Moveo Roboterarms mit eigener Steuerung und praktischer Inbetriebnahme.",
          technologies: ["Robotik", "Steuerung", "Arduino", "Prototyping"],
          linkLabel: "Mehr erfahren über Moveo Robotermodell",
          href: "projects/moveo-robot.html"
        },
        {
          title: "CNC Fräse Eigenbau",
          category: "Schulprojekt",
          cover: "assets/projects/cnc-fraese/cover.jpg",
          description: "Eigenbau einer CNC Fräse mit Fokus auf mechanischem Aufbau, Antriebstechnik und praktischer Umsetzung.",
          technologies: ["CNC", "Mechanik", "Konstruktion", "Prototyping"],
          linkLabel: "Mehr erfahren über CNC Fräse Eigenbau",
          href: "projects/cnc-fraese.html"
        },
        {
          title: "Offline Roboterprogrammierung",
          category: "Firmenprojekt",
          cover: "assets/projects/ccloos-c4-compact/cover.jpg",
          description: "Offline Programmierung für eine CLOOS C4 Compact Schweißroboterzelle zur Unterstützung industrieller Fertigungsprozesse.",
          technologies: ["CLOOS", "Schweißroboter", "Offline Programming", "Industrie"],
          linkLabel: "Mehr erfahren über Offline Roboterprogrammierung",
          href: "projects/ccloos-c4-compact.html"
        },
        {
          title: "Auftragsautomatisierung",
          category: "Firmenprojekt",
          cover: "assets/projects/order-automation/cover.jpg",
          description: "Automatisierung von Auftragsprozessen mit Fokus auf Datenextraktion, Prozesslogik und zuverlässige Übergabe an bestehende Systeme.",
          technologies: ["Automation", "Python", "Power Automate", "ERP"],
          linkLabel: "Mehr erfahren über Auftragsautomatisierung",
          href: "projects/order-automation.html"
        },
        {
          title: "Cocktailbar",
          category: "Eigenprojekt",
          cover: "assets/projects/cocktailbar/cover.jpg",
          description: "Eigenes Bar Projekt mit Planung, Aufbau und technischer Umsetzung einer individuellen Cocktailbar.",
          technologies: ["Design", "Eigenbau", "Prototyping", "Hardware"],
          linkLabel: "Mehr erfahren über Cocktailbar",
          href: "projects/cocktailbar.html"
        }
      ]
    },
    cv: {
      kicker: "Lebenslauf",
      title: "Lebenslauf",
      subtitle: "Ausbildung, technische Schwerpunkte und Engineering Erfahrung im Überblick.",
      pdfPath: "assets/documents/CV_Jonas_Lato.pdf",
      buttons: {
        view: "CV ansehen",
        download: "CV herunterladen"
      },
      highlights: [
        "M.Sc. Mechatronics, Robotics and Biomechanical Engineering",
        "Technische Universität München",
        "Robotik, Automatisierung und interdisziplinäre Entwicklung",
        "CAD, Steuerung, Simulation und technische Softwareentwicklung",
        "Praxisnahe Projekte aus Industrie, Forschung und Prototyping"
      ]
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Interesse an Robotik, Automatisierung oder technischer Entwicklung? Ich freue mich über Austausch und neue Projekte.",
      items: [
        { label: "Email", value: "fritsch.jonasmichael@gmail.com", href: "mailto:fritsch.jonasmichael@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "Jonas Fritsch", href: "https://www.linkedin.com/in/jonas-fritsch-39929822a?utm_source=share_via&utm_content=profile&utm_medium=nenber_andorid", icon: "linkedin" }
      ]
    },
    footer: {
      copyright: "© 2026 Jonas Fritsch. Engineering & Robotics Portfolio.",
      email: {
        label: "Email",
        value: "fritsch.jonasmichael@gmail.com",
        href: "mailto:fritsch.jonasmichael@gmail.com",
        icon: "assets/icons/mail.svg",
        fallback: "✉"
      },
      linkedin: {
        label: "LinkedIn",
        value: "LinkedIn",
        href: "https://www.linkedin.com/in/jonas-fritsch-39929822a?utm_source=share_via&utm_content=profile&utm_medium=nenber_andorid",
        icon: "assets/icons/linkedin.svg",
        fallback: "in"
      },
      languageLabel: "Sprache"
    },
    projectPage: {
      scrollCue: "Projektverlauf ansehen"
    }
  },
  en: {
    meta: {
      title: "Jonas Fritsch | Engineering & Robotics Portfolio",
      description: "Portfolio for mechatronics, robotics, automation and technical development."
    },
    brand: {
      mark: "J",
      text: "Engineering Portfolio",
      homeLabel: "Back to start"
    },
    language: {
      label: "Switch language",
      toggle: "DE"
    },
    nav: {
      label: "Main navigation",
      menuLabel: "Open menu",
      items: [
        { label: "Start", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Background", href: "#journey" },
        { label: "Projects", href: "#projects" },
        { label: "Resume", href: "#cv" },
        { label: "Contact", href: "#contact" }
      ]
    },
    hero: {
      kicker: "Hi, I'm",
      name: "Jonas Fritsch",
      degree: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering\nTechnical University of Munich",
      focus: "Robotics • Automation • Prototyping • Control Systems",
      actionsLabel: "Hero navigation",
      buttons: [
        { label: "Projects", href: "#projects", style: "primary" },
        { label: "Resume", href: "#cv", style: "secondary" },
        { label: "Contact", href: "#contact", style: "ghost" }
      ]
    },
    about: {
      eyebrow: "About",
      heading: "About me",
      cardTitle: "Robotics and technical development",
      paragraphs: [
        "I am fascinated by robotics and technical development where ideas do not just work in theory, but become visible as real systems.",
        "I am especially interested in the connection between mechanics, electronics and software. I like working across disciplines, from concept, design and control to prototyping and experimental validation."
      ]
    },
    toolbox: {
      label: "Tools",
      title: "Tools",
      subtitle: "Tools and technologies",
      tools: [
        { name: "Fusion 360", category: "CAD", logo: "assets/logos/Fusion360_Logo.svg" },
        { name: "Creo Parametric", category: "CAD", logo: "assets/logos/PTC_Creo_logo.svg" },
        { name: "SolidWorks", category: "CAD", logo: "assets/logos/SolidWorks_logo.tiff" },
        { name: "Unity", category: "Simulation", logo: "assets/logos/Unity_Technologies_logo.svg" },
        { name: "KRL", category: "Robot Programming", logo: "assets/logos/KUKA-logo.svg" },
        { name: "Isaac Sim", category: "Robotics Simulation", logo: "assets/logos/NVIDIA_logo.svg" },
        { name: "Isaac Lab", category: "Reinforcement Learning", logo: "assets/logos/NVIDIA_logo.svg" },
        { name: "MATLAB", category: "Engineering Computing", logo: "assets/logos/Matlab_Logo.png", secondary: true },
        { name: "Visual Studio", category: "Development", logo: "assets/logos/visual-studio.svg", secondary: true },
        { name: "VS Code", category: "Development", logo: "assets/logos/vs-code.svg", secondary: true },
        { name: "Arduino", category: "Embedded Prototyping", logo: "assets/logos/arduino.svg", secondary: true }
      ]
    },
    skills: {
      label: "Technical focus areas",
      items: ["Robot Control", "Mechatronics", "CAD Design", "Embedded Systems", "Motion Planning", "Sensor Integration", "Automation"]
    },
    journey: {
      eyebrow: "Background",
      heading: "Education and background",
      entries: [
        {
          logo: "KIT",
          logoPath: "assets/logos/Logo_KIT.svg",
          label: "Bachelor",
          title: "Karlsruhe Institute of Technology (KIT)",
          text: "Bachelor's degree in mechanical engineering with a technical foundation in design, mechanics and engineering thinking."
        },
        {
          logo: "TUM",
          logoPath: "assets/logos/Logo_of_the_Technical_University_of_Munich.svg",
          label: "Master",
          title: "Technical University of Munich (TUM)",
          text: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering with a focus on robotics, systems and control."
        },
        {
          logo: "UPC",
          logoPath: "assets/logos/Logo_UPC.svg",
          label: "International",
          title: "Universitat Politècnica de Catalunya (UPC)",
          text: "Semester abroad with international experience and academic exchange."
        }
      ]
    },
    projects: {
      eyebrow: "Projects",
      heading: "Selected projects",
      detailLabel: "Learn more",
      cards: [
        {
          title: "KUKA External Control",
          category: "Bachelor Thesis",
          cover: "assets/projects/kuka-external-control/cover.jpg",
          description: "External control of a KUKA industrial robot through interfaces, path planning and experimental validation.",
          technologies: ["KUKA", "Robot Control", "C#", "MATLAB"],
          linkLabel: "Learn more about KUKA External Control",
          href: "projects/kuka-external-control.html"
        },
        {
          title: "Parallel SCARA Robot",
          category: "Personal Project",
          cover: "assets/projects/parallel-scara/cover.jpg",
          description: "Development of a parallel SCARA robot with mechanical design, kinematics and custom control.",
          technologies: ["Robotics", "CAD", "Kinematics", "Control"],
          linkLabel: "Learn more about Parallel SCARA Robot",
          href: "projects/parallel-scara.html"
        },
        {
          title: "Tactile Sensing Skin",
          category: "Semester Project",
          cover: "assets/projects/tactile-skin/cover.jpg",
          description: "Development and validation of a flexible tactile sensing skin for detecting contact position as well as normal and shear forces.",
          technologies: ["Sensing", "Robotics", "Validation", "Prototyping"],
          linkLabel: "Learn more about Tactile Sensing Skin",
          href: "projects/tactile-skin.html"
        },
        {
          title: "Robot Planning with Reinforcement Learning",
          category: "Master Thesis",
          cover: "assets/projects/robot-planning-rl/cover.jpg",
          description: "Master's thesis project in robot-based planning with reinforcement learning and simulation-based evaluation.",
          technologies: ["Reinforcement Learning", "Robot Planning", "Simulation", "Research"],
          linkLabel: "Learn more about Robot Planning with Reinforcement Learning",
          href: "projects/robot-planning-rl.html"
        },
        {
          title: "Path Planning with OMPL and Kautham",
          category: "University Task",
          cover: "assets/projects/path-planning/cover.jpg",
          description: "Implementation of path planning and robotics simulation with OMPL, Kautham and ROS2 in the context of task and motion planning.",
          technologies: ["ROS2", "OMPL", "Kautham", "Motion Planning"],
          linkLabel: "Learn more about Path Planning with OMPL and Kautham",
          href: "projects/path-planning.html"
        },
        {
          title: "Moveo Robot Model",
          category: "Personal Project",
          cover: "assets/projects/moveo-robot/cover.jpg",
          description: "Modification and build-up of a Moveo robot arm with custom control and practical commissioning.",
          technologies: ["Robotics", "Control", "Arduino", "Prototyping"],
          linkLabel: "Learn more about Moveo Robot Model",
          href: "projects/moveo-robot.html"
        },
        {
          title: "Custom CNC Router",
          category: "School Project",
          cover: "assets/projects/cnc-fraese/cover.jpg",
          description: "Self-built CNC router with focus on mechanical structure, drive technology and practical implementation.",
          technologies: ["CNC", "Mechanics", "Design", "Prototyping"],
          linkLabel: "Learn more about Custom CNC Router",
          href: "projects/cnc-fraese.html"
        },
        {
          title: "Offline Robot Programming",
          category: "Company Project",
          cover: "assets/projects/ccloos-c4-compact/cover.jpg",
          description: "Offline programming for a CLOOS C4 Compact welding robot cell to support industrial manufacturing processes.",
          technologies: ["CLOOS", "Welding Robot", "Offline Programming", "Industry"],
          linkLabel: "Learn more about Offline Robot Programming",
          href: "projects/ccloos-c4-compact.html"
        },
        {
          title: "Order Automation",
          category: "Company Project",
          cover: "assets/projects/order-automation/cover.jpg",
          description: "Automation of order processes with focus on data extraction, process logic and reliable transfer into existing systems.",
          technologies: ["Automation", "Python", "Power Automate", "ERP"],
          linkLabel: "Learn more about Order Automation",
          href: "projects/order-automation.html"
        },
        {
          title: "Cocktail Bar",
          category: "Personal Project",
          cover: "assets/projects/cocktailbar/cover.jpg",
          description: "Personal bar project with planning, construction and technical implementation of an individual cocktail bar.",
          technologies: ["Design", "DIY Build", "Prototyping", "Hardware"],
          linkLabel: "Learn more about Cocktail Bar",
          href: "projects/cocktailbar.html"
        }
      ]
    },
    cv: {
      kicker: "Resume",
      title: "Resume",
      subtitle: "Education, technical focus areas and engineering experience at a glance.",
      pdfPath: "assets/documents/CV_Jonas_light_en.pdf",
      buttons: {
        view: "View CV",
        download: "Download CV"
      },
      highlights: [
        "M.Sc. Mechatronics, Robotics and Biomechanical Engineering",
        "Technical University of Munich",
        "Robotics, automation and interdisciplinary development",
        "CAD, control, simulation and technical software development",
        "Practical projects from industry, research and prototyping"
      ]
    },
    contact: {
      eyebrow: "Contact",
      heading: "Interested in robotics, automation or technical development? I am always open to exchange and new projects.",
      items: [
        { label: "Email", value: "fritsch.jonasmichael@gmail.com", href: "mailto:fritsch.jonasmichael@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "Jonas Fritsch", href: "https://www.linkedin.com/in/jonas-fritsch-39929822a?utm_source=share_via&utm_content=profile&utm_medium=nenber_andorid", icon: "linkedin" }
      ]
    },
    footer: {
      copyright: "© 2026 Jonas Fritsch. Engineering & Robotics Portfolio.",
      email: {
        label: "Email",
        value: "fritsch.jonasmichael@gmail.com",
        href: "mailto:fritsch.jonasmichael@gmail.com",
        icon: "assets/icons/mail.svg",
        fallback: "✉"
      },
      linkedin: {
        label: "LinkedIn",
        value: "LinkedIn",
        href: "https://www.linkedin.com/in/jonas-fritsch-39929822a?utm_source=share_via&utm_content=profile&utm_medium=nenber_andorid",
        icon: "assets/icons/linkedin.svg",
        fallback: "in"
      },
      languageLabel: "Language"
    },
    projectPage: {
      scrollCue: "View project timeline"
    }
  }
};

const projectDetails = {
  de: {
    labels: {
      backToPortfolio: "Zurück zum Portfolio",
      type: "Projektart",
      period: "Zeitraum",
      status: "Status",
      technologies: "Technologien und Tools",
      timeline: "Projektverlauf",
      gallery: "Weitere Einblicke",
      previous: "← Vorheriges Projekt",
      next: "Nächstes Projekt →"
    },
    items: [
      {
        slug: "kuka-external-control",
        href: "kuka-external-control.html",
        title: "KUKA External Control",
        subtitle: "Externe Steuerung eines Industrieroboters",
        category: "Bachelorarbeit",
        type: "Bachelorarbeit",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/kuka-external-control/cover.jpg",
        summary: "Entwicklung einer externen Steuerung für einen KUKA Industrieroboter. Der Fokus lag auf Kommunikation, Bahnplanung, Bedienoberfläche und experimenteller Validierung am realen System.",
        tools: ["KUKA", "KRL", "C#", "MATLAB", "Visual Studio"],
        timeline: [
          { icon: "01", title: "Ausgangssituation", paragraphs: ["Analyse der Roboterzelle, vorhandener Schnittstellen und Anforderungen an eine externe Steuerung."], image: "assets/projects/kuka-external-control/timeline-01.jpg", tags: ["KUKA", "Robotik"] },
          { icon: "02", title: "Kommunikation", paragraphs: ["Aufbau der Datenverbindung und Definition der Signale für robuste Bewegungs- und Statusinformationen."], image: "assets/projects/kuka-external-control/timeline-02.jpg", tags: ["Interface", "KRL"] },
          { icon: "03", title: "Software GUI", paragraphs: ["Entwicklung einer Bedienoberfläche zur Steuerung, Überwachung und Auswertung der Roboterbewegung."], image: "assets/projects/kuka-external-control/timeline-03.jpg", tags: ["C#", "Visual Studio"] },
          { icon: "04", title: "Tests", paragraphs: ["Validierung der Bewegungsabläufe am realen System und schrittweise Optimierung der Steuerlogik."], image: "assets/projects/kuka-external-control/timeline-04.jpg", tags: ["Validierung", "Robot Control"] }
        ],
        galleryImages: ["assets/projects/kuka-external-control/gallery-01.jpg", "assets/projects/kuka-external-control/gallery-02.jpg", "assets/projects/kuka-external-control/gallery-03.jpg"]
      },
      {
        slug: "parallel-scara",
        href: "parallel-scara.html",
        title: "Parallel SCARA Robot",
        subtitle: "Konstruktion, Kinematik und eigene Steuerung",
        category: "Eigenprojekt",
        type: "Eigenprojekt",
        period: "Laufend",
        status: "In Entwicklung",
        cover: "assets/projects/parallel-scara/cover.jpg",
        summary: "Entwicklung eines parallelen SCARA Roboters als eigenes Robotiksystem. Der Schwerpunkt liegt auf Mechanik, Kinematik, Elektronik und einer verständlichen Steuerungsarchitektur.",
        tools: ["Fusion 360", "Arduino", "MATLAB", "VS Code"],
        timeline: [
          { icon: "01", title: "Kinematik", paragraphs: ["Modellierung der Bewegungsgeometrie und Ableitung der grundlegenden Vorwärts- und Inverskinematik."], image: "assets/projects/parallel-scara/timeline-01.jpg", tags: ["Kinematik", "MATLAB"] },
          { icon: "02", title: "Mechanik", paragraphs: ["Konstruktion des Roboters mit Fokus auf Steifigkeit, Bauraum und einfache Fertigbarkeit."], image: "assets/projects/parallel-scara/timeline-02.jpg", tags: ["CAD", "Mechanik"] },
          { icon: "03", title: "Elektronik", paragraphs: ["Auswahl und Integration der Antriebe, Sensorik und Steuerungskomponenten für erste Funktionstests."], image: "assets/projects/parallel-scara/timeline-03.jpg", tags: ["Arduino", "Antrieb"] },
          { icon: "04", title: "Software", paragraphs: ["Aufbau einer eigenen Steuerlogik für koordinierte Bewegungen und spätere Erweiterungen."], image: "assets/projects/parallel-scara/timeline-04.jpg", tags: ["Control", "Prototyping"] }
        ],
        galleryImages: ["assets/projects/parallel-scara/gallery-01.jpg", "assets/projects/parallel-scara/gallery-02.jpg", "assets/projects/parallel-scara/gallery-03.jpg"]
      },
      {
        slug: "tactile-skin",
        href: "tactile-skin.html",
        title: "Taktile Sensorhaut",
        subtitle: "Flexible Sensorik für Kontakt und Kräfte",
        category: "Semesterarbeit",
        type: "Semesterarbeit",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/tactile-skin/cover.jpg",
        summary: "Entwicklung und Validierung einer flexiblen taktilen Sensorhaut. Ziel war die Erfassung von Kontaktposition sowie Normal- und Scherkräften in einem robotischen Kontext.",
        tools: ["MATLAB", "Python", "Sensorik", "Prototyping"],
        timeline: [
          { icon: "01", title: "Konzept", paragraphs: ["Definition der Messgrößen und des mechanischen Aufbaus für eine flexible Sensorfläche."], image: "assets/projects/tactile-skin/timeline-01.jpg", tags: ["Sensorik", "Konzept"] },
          { icon: "02", title: "Prototyping", paragraphs: ["Aufbau erster Sensormuster und Integration in eine testbare Struktur."], image: "assets/projects/tactile-skin/timeline-02.jpg", tags: ["Hardware", "Prototyping"] },
          { icon: "03", title: "Messung", paragraphs: ["Durchführung strukturierter Versuche zur Erfassung von Kontaktposition und Kraftkomponenten."], image: "assets/projects/tactile-skin/timeline-03.jpg", tags: ["Validierung", "Daten"] },
          { icon: "04", title: "Auswertung", paragraphs: ["Analyse der Messdaten und Bewertung der Sensorantwort für mögliche robotische Anwendungen."], image: "assets/projects/tactile-skin/timeline-04.jpg", tags: ["MATLAB", "Analyse"] }
        ],
        galleryImages: ["assets/projects/tactile-skin/gallery-01.jpg", "assets/projects/tactile-skin/gallery-02.jpg", "assets/projects/tactile-skin/gallery-03.jpg"]
      },
      {
        slug: "robot-planning-rl",
        href: "robot-planning-rl.html",
        title: "Robot Planning mit Reinforcement Learning",
        subtitle: "Planung und Lernen in Simulation",
        category: "Masterarbeit",
        type: "Masterarbeit",
        period: "In Bearbeitung",
        status: "Laufend",
        cover: "assets/projects/robot-planning-rl/cover.jpg",
        summary: "Masterarbeitsprojekt im Bereich roboterbasierter Planung mit Reinforcement Learning. Der Fokus liegt auf Modellierung, Training und simulativer Bewertung von Planungsstrategien.",
        tools: ["Isaac Sim", "Isaac Lab", "Python", "Reinforcement Learning"],
        timeline: [
          { icon: "01", title: "Problemstellung", paragraphs: ["Einordnung der Planungsaufgabe und Definition geeigneter Zustände, Aktionen und Bewertungskriterien."], image: "assets/projects/robot-planning-rl/timeline-01.jpg", tags: ["Planning", "Research"] },
          { icon: "02", title: "Modellierung", paragraphs: ["Aufbau der Simulationsumgebung und Abbildung der relevanten Roboter- und Aufgabenlogik."], image: "assets/projects/robot-planning-rl/timeline-02.jpg", tags: ["Simulation", "Isaac"] },
          { icon: "03", title: "Training", paragraphs: ["Training der Lernverfahren und iterative Anpassung der Parameter für stabile Ergebnisse."], image: "assets/projects/robot-planning-rl/timeline-03.jpg", tags: ["RL", "Python"] },
          { icon: "04", title: "Evaluation", paragraphs: ["Auswertung der Strategien anhand definierter Metriken und Vergleich verschiedener Ansätze."], image: "assets/projects/robot-planning-rl/timeline-04.jpg", tags: ["Evaluation", "Results"] }
        ],
        galleryImages: ["assets/projects/robot-planning-rl/gallery-01.jpg", "assets/projects/robot-planning-rl/gallery-02.jpg", "assets/projects/robot-planning-rl/gallery-03.jpg"]
      },
      {
        slug: "path-planning",
        href: "path-planning.html",
        title: "Path Planning mit OMPL und Kautham",
        subtitle: "Motion Planning im ROS2-Kontext",
        category: "Uniaufgabe",
        type: "Universitätsprojekt",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/path-planning/cover.jpg",
        summary: "Umsetzung von Pfadplanung und Robotik-Simulation mit OMPL, Kautham und ROS2. Das Projekt verbindet Planung, Simulationsumgebung und Bewertung gefundener Pfade.",
        tools: ["ROS2", "OMPL", "Kautham", "Python", "VS Code"],
        timeline: [
          { icon: "01", title: "Setup", paragraphs: ["Einrichtung der Umgebung und Vorbereitung der Roboter- und Szenenmodelle."], image: "assets/projects/path-planning/timeline-01.jpg", tags: ["ROS2", "Simulation"] },
          { icon: "02", title: "Planung", paragraphs: ["Anwendung verschiedener Planner und Analyse der resultierenden Bewegungsbahnen."], image: "assets/projects/path-planning/timeline-02.jpg", tags: ["OMPL", "Motion Planning"] },
          { icon: "03", title: "Validierung", paragraphs: ["Prüfung der Pfade auf Kollisionen, Machbarkeit und Qualität innerhalb der Simulationsumgebung."], image: "assets/projects/path-planning/timeline-03.jpg", tags: ["Kautham", "Validation"] },
          { icon: "04", title: "Ergebnis", paragraphs: ["Dokumentation der Ergebnisse und Vergleich der Planungsansätze."], image: "assets/projects/path-planning/timeline-04.jpg", tags: ["Analyse", "Robotik"] }
        ],
        galleryImages: ["assets/projects/path-planning/gallery-01.jpg", "assets/projects/path-planning/gallery-02.jpg", "assets/projects/path-planning/gallery-03.jpg"]
      },
      {
        slug: "moveo-robot",
        href: "moveo-robot.html",
        title: "Moveo Robotermodell",
        subtitle: "Umbau, Aufbau und eigene Steuerung",
        category: "Eigenprojekt",
        type: "Eigenprojekt",
        period: "Platzhalter Zeitraum",
        status: "In Entwicklung",
        cover: "assets/projects/moveo-robot/cover.jpg",
        summary: "Umbau und Aufbau eines Moveo Roboterarms mit eigener Steuerung. Im Mittelpunkt stehen praktische Inbetriebnahme, Mechanik, Elektronik und reproduzierbare Bewegungen.",
        tools: ["Arduino", "Fusion 360", "Robotik", "VS Code"],
        timeline: [
          { icon: "01", title: "Umbau", paragraphs: ["Analyse des vorhandenen Roboterarms und Anpassung mechanischer Komponenten für den Neuaufbau."], image: "assets/projects/moveo-robot/timeline-01.jpg", tags: ["Mechanik", "Umbau"] },
          { icon: "02", title: "Elektronik", paragraphs: ["Integration von Antrieben und Steuerungskomponenten für erste Bewegungsversuche."], image: "assets/projects/moveo-robot/timeline-02.jpg", tags: ["Arduino", "Hardware"] },
          { icon: "03", title: "Steuerung", paragraphs: ["Entwicklung einer einfachen Steuerlogik für Achsbewegungen und Tests am Modell."], image: "assets/projects/moveo-robot/timeline-03.jpg", tags: ["Control", "Robotik"] },
          { icon: "04", title: "Inbetriebnahme", paragraphs: ["Schrittweises Testen und Verbessern der mechanischen und elektrischen Funktion."], image: "assets/projects/moveo-robot/timeline-04.jpg", tags: ["Testing", "Prototyping"] }
        ],
        galleryImages: ["assets/projects/moveo-robot/gallery-01.jpg", "assets/projects/moveo-robot/gallery-02.jpg", "assets/projects/moveo-robot/gallery-03.jpg"]
      },
      {
        slug: "cnc-fraese",
        href: "cnc-fraese.html",
        title: "CNC Fräse Eigenbau",
        subtitle: "Mechanischer Aufbau und praktische Umsetzung",
        category: "Schulprojekt",
        type: "Schulprojekt",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/cnc-fraese/cover.jpg",
        summary: "Eigenbau einer CNC Fräse mit Fokus auf mechanischem Aufbau, Antriebstechnik und Fertigung. Das Projekt verbindet Konstruktion, Montage und praktische Tests.",
        tools: ["Fusion 360", "CNC", "Mechanik", "Arduino"],
        timeline: [
          { icon: "01", title: "Konzept", paragraphs: ["Definition von Arbeitsraum, Aufbauprinzip und mechanischen Anforderungen der Fräse."], image: "assets/projects/cnc-fraese/timeline-01.jpg", tags: ["Konzept", "CNC"] },
          { icon: "02", title: "Mechanik", paragraphs: ["Auslegung und Montage der Struktur, Führungen und Antriebselemente."], image: "assets/projects/cnc-fraese/timeline-02.jpg", tags: ["Mechanik", "Konstruktion"] },
          { icon: "03", title: "Fertigung", paragraphs: ["Herstellung und Anpassung der Bauteile sowie praktische Montage des Systems."], image: "assets/projects/cnc-fraese/timeline-03.jpg", tags: ["Fertigung", "Eigenbau"] },
          { icon: "04", title: "Ergebnis", paragraphs: ["Erste Funktionstests und Bewertung der Genauigkeit und Stabilität."], image: "assets/projects/cnc-fraese/timeline-04.jpg", tags: ["Testing", "Prototyping"] }
        ],
        galleryImages: ["assets/projects/cnc-fraese/gallery-01.jpg", "assets/projects/cnc-fraese/gallery-02.jpg", "assets/projects/cnc-fraese/gallery-03.jpg"]
      },
      {
        slug: "ccloos-c4-compact",
        href: "ccloos-c4-compact.html",
        title: "Offline Roboterprogrammierung",
        subtitle: "CLOOS C4 Compact Schweißroboterzelle",
        category: "Firmenprojekt",
        type: "Firmenprojekt",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/ccloos-c4-compact/cover.jpg",
        summary: "Offline-Programmierung für eine CLOOS C4 Compact Schweißroboterzelle. Ziel war die Unterstützung industrieller Fertigungsprozesse durch vorbereitete Roboterprogramme.",
        tools: ["CLOOS", "Offline Programming", "Robotik", "Industrie"],
        timeline: [
          { icon: "01", title: "Zelle", paragraphs: ["Analyse der Roboterzelle, Arbeitsbereiche und fertigungstechnischen Anforderungen."], image: "assets/projects/ccloos-c4-compact/timeline-01.jpg", tags: ["CLOOS", "Industrie"] },
          { icon: "02", title: "Programmierung", paragraphs: ["Vorbereitung von Bewegungsabläufen und Schweißpfaden in einer Offline-Umgebung."], image: "assets/projects/ccloos-c4-compact/timeline-02.jpg", tags: ["Offline", "Robotik"] },
          { icon: "03", title: "Abgleich", paragraphs: ["Übertragung und Abstimmung der Programme mit den realen Gegebenheiten der Zelle."], image: "assets/projects/ccloos-c4-compact/timeline-03.jpg", tags: ["Validierung", "Fertigung"] },
          { icon: "04", title: "Einsatz", paragraphs: ["Unterstützung einer robusteren Vorbereitung industrieller Roboterabläufe."], image: "assets/projects/ccloos-c4-compact/timeline-04.jpg", tags: ["Automation", "Prozess"] }
        ],
        galleryImages: ["assets/projects/ccloos-c4-compact/gallery-01.jpg", "assets/projects/ccloos-c4-compact/gallery-02.jpg", "assets/projects/ccloos-c4-compact/gallery-03.jpg"]
      },
      {
        slug: "order-automation",
        href: "order-automation.html",
        title: "Auftragsautomatisierung",
        subtitle: "Datenextraktion und Prozesslogik",
        category: "Firmenprojekt",
        type: "Firmenprojekt",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/order-automation/cover.jpg",
        summary: "Automatisierung von Auftragsprozessen mit Fokus auf Datenextraktion, Prozesslogik und zuverlässige Übergabe an bestehende Systeme.",
        tools: ["Python", "Power Automate", "ERP", "Automation"],
        timeline: [
          { icon: "01", title: "Prozessanalyse", paragraphs: ["Analyse der vorhandenen Auftragsdaten und Identifikation wiederkehrender manueller Schritte."], image: "assets/projects/order-automation/timeline-01.jpg", tags: ["Prozess", "Daten"] },
          { icon: "02", title: "Extraktion", paragraphs: ["Automatisierte Erfassung relevanter Informationen aus strukturierten und halbstrukturierten Quellen."], image: "assets/projects/order-automation/timeline-02.jpg", tags: ["Python", "Automation"] },
          { icon: "03", title: "Logik", paragraphs: ["Abbildung von Regeln und Prüfungen für eine zuverlässige Weiterverarbeitung."], image: "assets/projects/order-automation/timeline-03.jpg", tags: ["Workflow", "ERP"] },
          { icon: "04", title: "Übergabe", paragraphs: ["Vorbereitung der Daten für bestehende Systeme und Reduktion manueller Zwischenschritte."], image: "assets/projects/order-automation/timeline-04.jpg", tags: ["Integration", "Prozess"] }
        ],
        galleryImages: ["assets/projects/order-automation/gallery-01.jpg", "assets/projects/order-automation/gallery-02.jpg", "assets/projects/order-automation/gallery-03.jpg"]
      },
      {
        slug: "cocktailbar",
        href: "cocktailbar.html",
        title: "Cocktailbar",
        subtitle: "Planung, Aufbau und technische Umsetzung",
        category: "Eigenprojekt",
        type: "Eigenprojekt",
        period: "Platzhalter Zeitraum",
        status: "Abgeschlossen",
        cover: "assets/projects/cocktailbar/cover.jpg",
        summary: "Eigenes Bar-Projekt mit Planung, Aufbau und technischer Umsetzung einer individuellen Cocktailbar. Der Fokus liegt auf Konstruktion, Fertigung und sauberer Integration der Details.",
        tools: ["Fusion 360", "Design", "Hardware", "Prototyping"],
        timeline: [
          { icon: "01", title: "Idee", paragraphs: ["Entwicklung eines funktionalen Designs, das Nutzung, Stauraum und Erscheinungsbild verbindet."], image: "assets/projects/cocktailbar/timeline-01.jpg", tags: ["Design", "Konzept"] },
          { icon: "02", title: "Konstruktion", paragraphs: ["Planung der Struktur und Details mit Blick auf Fertigbarkeit und Alltagstauglichkeit."], image: "assets/projects/cocktailbar/timeline-02.jpg", tags: ["CAD", "Eigenbau"] },
          { icon: "03", title: "Fertigung", paragraphs: ["Zuschnitt, Montage und Anpassung der einzelnen Bauteile."], image: "assets/projects/cocktailbar/timeline-03.jpg", tags: ["Hardware", "Aufbau"] },
          { icon: "04", title: "Fertige Bar", paragraphs: ["Finaler Aufbau mit Fokus auf sauberer Ausführung und praktischer Nutzung."], image: "assets/projects/cocktailbar/timeline-04.jpg", tags: ["Finish", "Prototyping"] }
        ],
        galleryImages: ["assets/projects/cocktailbar/gallery-01.jpg", "assets/projects/cocktailbar/gallery-02.jpg", "assets/projects/cocktailbar/gallery-03.jpg"]
      }
    ]
  },
  en: {
    labels: {
      backToPortfolio: "Back to portfolio",
      type: "Project type",
      period: "Period",
      status: "Status",
      technologies: "Technologies and tools",
      timeline: "Project timeline",
      gallery: "Additional views",
      previous: "← Previous project",
      next: "Next project →"
    },
    items: []
  }
};

projectDetails.en.items = projectDetails.de.items.map((project) => {
  const translatedTitle = {
    "CNC Fräse Eigenbau": "Custom CNC Router",
    "Moveo Robotermodell": "Moveo Robot Model",
    "Taktile Sensorhaut": "Tactile Sensing Skin",
    "Robot Planning mit Reinforcement Learning": "Robot Planning with Reinforcement Learning",
    "Path Planning mit OMPL und Kautham": "Path Planning with OMPL and Kautham",
    "Offline Roboterprogrammierung": "Offline Robot Programming",
    "Auftragsautomatisierung": "Order Automation",
    "Cocktailbar": "Cocktail Bar"
  }[project.title] || project.title;

  const translatedTimelineTitles = {
    "Ausgangssituation": "Initial situation",
    "Kommunikation": "Communication",
    "Software GUI": "Software GUI",
    "Tests": "Testing",
    "Kinematik": "Kinematics",
    "Mechanik": "Mechanics",
    "Elektronik": "Electronics",
    "Software": "Software",
    "Konzept": "Concept",
    "Prototyping": "Prototyping",
    "Messung": "Measurement",
    "Auswertung": "Evaluation",
    "Problemstellung": "Problem definition",
    "Modellierung": "Modeling",
    "Training": "Training",
    "Evaluation": "Evaluation",
    "Setup": "Setup",
    "Planung": "Planning",
    "Validierung": "Validation",
    "Ergebnis": "Result",
    "Umbau": "Modification",
    "Steuerung": "Control",
    "Inbetriebnahme": "Commissioning",
    "Fertigung": "Manufacturing",
    "Zelle": "Robot cell",
    "Programmierung": "Programming",
    "Abgleich": "Alignment",
    "Einsatz": "Application",
    "Prozessanalyse": "Process analysis",
    "Extraktion": "Extraction",
    "Logik": "Logic",
    "Übergabe": "Handover",
    "Idee": "Idea",
    "Konstruktion": "Design",
    "Fertige Bar": "Finished bar"
  };

  return {
    ...project,
    title: translatedTitle,
    category: {
    "Bachelorarbeit": "Bachelor Thesis",
    "Eigenprojekt": "Personal Project",
    "Semesterarbeit": "Semester Project",
    "Masterarbeit": "Master Thesis",
    "Uniaufgabe": "University Task",
    "Schulprojekt": "School Project",
    "Firmenprojekt": "Company Project"
    }[project.category] || project.category,
    type: {
    "Bachelorarbeit": "Bachelor thesis",
    "Eigenprojekt": "Personal project",
    "Semesterarbeit": "Semester project",
    "Masterarbeit": "Master thesis",
    "Universitätsprojekt": "University project",
    "Schulprojekt": "School project",
    "Firmenprojekt": "Company project"
    }[project.type] || project.type,
    period: project.period === "Laufend" || project.period === "In Bearbeitung" ? "Ongoing" : "Placeholder period",
    status: {
    "Abgeschlossen": "Completed",
    "In Entwicklung": "In development",
    "Laufend": "Ongoing"
    }[project.status] || project.status,
    subtitle: {
    "Externe Steuerung eines Industrieroboters": "External control of an industrial robot",
    "Konstruktion, Kinematik und eigene Steuerung": "Design, kinematics and custom control",
    "Flexible Sensorik für Kontakt und Kräfte": "Flexible sensing for contact and forces",
    "Planung und Lernen in Simulation": "Planning and learning in simulation",
    "Motion Planning im ROS2-Kontext": "Motion planning in a ROS2 context",
    "Umbau, Aufbau und eigene Steuerung": "Modification, build-up and custom control",
    "Mechanischer Aufbau und praktische Umsetzung": "Mechanical build and practical implementation",
    "CLOOS C4 Compact Schweißroboterzelle": "CLOOS C4 Compact welding robot cell",
    "Datenextraktion und Prozesslogik": "Data extraction and process logic",
    "Planung, Aufbau und technische Umsetzung": "Planning, build and technical implementation"
    }[project.subtitle] || project.subtitle,
    summary: `Short project overview for ${translatedTitle}. This page is prepared as a structured placeholder with project-specific sections, tools, timeline steps and gallery slots that can be replaced with final content later.`,
    timeline: project.timeline.map((item) => ({
      ...item,
      title: translatedTimelineTitles[item.title] || item.title,
      paragraphs: ["Project-specific placeholder text for this stage. It describes the technical work, decisions and results in a compact way."]
    }))
  };
});

window.siteContent = siteContent;
window.projectDetails = projectDetails;
