const parallelScaraContent = {
  de: {
    slug: "parallel-scara",
    href: "parallel-scara.html",
    title: "Parallel SCARA Robot",
    subtitle: "Konstruktion, Kinematik und eigene Steuerung",
    category: "Eigenprojekt",
    type: "Eigenprojekt",
    period: "Laufend",
    status: "In Entwicklung",
    cover: "assets/projects/parallel-scara/cover.jpg",
    summary: "Entwicklung eines parallelen SCARA Roboters als eigenes Robotiksystem. Der Schwerpunkt liegt auf mechanischer Konstruktion, Kinematik, Elektronik und einer nachvollziehbaren Steuerungsarchitektur.",
    focus: ["Fusion 360", "Kinematik", "Arduino", "MATLAB", "Prototyping"],
    tools: ["Fusion 360", "Arduino", "MATLAB", "VS Code"],
    timeline: [
      { icon: "01", title: "Kinematik", paragraphs: ["Modellierung der Bewegungsgeometrie und Ableitung der grundlegenden Vorwärts- und Inverskinematik."], images: ["assets/projects/parallel-scara/demo-01.svg"], tags: ["MATLAB", "Kinematik", "Robot Control"] },
      { icon: "02", title: "Mechanik", paragraphs: ["Konstruktion der Struktur mit Fokus auf Steifigkeit, Bauraum und einfache Fertigbarkeit."], images: ["assets/projects/parallel-scara/demo-02.svg", "assets/projects/parallel-scara/demo-03.svg"], tags: ["Fusion 360", "CAD", "Mechanik"] },
      { icon: "03", title: "Elektronik", paragraphs: ["Auswahl und Integration der Antriebe, Sensorik und Steuerungskomponenten für erste Funktionstests."], images: ["assets/projects/parallel-scara/demo-04.svg", "assets/projects/parallel-scara/demo-05.svg", "assets/projects/parallel-scara/demo-06.svg"], tags: ["Arduino", "Antriebstechnik", "Hardware"] },
      { icon: "04", title: "Software", paragraphs: ["Aufbau einer eigenen Steuerlogik für koordinierte Bewegungen und spätere Erweiterungen."], images: ["assets/projects/parallel-scara/demo-07.svg", "assets/projects/parallel-scara/demo-08.svg", "assets/projects/parallel-scara/demo-09.svg", "assets/projects/parallel-scara/demo-10.svg"], tags: ["VS Code", "Steuerung", "Prototyping"] }
    ],
    galleryImages: ["assets/projects/parallel-scara/gallery-01.jpg", "assets/projects/parallel-scara/gallery-02.jpg", "assets/projects/parallel-scara/gallery-03.jpg"]
  },
  en: {
    slug: "parallel-scara",
    href: "parallel-scara.html",
    title: "Parallel SCARA Robot",
    subtitle: "Design, kinematics and custom control",
    category: "Personal Project",
    type: "Personal project",
    period: "Ongoing",
    status: "In development",
    cover: "assets/projects/parallel-scara/cover.jpg",
    summary: "Development of a parallel SCARA robot as a custom robotics system. The focus is on mechanical design, kinematics, electronics and a transparent control architecture.",
    focus: ["Fusion 360", "Kinematics", "Arduino", "MATLAB", "Prototyping"],
    tools: ["Fusion 360", "Arduino", "MATLAB", "VS Code"],
    timeline: [
      { icon: "01", title: "Kinematics", paragraphs: ["Modeling the motion geometry and deriving basic forward and inverse kinematics."], images: ["assets/projects/parallel-scara/demo-01.svg"], tags: ["MATLAB", "Kinematics", "Robot Control"] },
      { icon: "02", title: "Mechanics", paragraphs: ["Designing the structure with focus on stiffness, workspace and practical manufacturability."], images: ["assets/projects/parallel-scara/demo-02.svg", "assets/projects/parallel-scara/demo-03.svg"], tags: ["Fusion 360", "CAD", "Mechanics"] },
      { icon: "03", title: "Electronics", paragraphs: ["Selecting and integrating drives, sensors and control components for first functional tests."], images: ["assets/projects/parallel-scara/demo-04.svg", "assets/projects/parallel-scara/demo-05.svg", "assets/projects/parallel-scara/demo-06.svg"], tags: ["Arduino", "Drives", "Hardware"] },
      { icon: "04", title: "Software", paragraphs: ["Building custom control logic for coordinated motion and later extensions."], images: ["assets/projects/parallel-scara/demo-07.svg", "assets/projects/parallel-scara/demo-08.svg", "assets/projects/parallel-scara/demo-09.svg", "assets/projects/parallel-scara/demo-10.svg"], tags: ["VS Code", "Control", "Prototyping"] }
    ],
    galleryImages: ["assets/projects/parallel-scara/gallery-01.jpg", "assets/projects/parallel-scara/gallery-02.jpg", "assets/projects/parallel-scara/gallery-03.jpg"]
  }
};

window.projectDetailContent = parallelScaraContent;
