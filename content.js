const siteContent = {
  de: {
    meta: {
      title: "Jonas Fritsch | Engineering & Robotics Portfolio",
      description: "Portfolio fuer Mechatronik, Robotik, Automatisierung und technische Entwicklung."
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
      menuLabel: "Menue oeffnen",
      items: [
        { label: "Home", href: "#home" },
        { label: "Ueber mich", href: "#about" },
        { label: "Journey", href: "#journey" },
        { label: "Projekte", href: "#projects" },
        { label: "CV", href: "#cv" },
        { label: "Kontakt", href: "#contact" }
      ]
    },
    hero: {
      kicker: "Hi, I'm",
      name: "Jonas Fritsch",
      degree: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering @ TUM",
      focus: "Robotics • Automation • Prototyping • Control Systems",
      actionsLabel: "Hero Navigation",
      buttons: [
        { label: "Projects", href: "#projects", style: "primary" },
        { label: "CV", href: "#cv", style: "secondary" },
        { label: "Contact", href: "#contact", style: "ghost" }
      ]
    },
    about: {
      eyebrow: "Ueber mich",
      heading: "Engineering zwischen Robotik, Automatisierung und praktischer Entwicklung.",
      cardTitle: "Hands on Robotics Engineering",
      paragraphs: [
        "Ich interessiere mich fuer Robotik, Automatisierung und technische Systeme, die nicht nur theoretisch funktionieren, sondern als Prototyp, Versuchsaufbau oder Maschine real greifbar werden. Besonders spannend ist fuer mich die Verbindung aus Mechanik, Elektronik und Software.",
        "Mein Fokus liegt auf interdisziplinaerer Entwicklung: Anforderungen verstehen, Konzepte ableiten, Hardware aufbauen, Steuerung implementieren und technische Entscheidungen durch Tests sichtbar machen."
      ],
      visualLabel: "Engineering Schwerpunkte",
      pillars: ["Mechanics", "Control", "Electronics", "Software"]
    },
    skills: {
      label: "Technische Schwerpunkte",
      items: ["Robot Control", "Mechatronics", "CAD Design", "Embedded Systems", "Motion Planning", "Sensor Integration", "Automation"]
    },
    journey: {
      eyebrow: "Bildung & Journey",
      heading: "Akademische Entwicklung mit technischem Schwerpunkt und internationaler Perspektive.",
      entries: [
        {
          logo: "KIT",
          label: "Bachelor",
          title: "KIT",
          text: "Bachelor Maschinenbau mit technischer Grundlage in Konstruktion, Mechanik und ingenieurwissenschaftlichem Denken."
        },
        {
          logo: "TUM",
          label: "Master",
          title: "TUM",
          text: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering mit Fokus auf Robotik, Systeme und Regelung."
        },
        {
          logo: "UPC",
          label: "International",
          title: "UPC Barcelona",
          text: "Auslandssemester mit internationaler Erfahrung, neuen technischen Perspektiven und akademischem Austausch."
        }
      ]
    },
    projects: {
      eyebrow: "Projekte",
      heading: "Ein gemeinsames Portfolio aus Robotik, Prototyping, Steuerung und Forschung.",
      detailLabel: "Details folgen",
      cards: [
        {
          title: "Parallel SCARA Robot",
          type: "Robot Design",
          category: "Eigenprojekt",
          mediaLabel: "SCARA Robot Media",
          mediaClass: "media-scara",
          description: "Konstruktion, Kinematik, Prototyping und Steuerung eines parallelen SCARA-Roboters als eigenstaendiges Robotikprojekt.",
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
          category: "Universitaet",
          mediaLabel: "Tactile Sensor Media",
          mediaClass: "media-tactile",
          description: "Taktile Sensorhaut als universitaerer Prototyp mit Fokus auf Sensorintegration, Signalverarbeitung und Robotik-Anwendung.",
          technologies: ["Sensors", "Data", "Prototyping"],
          linkLabel: "Details zum Tactile Sensing Skin Projekt folgen",
          href: "#"
        },
        {
          title: "Motion Planning / Robotics",
          type: "Algorithms",
          category: "Universitaet",
          mediaLabel: "Motion Planning Media",
          mediaClass: "media-motion",
          description: "Platzhalter fuer Pfadplanung, Trajektorien, Simulation und spaetere Erweiterung mit interaktiven Visualisierungen.",
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
          description: "Platzhalter fuer ein forschungsorientiertes Masterarbeitsprojekt mit Robotik-, Mechatronik- oder Biomechanik-Bezug.",
          technologies: ["Research", "Robotics", "Validation"],
          linkLabel: "Details zur Masterarbeit folgen",
          href: "#"
        }
      ]
    },
    cv: {
      eyebrow: "Lebenslauf",
      heading: "Kompakte Resume Vorschau und PDF Download.",
      text: "Platzhalter fuer technische Schwerpunkte, relevante Stationen, Tools, Programmiersprachen, CAD-Umgebungen und Robotik-Erfahrung.",
      tags: ["Robotics", "Automation", "Prototyping"],
      downloadLabel: "CV herunterladen",
      downloadAria: "Lebenslauf als PDF herunterladen"
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Bereit fuer Austausch zu Robotik, Automatisierung und Engineering Rollen.",
      items: [
        { label: "Email", value: "jonas@example.com", href: "mailto:jonas@example.com" },
        { label: "LinkedIn", value: "Profil spaeter ergaenzen", href: "#", ariaLabel: "LinkedIn Profil spaeter ergaenzen" },
        { label: "GitHub", value: "Repositorys spaeter ergaenzen", href: "#", ariaLabel: "GitHub Profil spaeter ergaenzen" }
      ]
    },
    footer: {
      text: "Jonas Fritsch. Engineering & Robotics Portfolio."
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
      homeLabel: "Back to home"
    },
    language: {
      label: "Switch language",
      toggle: "DE"
    },
    nav: {
      label: "Main navigation",
      menuLabel: "Open menu",
      items: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Journey", href: "#journey" },
        { label: "Projects", href: "#projects" },
        { label: "CV", href: "#cv" },
        { label: "Contact", href: "#contact" }
      ]
    },
    hero: {
      kicker: "Hi, I'm",
      name: "Jonas Fritsch",
      degree: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering @ TUM",
      focus: "Robotics • Automation • Prototyping • Control Systems",
      actionsLabel: "Hero navigation",
      buttons: [
        { label: "Projects", href: "#projects", style: "primary" },
        { label: "CV", href: "#cv", style: "secondary" },
        { label: "Contact", href: "#contact", style: "ghost" }
      ]
    },
    about: {
      eyebrow: "About",
      heading: "Engineering between robotics, automation and practical development.",
      cardTitle: "Hands on Robotics Engineering",
      paragraphs: [
        "I am interested in robotics, automation and technical systems that do not only work in theory, but become tangible as prototypes, test setups or machines. The connection between mechanics, electronics and software is what makes this field especially exciting for me.",
        "My focus is interdisciplinary development: understanding requirements, deriving concepts, building hardware, implementing control and making technical decisions visible through testing."
      ],
      visualLabel: "Engineering focus areas",
      pillars: ["Mechanics", "Control", "Electronics", "Software"]
    },
    skills: {
      label: "Technical focus areas",
      items: ["Robot Control", "Mechatronics", "CAD Design", "Embedded Systems", "Motion Planning", "Sensor Integration", "Automation"]
    },
    journey: {
      eyebrow: "Education & Journey",
      heading: "Academic development with a technical focus and international perspective.",
      entries: [
        {
          logo: "KIT",
          label: "Bachelor",
          title: "KIT",
          text: "Bachelor's degree in mechanical engineering with a technical foundation in design, mechanics and engineering thinking."
        },
        {
          logo: "TUM",
          label: "Master",
          title: "TUM",
          text: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering with focus on robotics, systems and control."
        },
        {
          logo: "UPC",
          label: "International",
          title: "UPC Barcelona",
          text: "Semester abroad with international experience, new technical perspectives and academic exchange."
        }
      ]
    },
    projects: {
      eyebrow: "Projects",
      heading: "A unified portfolio of robotics, prototyping, control and research.",
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
          description: "University prototype of a tactile sensing skin with focus on sensor integration, signal processing and robotics application.",
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
      eyebrow: "CV",
      heading: "Compact resume preview and PDF download.",
      text: "Placeholder for technical focus areas, relevant experience, tools, programming languages, CAD environments and robotics experience.",
      tags: ["Robotics", "Automation", "Prototyping"],
      downloadLabel: "Download CV",
      downloadAria: "Download CV as PDF"
    },
    contact: {
      eyebrow: "Contact",
      heading: "Open to exchange about robotics, automation and engineering roles.",
      items: [
        { label: "Email", value: "jonas@example.com", href: "mailto:jonas@example.com" },
        { label: "LinkedIn", value: "Profile to be added", href: "#", ariaLabel: "LinkedIn profile to be added" },
        { label: "GitHub", value: "Repositories to be added", href: "#", ariaLabel: "GitHub profile to be added" }
      ]
    },
    footer: {
      text: "Jonas Fritsch. Engineering & Robotics Portfolio."
    }
  }
};

window.siteContent = siteContent;
