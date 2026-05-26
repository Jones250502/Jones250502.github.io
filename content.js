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
    }
  }
};

window.siteContent = siteContent;
