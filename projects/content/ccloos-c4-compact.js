const cloosC4CompactContent = {
  de: {
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
    focus: ["CLOOS", "Schweißroboter", "Offline Programming", "Industrie"],
    tools: ["CLOOS", "Offline Programming", "Robotik", "Industrie"],
    timeline: [
      { icon: "01", title: "Zelle", paragraphs: ["Analyse der Roboterzelle, Arbeitsbereiche und fertigungstechnischen Anforderungen."], images: ["assets/projects/ccloos-c4-compact/timeline-01.jpg"], tags: ["CLOOS", "Schweißroboter", "Industrie"] },
      { icon: "02", title: "Programmierung", paragraphs: ["Vorbereitung von Bewegungsabläufen und Schweißpfaden in einer Offline-Umgebung."], images: ["assets/projects/ccloos-c4-compact/timeline-02.jpg"], tags: ["Offline Programming", "Robotik", "Schweißpfad"] },
      { icon: "03", title: "Abgleich", paragraphs: ["Übertragung und Abstimmung der Programme mit den realen Gegebenheiten der Zelle."], images: ["assets/projects/ccloos-c4-compact/timeline-03.jpg"], tags: ["Validierung", "Fertigung", "Prozess"] },
      { icon: "04", title: "Einsatz", paragraphs: ["Unterstützung einer robusteren Vorbereitung industrieller Roboterabläufe."], images: ["assets/projects/ccloos-c4-compact/timeline-04.jpg"], tags: ["Automation", "Industrie", "Robotik"] }
    ],
    galleryImages: ["assets/projects/ccloos-c4-compact/gallery-01.jpg", "assets/projects/ccloos-c4-compact/gallery-02.jpg", "assets/projects/ccloos-c4-compact/gallery-03.jpg"]
  },
  en: {
    slug: "ccloos-c4-compact",
    href: "ccloos-c4-compact.html",
    title: "Offline Robot Programming",
    subtitle: "CLOOS C4 Compact welding robot cell",
    category: "Company Project",
    type: "Company project",
    period: "Placeholder period",
    status: "Completed",
    cover: "assets/projects/ccloos-c4-compact/cover.jpg",
    summary: "Offline programming for a CLOOS C4 Compact welding robot cell to support industrial manufacturing processes through prepared robot programs.",
    focus: ["CLOOS", "Welding Robot", "Offline Programming", "Industry"],
    tools: ["CLOOS", "Offline Programming", "Robotics", "Industry"],
    timeline: [
      { icon: "01", title: "Robot Cell", paragraphs: ["Analyzing the robot cell, workspaces and manufacturing requirements."], images: ["assets/projects/ccloos-c4-compact/timeline-01.jpg"], tags: ["CLOOS", "Welding Robot", "Industry"] },
      { icon: "02", title: "Programming", paragraphs: ["Preparing motion sequences and welding paths in an offline environment."], images: ["assets/projects/ccloos-c4-compact/timeline-02.jpg"], tags: ["Offline Programming", "Robotics", "Welding Path"] },
      { icon: "03", title: "Alignment", paragraphs: ["Transferring and aligning programs with the real conditions of the cell."], images: ["assets/projects/ccloos-c4-compact/timeline-03.jpg"], tags: ["Validation", "Manufacturing", "Process"] },
      { icon: "04", title: "Application", paragraphs: ["Supporting more robust preparation of industrial robot workflows."], images: ["assets/projects/ccloos-c4-compact/timeline-04.jpg"], tags: ["Automation", "Industry", "Robotics"] }
    ],
    galleryImages: ["assets/projects/ccloos-c4-compact/gallery-01.jpg", "assets/projects/ccloos-c4-compact/gallery-02.jpg", "assets/projects/ccloos-c4-compact/gallery-03.jpg"]
  }
};

window.projectDetailContent = cloosC4CompactContent;
window.projectContentRegistry = window.projectContentRegistry || {};
window.projectContentRegistry[cloosC4CompactContent.de.slug] = cloosC4CompactContent;
