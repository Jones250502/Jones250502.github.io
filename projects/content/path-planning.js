const pathPlanningContent = {
  de: {
    slug: "path-planning",
    href: "path-planning.html",
    title: "TASK AND MOTION PLANNING",
    subtitle: "Task and Motion Planning für den Tiago Roboter",
    category: "Uniaufgabe",
    type: "Universitätsprojekt",
    period: "09/2025 - 01/2026",
    status: "Abgeschlossen",
    cover: "assets/projects/path-planning/Scenario1_NavigationTask.png",
    summary: "Umsetzung eines Task and Motion Planning Szenarios mit dem mobilen Tiago Roboter in einer simulierten Restaurantumgebung. OMPL Planer wurden in Kautham für Navigations und Manipulationsaufgaben verglichen und anschließend in eine PDDL basierte Aufgabenplanung integriert.",
    focus: ["ROS2", "OMPL", "Kautham", "Motion Planning"],
    tools: ["ROS2", "OMPL", "Kautham", "Python"],
    timeline: [
     { icon: "01", title: "Simulationsszenario", paragraphs: ["Definition zweier Planungsprobleme für den mobilen Tiago Roboter in einer simulierten Küchenumgebung. Die Szenarien zeigen sowohl die Navigation durch enge Passagen als auch eine Manipulationsaufgabe am Regal und bilden die Grundlage für das spätere Benchmarking der Planer."], images: ["assets/projects/path-planning/Scenario1_NavigationTask.png", "assets/projects/path-planning/Scenario2_ManipulationTask_end.png"], tags: ["Kautham"] },
      { icon: "02", title: "Motion Planning Benchmarking", paragraphs: ["Benchmarking von PRM, RRT, RRT Stern und RRTConnect in zwei Planungsproblemen. Nach einer Parametervariation mit jeweils 10 Läufen wurden die besten Konfigurationen in Navigation und Manipulation nochmals über 30 Läufe verglichen, bewertet nach Erfolgsrate, Rechenzeit, Pfadlänge und Glattheit."], images: ["assets/projects/path-planning/1-Scenario_paramter_status.png", "assets/projects/path-planning/1-Scenario_paramter_time.png", "assets/projects/path-planning/2_All_Planner_status.png", "assets/projects/path-planning/2_All_Planner_time.png"], tags: ["OMPL", "Kautham","Phyton"] },
       { icon: "03", title: "Task Planning", paragraphs: ["Modellierung der Serviceroboter Aufgabe mit PDDL und Fast Downward. Die Aufgabenlogik beschreibt eine vollständige Abfolge aus Bestellung, Navigation, Greifen, Umgreifen, Servieren und Bezahlen, bevor die Aktionen später mit geometrischen Bewegungen verknüpft wurden."], images: ["assets/projects/path-planning/Solution.png","assets/projects/path-planning/Sequence CokeCans.png"], tags: ["PDDL", "Fast Downward"] },
            { icon: "04", title: "Task and Motion Planning", paragraphs: ["Integration der symbolischen Aufgabenplanung mit geometrischer Bewegungsplanung. Die PDDL Aktionen wurden über Python Wrapper mit Kautham, OMPL und ROS2 verknüpft, sodass die komplette Serviceroboter Aufgabe als kollisionsfreie Bewegungssequenz ausgeführt werden konnte."], images: [
              {
                type: "video",
                src: "assets/projects/path-planning/TOP VIEW.mp4",
                alt: "Top View Video der Pfadplanungssimulation"
              }
            ], tags: ["Phyton", "ROS2"] }
    ],
     galleryImages: [
      {
        type: "video",
        src: "assets/projects/path-planning/FRONT VIEW.mp4",
        alt: "Front View Video der Pfadplanungssimulation"
      },
      {
        type: "video",
        src: "assets/projects/path-planning/KITCHEN VIEW.mp4",
        alt: "Kitchen View Video der Pfadplanungssimulation"
      }
    ]
  },
  en: {
    slug: "path-planning",
    href: "path-planning.html",
    title: "TASK AND MOTION PLANNING",
    subtitle: "Task and Motion Planning for the Tiago robot",
    category: "University Task",
    type: "University project",
    period: "09/2025 - 01/2026",
    status: "Completed",
    cover: "assets/projects/path-planning/Scenario1_NavigationTask.png",
    summary: "Implementation of a task and motion planning scenario with the mobile Tiago robot in a simulated restaurant environment. OMPL planners were compared in Kautham for navigation and manipulation tasks and then integrated into PDDL-based task planning.",
    focus: ["ROS2", "OMPL", "Kautham", "Motion Planning"],
    tools: ["ROS2", "OMPL", "Kautham", "Python"],
    timeline: [
      { icon: "01", title: "Simulation Scenario", paragraphs: ["Definition of two planning problems for the mobile Tiago robot in a simulated kitchen environment. The scenarios include both navigation through narrow passages and a manipulation task at a shelf, forming the basis for later planner benchmarking."], images: ["assets/projects/path-planning/Scenario1_NavigationTask.png", "assets/projects/path-planning/Scenario2_ManipulationTask_end.png"], tags: ["Kautham"] },
      { icon: "02", title: "Motion Planning Benchmarking", paragraphs: ["Benchmarking of PRM, RRT, RRT Star and RRTConnect in two planning problems. After parameter variation with 10 runs each, the best configurations for navigation and manipulation were compared again over 30 runs, evaluated by success rate, computation time, path length and smoothness."], images: ["assets/projects/path-planning/1-Scenario_paramter_status.png", "assets/projects/path-planning/1-Scenario_paramter_time.png", "assets/projects/path-planning/2_All_Planner_status.png", "assets/projects/path-planning/2_All_Planner_time.png"], tags: ["OMPL", "Kautham", "Python"] },
      { icon: "03", title: "Task Planning", paragraphs: ["Modeling of the service robot task with PDDL and Fast Downward. The task logic describes a complete sequence from ordering, navigation, grasping, regrasping, serving and payment before the actions were later linked with geometric motions."], images: ["assets/projects/path-planning/Solution.png","assets/projects/path-planning/Sequence CokeCans.png"], tags: ["PDDL", "Fast Downward"] },
      { icon: "04", title: "Task and Motion Planning", paragraphs: ["Integration of symbolic task planning with geometric motion planning. The PDDL actions were connected to Kautham, OMPL and ROS2 through Python wrappers, enabling the complete service robot task to be executed as a collision-free motion sequence."], images: [
        {
          type: "video",
          src: "assets/projects/path-planning/TOP VIEW.mp4",
          alt: "Top view video of the path planning simulation"
        }
      ], tags: ["Python", "ROS2"] }
    ],
    galleryImages: [
      {
        type: "video",
        src: "assets/projects/path-planning/FRONT VIEW.mp4",
        alt: "Front view video of the path planning simulation"
      },
      {
        type: "video",
        src: "assets/projects/path-planning/KITCHEN VIEW.mp4",
        alt: "Kitchen view video of the path planning simulation"
      }
    ]
  }
};

window.projectDetailContent = pathPlanningContent;
window.projectContentRegistry = window.projectContentRegistry || {};
window.projectContentRegistry[pathPlanningContent.de.slug] = pathPlanningContent;
