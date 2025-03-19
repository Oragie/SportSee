class ModelUserPerformance {
  constructor(performances) {
    this.frenchKindMap = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    // Ordre préféré des sujets dans le graphique
    this.preferredOrder = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Energie",
      "Cardio",
    ];

    // Construire dynamiquement les données pour le graphique et les trier
    this.data = performances.data
      .map((perf) => ({
        subject: this.frenchKindMap[performances.kind[perf.kind]],
        A: perf.value,
      }))
      .sort(
        (a, b) =>
          this.preferredOrder.indexOf(a.subject) -
          this.preferredOrder.indexOf(b.subject)
      );
  }

  getFormattedData() {
    return this.data;
  }
}

export default ModelUserPerformance;
