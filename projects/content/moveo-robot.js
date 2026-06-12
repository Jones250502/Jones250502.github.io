const moveoRobotContent = {
  de: {
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
    focus: ["Arduino", "Robotik", "Steuerung", "Prototyping"],
    tools: ["Arduino", "Fusion 360", "Robotik", "VS Code"],
    timeline: [
      { icon: "01", title: "Umbau", paragraphs: ["Analyse des vorhandenen Roboterarms und Anpassung mechanischer Komponenten für den Neuaufbau."], image: "assets/projects/moveo-robot/timeline-01.jpg", tags: ["Fusion 360", "Mechanik", "Umbau"] },
      { icon: "02", title: "Elektronik", paragraphs: ["Integration von Antrieben und Steuerungskomponenten für erste Bewegungsversuche."], image: "assets/projects/moveo-robot/timeline-02.jpg", tags: ["Arduino", "Hardware", "Antriebstechnik"] },
      { icon: "03", title: "Steuerung", paragraphs: ["Entwicklung einer einfachen Steuerlogik für Achsbewegungen und Tests am Modell."], image: "assets/projects/moveo-robot/timeline-03.jpg", tags: ["VS Code", "Robot Control", "Steuerung"] },
      { icon: "04", title: "Inbetriebnahme", paragraphs: ["Schrittweises Testen und Verbessern der mechanischen und elektrischen Funktion."], image: "assets/projects/moveo-robot/timeline-04.jpg", tags: ["Testing", "Prototyping", "Robotik"] }
    ],
    galleryImages: ["assets/projects/moveo-robot/gallery-01.jpg", "assets/projects/moveo-robot/gallery-02.jpg", "assets/projects/moveo-robot/gallery-03.jpg"]
  },
  en: {
    slug: "moveo-robot",
    href: "moveo-robot.html",
    title: "Moveo Robot Model",
    subtitle: "Modification, build-up and custom control",
    category: "Personal Project",
    type: "Personal project",
    period: "Placeholder period",
    status: "In development",
    cover: "assets/projects/moveo-robot/cover.jpg",
    summary: "Modification and build-up of a Moveo robot arm with custom control. The focus is on practical commissioning, mechanics, electronics and reproducible motion.",
    focus: ["Arduino", "Robotics", "Control", "Prototyping"],
    tools: ["Arduino", "Fusion 360", "Robotics", "VS Code"],
    timeline: [
      { icon: "01", title: "Modification", paragraphs: ["Analyzing the existing robot arm and adapting mechanical components for the rebuild."], image: "assets/projects/moveo-robot/timeline-01.jpg", tags: ["Fusion 360", "Mechanics", "Modification"] },
      { icon: "02", title: "Electronics", paragraphs: ["Integrating drives and control components for first motion tests."], image: "assets/projects/moveo-robot/timeline-02.jpg", tags: ["Arduino", "Hardware", "Drives"] },
      { icon: "03", title: "Control", paragraphs: ["Developing simple control logic for joint motion and model testing."], image: "assets/projects/moveo-robot/timeline-03.jpg", tags: ["VS Code", "Robot Control", "Control"] },
      { icon: "04", title: "Commissioning", paragraphs: ["Step-by-step testing and improvement of mechanical and electrical function."], image: "assets/projects/moveo-robot/timeline-04.jpg", tags: ["Testing", "Prototyping", "Robotics"] }
    ],
    galleryImages: ["assets/projects/moveo-robot/gallery-01.jpg", "assets/projects/moveo-robot/gallery-02.jpg", "assets/projects/moveo-robot/gallery-03.jpg"]
  }
};

window.projectDetailContent = moveoRobotContent;
