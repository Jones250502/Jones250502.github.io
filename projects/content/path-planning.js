const pathPlanningContent = {
  de: {
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
    focus: ["ROS2", "OMPL", "Kautham", "Motion Planning"],
    tools: ["ROS2", "OMPL", "Kautham", "Python", "VS Code"],
    timeline: [
      { icon: "01", title: "Setup", paragraphs: ["Einrichtung der Umgebung und Vorbereitung der Roboter- und Szenenmodelle."], images: ["assets/projects/path-planning/timeline-01.jpg"], tags: ["ROS2", "Kautham", "Setup"] },
      { icon: "02", title: "Planung", paragraphs: ["Anwendung verschiedener Planner und Analyse der resultierenden Bewegungsbahnen."], images: ["assets/projects/path-planning/timeline-02.jpg"], tags: ["OMPL", "Motion Planning", "Python"] },
      { icon: "03", title: "Validierung", paragraphs: ["Prüfung der Pfade auf Kollisionen, Machbarkeit und Qualität innerhalb der Simulationsumgebung."], images: ["assets/projects/path-planning/timeline-03.jpg"], tags: ["Kautham", "Collision Check", "Validation"] },
      { icon: "04", title: "Ergebnis", paragraphs: ["Dokumentation der Ergebnisse und Vergleich der Planungsansätze."], images: ["assets/projects/path-planning/timeline-04.jpg"], tags: ["VS Code", "Analyse", "Robotik"] }
    ],
    galleryImages: ["assets/projects/path-planning/gallery-01.jpg", "assets/projects/path-planning/gallery-02.jpg", "assets/projects/path-planning/gallery-03.jpg"]
  },
  en: {
    slug: "path-planning",
    href: "path-planning.html",
    title: "Path Planning with OMPL and Kautham",
    subtitle: "Motion planning in a ROS2 context",
    category: "University Task",
    type: "University project",
    period: "Placeholder period",
    status: "Completed",
    cover: "assets/projects/path-planning/cover.jpg",
    summary: "Implementation of path planning and robotics simulation with OMPL, Kautham and ROS2, connecting planning, simulation and evaluation of generated paths.",
    focus: ["ROS2", "OMPL", "Kautham", "Motion Planning"],
    tools: ["ROS2", "OMPL", "Kautham", "Python", "VS Code"],
    timeline: [
      { icon: "01", title: "Setup", paragraphs: ["Setting up the environment and preparing robot and scene models."], images: ["assets/projects/path-planning/timeline-01.jpg"], tags: ["ROS2", "Kautham", "Setup"] },
      { icon: "02", title: "Planning", paragraphs: ["Applying different planners and analyzing the resulting motion paths."], images: ["assets/projects/path-planning/timeline-02.jpg"], tags: ["OMPL", "Motion Planning", "Python"] },
      { icon: "03", title: "Validation", paragraphs: ["Checking paths for collisions, feasibility and quality inside the simulation environment."], images: ["assets/projects/path-planning/timeline-03.jpg"], tags: ["Kautham", "Collision Check", "Validation"] },
      { icon: "04", title: "Result", paragraphs: ["Documenting results and comparing planning approaches."], images: ["assets/projects/path-planning/timeline-04.jpg"], tags: ["VS Code", "Analysis", "Robotics"] }
    ],
    galleryImages: ["assets/projects/path-planning/gallery-01.jpg", "assets/projects/path-planning/gallery-02.jpg", "assets/projects/path-planning/gallery-03.jpg"]
  }
};

window.projectDetailContent = pathPlanningContent;
