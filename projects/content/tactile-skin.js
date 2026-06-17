const tactileSkinContent = {
  de: {
    slug: "tactile-skin",
    href: "tactile-skin.html",
    title: "Taktile Sensorhaut",
    subtitle: "Flexible Sensorik für Kontakt, Scherkräfte und Greifprozesse",
    category: "Semesterarbeit",
    type: "Semesterarbeit",
    period: "03/2025 - 08/2025",
    status: "Abgeschlossen",
    cover: "assets/projects/tactile-skin/SkinForceVis.png",
    summary: "Entwicklung und Validierung einer flexiblen taktilen Sensorhaut für robotische Greifprozesse. Ziel war die Erfassung von Kontaktposition, Normalkräften und Scherkräften, um Rückschlüsse auf Griffstabilität und mögliche Rutschbewegungen zu ermöglichen.",
    focus: ["Sensorik", "MATLAB", "Validierung", "Prototyping"],
    tools: ["Fusion 360", "C++","MATLAB"],
    timeline: [
      { icon: "01", title: "Sensoraufbau", paragraphs: ["Für die taktile Sensorhaut wurde ein mehrschichtiger Aufbau mit vorgekrümmten DMS Streifen entwickelt. Durch Verformung der eingebetteten Sensorstreifen sollten Normalkräfte und Scherkräfte unterscheidbar erfasst und einer Kontaktposition zugeordnet werden.",
                                                        "Ergänzend wurde eine BaTiO3 Schicht vorgesehen, um Temperaturänderungen durch Berührung zu erkennen. Dadurch sollten temperaturbedingte Messfehler der DMS Sensorik kompensiert und die Robustheit des Sensorkonzepts verbessert werden."], images: ["assets/projects/tactile-skin/Schichtaufbau.png","assets/projects/tactile-skin/Konzept.png","assets/projects/tactile-skin/DMSKonzept.png"], tags: [] },
      { icon: "02", title: "Prototypenbau", paragraphs: ["Herstellung erster Sensorprototypen mit CFK Trägerstruktur, integrierten DMS Streifen und Silikonbettung. Verschiedene Varianten wurden aufgebaut, um den Einfluss von Materialaufbau und Flexibilität experimentell zu untersuchen."], images: ["assets/projects/tactile-skin/DMSinSili.png","assets/projects/tactile-skin/cfkRohling.png","assets/projects/tactile-skin/CFKwithDMS.png"], tags: [] },
      { icon: "03", title: "Versuchsaufbau", paragraphs: ["Im Prüfstand wurden die Widerstandsänderungen von zwei integrierten DMS Streifen unter definierter Krafteinleitung gemessen. Die Proben mit unterschiedlichen Shore Härten wurden bei 0°, 30°, 45° und 60° getestet, um Normal und Scherkraftanteile gezielt zu variieren."], images: ["assets/projects/tactile-skin/Prufstand.png","assets/projects/tactile-skin/SkinForceVis.png"], tags: ["C++"] },
      { icon: "04", title: "Auswertung", paragraphs: ["Auswertung der DMS Signale für unterschiedliche Shore Härten und Belastungswinkel. Die Ergebnisse zeigen, dass die sehr weiche Flex Probe mit Shore 0050 besonders anfällig für Stick Slip Effekte war, während GelbStrich mit Shore A20 ein stabileres Messverhalten zeigte."], images: ["assets/projects/tactile-skin/Asuwerteflexgrad.png","assets/projects/tactile-skin/Asuwertegelb.png"], tags: ["MATLAB"] }
    ],
    galleryImages: ["assets/projects/tactile-skin/Ubersichtalles.png", "assets/projects/tactile-skin/Morpho.png", "assets/projects/tactile-skin/Mittelwertgeraden.png"]
  },
  en: {
    slug: "tactile-skin",
    href: "tactile-skin.html",
    title: "Tactile Sensing Skin",
    subtitle: "Flexible sensing for contact, shear forces and grasping processes",
    category: "Semester Project",
    type: "Semester project",
    period: "03/2025 - 08/2025",
    status: "Completed",
    cover: "assets/projects/tactile-skin/SkinForceVis.png",
    summary: "Development and validation of a flexible tactile sensing skin for robotic grasping processes. The goal was to detect contact position, normal forces and shear forces in order to draw conclusions about grasp stability and possible slip motions.",
    focus: ["Sensing", "MATLAB", "Validation", "Prototyping"],
    tools: ["Fusion 360", "C++", "MATLAB"],
    timeline: [
      { icon: "01", title: "Sensor Structure", paragraphs: ["A multilayer structure with pre-curved strain gauge strips was developed for the tactile sensing skin. Through deformation of the embedded sensor strips, normal and shear forces were intended to be distinguished and assigned to a contact position.",
                                                        "In addition, a BaTiO3 layer was planned to detect temperature changes caused by touch. This was intended to compensate temperature-related measurement errors of the strain gauge sensors and improve the robustness of the sensing concept."], images: ["assets/projects/tactile-skin/Schichtaufbau.png","assets/projects/tactile-skin/Konzept.png","assets/projects/tactile-skin/DMSKonzept.png"], tags: [] },
      { icon: "02", title: "Prototype Build", paragraphs: ["First sensor prototypes were manufactured with a CFRP support structure, integrated strain gauge strips and silicone embedding. Different variants were built to experimentally investigate the influence of material structure and flexibility."], images: ["assets/projects/tactile-skin/DMSinSili.png","assets/projects/tactile-skin/cfkRohling.png","assets/projects/tactile-skin/CFKwithDMS.png"], tags: [] },
      { icon: "03", title: "Test Setup", paragraphs: ["In the test rig, resistance changes of two integrated strain gauge strips were measured under defined force application. Samples with different Shore hardness values were tested at 0°, 30°, 45° and 60° in order to vary normal and shear force components in a targeted way."], images: ["assets/projects/tactile-skin/Prufstand.png","assets/projects/tactile-skin/SkinForceVis.png"], tags: ["C++"] },
      { icon: "04", title: "Evaluation", paragraphs: ["Evaluation of the strain gauge signals for different Shore hardness values and loading angles. The results show that the very soft Flex sample with Shore 0050 was particularly susceptible to stick-slip effects, while GelbStrich with Shore A20 showed more stable measurement behavior."], images: ["assets/projects/tactile-skin/Asuwerteflexgrad.png","assets/projects/tactile-skin/Asuwertegelb.png"], tags: ["MATLAB"] }
    ],
    galleryImages: ["assets/projects/tactile-skin/Ubersichtalles.png", "assets/projects/tactile-skin/Morpho.png", "assets/projects/tactile-skin/Mittelwertgeraden.png"]
  }
};

window.projectDetailContent = tactileSkinContent;
window.projectContentRegistry = window.projectContentRegistry || {};
window.projectContentRegistry[tactileSkinContent.de.slug] = tactileSkinContent;
