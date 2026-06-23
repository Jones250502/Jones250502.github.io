const cloosC4CompactContent = {
  de: {
    slug: "ccloos-c4-compact",
    href: "ccloos-c4-compact.html",
    title: "Offline Roboterprogrammierung ",
    subtitle: "Eigene Offline Programmierung für eine CLOOS C4 compact Schweißroboterzelle",
    category: "Firmenprojekt",
    type: "Firmenprojekt",
    period: "Seit 2025",
    status: "In Entwicklung",
    cover: "assets/projects/ccloos-c4-compact/CAD_Cell_iso.png",
    summary: "Entwicklung einer eigenen Offline Programming Software in Unity und C# für eine bestehende CLOOS C4 Compact Schweißroboterzelle. Ziel ist es, Blechteile virtuell zu laden, Schweißnähte zu definieren, Vorrichtungen zu prüfen und später kollisionsfreie Roboterbahnen für die reale Anlage zu exportieren.",
    focus: ["CLOOS", "Schweißroboter", "Offline Programming", "Industrie"],
    tools: ["Fusion 360","C#","Unity"],
    timeline: [
{
icon: "01",
title: "Digitale Roboterzelle",
paragraphs: [
"Nachmodellierung der bestehenden CLOOS Schweißroboterzelle in Fusion 360 und Übertragung in Unity. Der 6 Achs Roboter, die drehbaren Schweißtische und die Zellengeometrie wurden als bewegliches digitales Modell aufgebaut, um die reale Anlage später virtuell programmieren und prüfen zu können."
],
images: [
"assets/projects/ccloos-c4-compact/CAD_Cell_iso.png",
"assets/projects/ccloos-c4-compact/CAD_Cell_Drauf.png",
"assets/projects/ccloos-c4-compact/CAD_Cell_side.png",
"assets/projects/ccloos-c4-compact/Cloose Roboter.jpeg"
],
tags: ["Fusion 360", "Unity"]
},

{
icon: "02",
title: "Unity Software und Bedienoberfläche",
paragraphs: [
"Entwicklung einer eigenen Offline Programming Software in Unity und C#. Über die Oberfläche können neue Programme angelegt, Roboterzellen ausgewählt sowie Schweißteile und Vorrichtungen geladen werden. Die Software bildet den Arbeitsablauf vom importierten Bauteil bis zur späteren Roboterprogrammierung ab."
],
images: [
"assets/projects/ccloos-c4-compact/Unity_Startseite.png",
"assets/projects/ccloos-c4-compact/Unity_Programmansicht.png",
"assets/projects/ccloos-c4-compact/Unity_Anordnung.png",
"assets/projects/ccloos-c4-compact/VS_CodeBild.png"
],
tags: ["Unity", "C#"]
},

{
icon: "03",
title: "Bauteil und Nahtdefinition",
paragraphs: [
"Import von Blechteilen in die Unity Umgebung und Vorbereitung der Schweißnähte für die spätere Bahnplanung. Der Nutzer kann erkannte Kanten auswählen, Start und Endpunkt der Naht anpassen, Nahtarten definieren und die Brennerorientierung für die jeweilige Schweißnaht festlegen."
],
images: [
"assets/projects/ccloos-c4-compact/Unity_Roboter_Schweisteil.png",
"assets/projects/ccloos-c4-compact/Unity_Schweisauswahl.png",
"assets/projects/ccloos-c4-compact/Unity_Schweikopf_richten.png"
],
tags: ["Unity", "C#"]
},

{
icon: "04",
title: "Bahnplanung und Export",
paragraphs: [
"Aktueller Entwicklungsschritt ist die automatische Bahnplanung für Roboterachsen und drehbare Tischachse. Ziel ist die Berechnung kollisionsfreier Schweißbahnen, die in der Simulation geprüft, angepasst und anschließend als Punktliste sowie Ablaufdatei für die reale CLOOS Roboterzelle exportiert werden können."
],
images: [
"assets/projects/ccloos-c4-compact/Unity_Roboter_Schweisteil.png",
"assets/projects/ccloos-c4-compact/VS_CodeBild.png",
"assets/projects/ccloos-c4-compact/Cloose Roboter.jpeg"
],
tags: ["Unity", "C#"]
}
]
,
galleryImages: [
  "assets/projects/ccloos-c4-compact/CAD_Cell.png"
]
  },


  en: {
    slug: "ccloos-c4-compact",
    href: "ccloos-c4-compact.html",
    title: "Offline Robot Programming",
    subtitle: "Custom offline programming for a CLOOS C4 Compact welding robot cell",
    category: "Company Project",
    type: "Company project",
    period: "Since 2025",
    status: "In development",
    cover: "assets/projects/ccloos-c4-compact/CAD_Cell_iso.png",
    summary: "Development of custom offline programming software in Unity and C# for an existing CLOOS C4 Compact welding robot cell. The goal is to virtually load sheet metal parts, define weld seams, check fixtures and later export collision-free robot paths for the real system.",
    focus: ["CLOOS", "Welding Robot", "Offline Programming", "Industry"],
    tools: ["Fusion 360", "C#", "Unity"],
    timeline: [
      {
        icon: "01",
        title: "Digital Robot Cell",
        paragraphs: [
          "Reconstruction of the existing CLOOS welding robot cell in Fusion 360 and transfer into Unity. The 6-axis robot, the rotating welding tables and the cell geometry were built as a movable digital model in order to later program and check the real system virtually."
        ],
        images: [
          "assets/projects/ccloos-c4-compact/CAD_Cell_iso.png",
          "assets/projects/ccloos-c4-compact/CAD_Cell_Drauf.png",
          "assets/projects/ccloos-c4-compact/CAD_Cell_side.png",
          "assets/projects/ccloos-c4-compact/Cloose Roboter.jpeg"
        ],
        tags: ["Fusion 360", "Unity"]
      },
      {
        icon: "02",
        title: "Unity Software and User Interface",
        paragraphs: [
          "Development of custom offline programming software in Unity and C#. The interface allows new programs to be created, robot cells to be selected and welding parts and fixtures to be loaded. The software maps the workflow from imported component to later robot programming."
        ],
        images: [
          "assets/projects/ccloos-c4-compact/Unity_Startseite.png",
          "assets/projects/ccloos-c4-compact/Unity_Programmansicht.png",
          "assets/projects/ccloos-c4-compact/Unity_Anordnung.png",
          "assets/projects/ccloos-c4-compact/VS_CodeBild.png"
        ],
        tags: ["Unity", "C#"]
      },
      {
        icon: "03",
        title: "Part and Weld Seam Definition",
        paragraphs: [
          "Import of sheet metal parts into the Unity environment and preparation of weld seams for later path planning. The user can select detected edges, adjust start and end points of the seam, define weld types and set the torch orientation for each weld seam."
        ],
        images: [
          "assets/projects/ccloos-c4-compact/Unity_Roboter_Schweisteil.png",
          "assets/projects/ccloos-c4-compact/Unity_Schweisauswahl.png",
          "assets/projects/ccloos-c4-compact/Unity_Schweikopf_richten.png"
        ],
        tags: ["Unity", "C#"]
      },
      {
        icon: "04",
        title: "Path Planning and Export",
        paragraphs: [
          "The current development step is automatic path planning for the robot axes and the rotating table axis. The goal is to calculate collision-free welding paths that can be checked, adjusted and then exported as a point list and sequence file for the real CLOOS robot cell."
        ],
        images: [
          "assets/projects/ccloos-c4-compact/Unity_Roboter_Schweisteil.png",
          "assets/projects/ccloos-c4-compact/VS_CodeBild.png",
          "assets/projects/ccloos-c4-compact/Cloose Roboter.jpeg"
        ],
        tags: ["Unity", "C#"]
      }
    ],
    galleryImages: [
      "assets/projects/ccloos-c4-compact/CAD_Cell.png"
    ]
  }
};

window.projectDetailContent = cloosC4CompactContent;
window.projectContentRegistry = window.projectContentRegistry || {};
window.projectContentRegistry[cloosC4CompactContent.de.slug] = cloosC4CompactContent;
