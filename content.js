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
      detailLabel: "Details folgen",
      cards: [
        {
          title: "Parallel SCARA Robot",
          type: "Robot Design",
          category: "Eigenprojekt",
          mediaLabel: "SCARA Robot Media",
          mediaClass: "media-scara",
          description: "Konstruktion, Kinematik, Prototyping und Steuerung eines parallelen SCARA-Roboters als eigenständiges Robotikprojekt.",
          technologies: ["CAD", "Kinematics", "Control"],
          linkLabel: "Details zum Parallel SCARA Robot Projekt folgen",
          href: "#"
        },
        {
          title: "KUKA External Control",
          type: "Industrial Robotics",
          category: "Bachelorarbeit",
          mediaLabel: "KUKA Control Media",
          mediaClass: "media-kuka",
          description: "Externe Robotersteuerung, Schnittstellen, Bahnplanung und experimentelle Validierung an einem Industrieroboter.",
          technologies: ["KUKA", "Automation", "Path Control"],
          linkLabel: "Details zum KUKA External Control Projekt folgen",
          href: "#"
        },
        {
          title: "Tactile Sensing Skin",
          type: "Sensing",
          category: "Universität",
          mediaLabel: "Tactile Sensor Media",
          mediaClass: "media-tactile",
          description: "Taktile Sensorhaut als universitärer Prototyp mit Fokus auf Sensorintegration, Signalverarbeitung und Robotik-Anwendung.",
          technologies: ["Sensors", "Data", "Prototyping"],
          linkLabel: "Details zum Tactile Sensing Skin Projekt folgen",
          href: "#"
        },
        {
          title: "Motion Planning / Robotics",
          type: "Algorithms",
          category: "Universität",
          mediaLabel: "Motion Planning Media",
          mediaClass: "media-motion",
          description: "Platzhalter für Pfadplanung, Trajektorien, Simulation und spätere Erweiterung mit interaktiven Visualisierungen.",
          technologies: ["Planning", "Simulation", "JavaScript"],
          linkLabel: "Details zum Motion Planning Projekt folgen",
          href: "#"
        },
        {
          title: "Masterarbeit",
          type: "Research",
          category: "Forschung",
          mediaLabel: "Master Thesis Media",
          mediaClass: "media-thesis",
          featured: true,
          description: "Platzhalter für ein forschungsorientiertes Masterarbeitsprojekt mit Robotik-, Mechatronik- oder Biomechanik-Bezug.",
          technologies: ["Research", "Robotics", "Validation"],
          linkLabel: "Details zur Masterarbeit folgen",
          href: "#"
        }
      ]
    },
    cv: {
      kicker: "Lebenslauf",
      title: "Lebenslauf",
      subtitle: "Ausbildung, technische Schwerpunkte und Engineering Erfahrung im Überblick.",
      pdfPath: "assets/documents/cv-jonas-fritsch.pdf",
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
      detailLabel: "Details coming soon",
      cards: [
        {
          title: "Parallel SCARA Robot",
          type: "Robot Design",
          category: "Personal Project",
          mediaLabel: "SCARA Robot Media",
          mediaClass: "media-scara",
          description: "Design, kinematics, prototyping and control of a parallel SCARA robot as an independent robotics project.",
          technologies: ["CAD", "Kinematics", "Control"],
          linkLabel: "Details for the Parallel SCARA Robot project coming soon",
          href: "#"
        },
        {
          title: "KUKA External Control",
          type: "Industrial Robotics",
          category: "Bachelor Thesis",
          mediaLabel: "KUKA Control Media",
          mediaClass: "media-kuka",
          description: "External robot control, interfaces, path planning and experimental validation on an industrial robot.",
          technologies: ["KUKA", "Automation", "Path Control"],
          linkLabel: "Details for the KUKA External Control project coming soon",
          href: "#"
        },
        {
          title: "Tactile Sensing Skin",
          type: "Sensing",
          category: "University",
          mediaLabel: "Tactile Sensor Media",
          mediaClass: "media-tactile",
          description: "University prototype of a tactile sensing skin with a focus on sensor integration, signal processing and robotics application.",
          technologies: ["Sensors", "Data", "Prototyping"],
          linkLabel: "Details for the Tactile Sensing Skin project coming soon",
          href: "#"
        },
        {
          title: "Motion Planning / Robotics",
          type: "Algorithms",
          category: "University",
          mediaLabel: "Motion Planning Media",
          mediaClass: "media-motion",
          description: "Placeholder for path planning, trajectories, simulation and later extension with interactive visualizations.",
          technologies: ["Planning", "Simulation", "JavaScript"],
          linkLabel: "Details for the Motion Planning project coming soon",
          href: "#"
        },
        {
          title: "Master Thesis",
          type: "Research",
          category: "Research",
          mediaLabel: "Master Thesis Media",
          mediaClass: "media-thesis",
          featured: true,
          description: "Placeholder for a research-oriented master's thesis project related to robotics, mechatronics or biomechanics.",
          technologies: ["Research", "Robotics", "Validation"],
          linkLabel: "Details for the master's thesis coming soon",
          href: "#"
        }
      ]
    },
    cv: {
      kicker: "Resume",
      title: "Resume",
      subtitle: "Education, technical focus areas and engineering experience at a glance.",
      pdfPath: "assets/documents/cv-jonas-fritsch.pdf",
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
