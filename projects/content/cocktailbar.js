const cocktailbarContent = {
  de: {
    slug: "cocktailbar",
    href: "cocktailbar.html",
    title: "Cocktailbar",
    subtitle: "Modulare Bar Eigenbau mit CAD Konstruktion und Blechfertigung",
    category: "Eigenprojekt",
    type: "Eigenprojekt",
    period: "08/2024",
    status: "Abgeschlossen",
    cover: "assets/projects/cocktailbar/Bar_2_F_Isobild.jpg",
    summary: "Eigenes Konstruktions und Fertigungsprojekt einer modularen Cocktailbar. Die Bar wurde in Fusion konstruiert, aus gelaserten und beschichteten Blechteilen aufgebaut und mit Stauraum, Schubladen, Speedrack und Arbeitsfläche für den praktischen Einsatz umgesetzt.",
    focus: ["Fusion 360", "Design", "Eigenbau", "Hardware"],
    tools: ["Fusion 360","TruTops Boost","TruTops"],
    timeline: [
  { icon: "01", title: "CAD Konstuktion", paragraphs: ["Planung und Konstruktion einer modularen Cocktailbar in Fusion 360. Die Bar besteht aus flexibel kombinierbaren 60x60 cm Modulen und kann je nach Raumgröße mit oder ohne Tresen aufgebaut werden. Große Frontflächen, innenliegende Auszüge und umgekantete Schubladengriffe verbessern Reinigung, Stauraum und Alltagstauglichkeit."], images: ["assets/projects/cocktailbar/BarCAD.png","assets/projects/cocktailbar/Bar_Render_Iso.png","assets/projects/cocktailbar/Bar_Render_Top.png","assets/projects/cocktailbar/Bar_Render_Front.png"], tags: ["Fusion 360"] },

  { icon: "02", title: "Fertigung", paragraphs: ["Die Metallkomponenten wurden vollständig eigenständig aus 1,5 mm Stahlblech gefertigt. Dazu wurden die Teile gelasert, M6 Schweißmuttern per Punktschweißen gesetzt und anschließend gebogen, da viele Bereiche nach dem Kanten nicht mehr zugänglich gewesen wären. Aus den gekanteten U Profilen wurden anschließend 40x40 mm Rohre mit innenliegenden Schweißmuttern für die Gestelle verschweißt. Danach wurden die Baugruppen geschliffen und in RAL 9010 Strukturlack pulverbeschichtet."], images: ["assets/projects/cocktailbar/Bar_Lasern_close.jpg", "assets/projects/cocktailbar/Bar_Rohlinge.jpg", "assets/projects/cocktailbar/Bar_Beschichtet.jpg", "assets/projects/cocktailbar/Bar_Skelett.jpg"], tags: ["TruTops", "TruTops Boost"] },

  { icon: "03", title: "Montage und Verkleidung", paragraphs: ["Aufbau der Bar mit Schubladen, Auszügen, Speedrack und einer modularen Arbeitsfläche aus 1 Millimeter Edelstahl. Die Arbeitsfläche besteht aus einzelnen Hexagon Elementen, die gedreht werden können, um Erhebungen oder Fächer für Eis, Barequipment und Zubehör zu schaffen. Außen wurde die Bar aus optischen Gründen mit gehobelten und geschliffenen Holzlatten verkleidet, die keine tragende Funktion übernehmen. Ziel war eine kompakte, gut reinigbare und praktisch nutzbare Bar mit schnell erreichbarem Stauraum."], images: ["assets/projects/cocktailbar/Bar_2_F_innenAuszug.jpg", "assets/projects/cocktailbar/Bar_2_F_schublade.jpg", "assets/projects/cocktailbar/Bar_2_F_Speedrackseite.jpg", "assets/projects/cocktailbar/Bar_2_F_Arbeitsflaeche.jpg"], tags: [] },

  { icon: "04", title: "Finale Cocktailbar", paragraphs: ["Fertigstellung der zweiten Bar als modular weiterentwickelte Version des ersten Eigenbaus. Die neue Konstruktion lässt sich einfacher transportieren, besser montieren und flexibler an unterschiedliche Räume anpassen. Durch integrierte Schubladen wird kein zusätzliches Regal mehr benötigt, während der Bereich unter der Arbeitsfläche deutlich besser genutzt wird. Auch das Speedrack wurde funktional und optisch verbessert. Die erste Bar ist als Vergleich in der Galerie zu sehen."], images: ["assets/projects/cocktailbar/Bar_2_F_Isobild.jpg", "assets/projects/cocktailbar/Bar_2_F_Draufsicht.jpg"], tags: [] }
],
    galleryImages: [
  
  "assets/projects/cocktailbar/Bar_erster_Aufbau.jpg",
  "assets/projects/cocktailbar/Bar_erster_Aufbau_Tresen.jpg",
  "assets/projects/cocktailbar/Bar_Lasern.jpg",
  "assets/projects/cocktailbar/Bar_Lasern_aktive.jpg",
  "assets/projects/cocktailbar/Bar_2_F_Isobild.jpg",
  "assets/projects/cocktailbar/Bar_1_Front.jpg",
  "assets/projects/cocktailbar/Bar_1_hinten.jpg",
  "assets/projects/cocktailbar/Bar_1_Seite.jpg",
]
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
