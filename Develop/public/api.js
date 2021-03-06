const API = {
  async lastWorkoutadded() {
    // retrieves array of workouts
    const res = await fetch("/api/workouts");
    const json = await res.json();

    // provides the last workout 
    return json[json.length - 1];
  },
  async newExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async newWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // the passing of data as an argument to be value of body
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async workoutsRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    
    return json;
  },
};
