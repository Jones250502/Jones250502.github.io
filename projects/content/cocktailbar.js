const cocktailbarContent = {
  de: {
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
    focus: ["Fusion 360", "Design", "Eigenbau", "Hardware"],
    tools: ["Fusion 360", "Design", "Hardware", "Prototyping"],
    timeline: [
      { icon: "01", title: "Idee", paragraphs: ["Entwicklung eines funktionalen Designs, das Nutzung, Stauraum und Erscheinungsbild verbindet."], images: ["assets/projects/cocktailbar/timeline-01.jpg"], tags: ["Design", "Konzept", "Anforderungen"] },
      { icon: "02", title: "Konstruktion", paragraphs: ["Planung der Struktur und Details mit Blick auf Fertigbarkeit und Alltagstauglichkeit."], images: ["assets/projects/cocktailbar/timeline-02.jpg"], tags: ["Fusion 360", "CAD", "Konstruktion"] },
      { icon: "03", title: "Fertigung", paragraphs: ["Zuschnitt, Montage und Anpassung der einzelnen Bauteile."], images: ["assets/projects/cocktailbar/timeline-03.jpg"], tags: ["Hardware", "Eigenbau", "Fertigung"] },
      { icon: "04", title: "Fertige Bar", paragraphs: ["Finaler Aufbau mit Fokus auf sauberer Ausführung und praktischer Nutzung."], images: ["assets/projects/cocktailbar/timeline-04.jpg"], tags: ["Finish", "Prototyping", "Aufbau"] }
    ],
    galleryImages: ["assets/projects/cocktailbar/gallery-01.jpg", "assets/projects/cocktailbar/gallery-02.jpg", "assets/projects/cocktailbar/gallery-03.jpg"]
  },
  en: {
    slug: "cocktailbar",
    href: "cocktailbar.html",
    title: "Cocktail Bar",
    subtitle: "Planning, build and technical implementation",
    category: "Personal Project",
    type: "Personal project",
    period: "Placeholder period",
    status: "Completed",
    cover: "assets/projects/cocktailbar/cover.jpg",
    summary: "Personal bar project with planning, construction and technical implementation of an individual cocktail bar, focusing on design, manufacturing and clean detail integration.",
    focus: ["Fusion 360", "Design", "DIY Build", "Hardware"],
    tools: ["Fusion 360", "Design", "Hardware", "Prototyping"],
    timeline: [
      { icon: "01", title: "Idea", paragraphs: ["Developing a functional design that combines use, storage and appearance."], images: ["assets/projects/cocktailbar/timeline-01.jpg"], tags: ["Design", "Concept", "Requirements"] },
      { icon: "02", title: "Design", paragraphs: ["Planning the structure and details with manufacturability and everyday use in mind."], images: ["assets/projects/cocktailbar/timeline-02.jpg"], tags: ["Fusion 360", "CAD", "Design"] },
      { icon: "03", title: "Manufacturing", paragraphs: ["Cutting, assembling and adapting individual parts."], images: ["assets/projects/cocktailbar/timeline-03.jpg"], tags: ["Hardware", "DIY Build", "Manufacturing"] },
      { icon: "04", title: "Finished Bar", paragraphs: ["Final build with focus on clean execution and practical use."], images: ["assets/projects/cocktailbar/timeline-04.jpg"], tags: ["Finish", "Prototyping", "Build"] }
    ],
    galleryImages: ["assets/projects/cocktailbar/gallery-01.jpg", "assets/projects/cocktailbar/gallery-02.jpg", "assets/projects/cocktailbar/gallery-03.jpg"]
  }
};

window.projectDetailContent = cocktailbarContent;
window.projectContentRegistry = window.projectContentRegistry || {};
window.projectContentRegistry[cocktailbarContent.de.slug] = cocktailbarContent;
