import React, { useState } from "react";
import "./Worktrack.css"; // Ensure this import is at the top
import FullBody from "../Assets/Full Body.jpg";
import UpperBody from "../Assets/Upper Body.jpg";
import Cardio from "../Assets/Cardio.jpg";
import Navbar2 from './Navbars/Navbar2';

const predefinedTemplates = [
  {
    id: 1,
    name: "Full Body Workout",
    exercises: [
      {
        id: "1",
        name: "Push-ups",
        image: "https://media1.tenor.com/m/gI-8qCUEko8AAAAC/pushup.gif",
        reps: "",
        sets: "",
        weight: "",
      },
      {
        id: "2",
        name: "Squats",
        image: "https://i.gifer.com/VUFn.gif",
        reps: "",
        sets: "",
      },
      {
        id: "3",
        name: "Burpees",
        image: "https://i.gifer.com/6zUm.gif",
        reps: "",
        sets: "",
      },
      {
        id: "4",
        name: "Hammer Curls",
        image:
          "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif",
        reps: "",
        sets: "",
        weight: "",
      },
    ],
    image: FullBody,
  },
  {
    id: 2,
    name: "Upper Body Strength",
    exercises: [
      {
        id: "5",
        name: "Bench Press",
        image: "https://i.gifer.com/MH2W.gif",
        reps: "",
        sets: "",
        weight: "",
      },
      {
        id: "6",
        name: "Pull-Ups",
        image: "https://i.gifer.com/BVdS.gif",
        reps: "",
        sets: "",
      },
      {
        id: "7",
        name: "Shoulder Press",
        image: "https://media1.tenor.com/m/ZR-_3Mxq0gYAAAAd/arnold-press.gif",
        reps: "",
        sets: "",
        weight: "",
      },
      {
        id: "8",
        name: "Bicep Curls",
        image: "https://i.gifer.com/7hh1.gif",
        reps: "",
        sets: "",
        weight: "",
      },
    ],
    image: UpperBody,
  },
  {
    id: 3,
    name: "Cardio Blast",
    exercises: [
      {
        id: "9",
        name: "Jump Rope",
        image: "https://i.gifer.com/Gjnt.gif",
        reps: "",
        sets: "",
      },
      {
        id: "10",
        name: "High Knees",
        image: "https://i.gifer.com/9hD9.gif",
        reps: "",
        sets: "",
      },
      {
        id: "11",
        name: "Mountain Climbers",
        image: "https://i.gifer.com/3IDz.gif",
        reps: "",
        sets: "",
      },
      {
        id: "12",
        name: "Chin Ups",
        image:
          "https://fitnessprogramer.com/wp-content/uploads/2021/03/Chin-Up.gif",
        reps: "",
        sets: "",
      },
    ],
    image: Cardio,
  },
];

const allExercises = [
  {
    id: "13",
    name: "Push-ups",
    image: "https://media1.tenor.com/m/gI-8qCUEko8AAAAC/pushup.gif",
  },
  { id: "14", name: "Squats", image: "https://i.gifer.com/VUFn.gif" },
  { id: "15", name: "Burpees", image: "https://i.gifer.com/6zUm.gif" },
  {
    id: "16",
    name: "Hammer Curls",
    image:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif",
  },
  { id: "17", name: "Bench Press", image: "https://i.gifer.com/MH2W.gif" },
  { id: "18", name: "Pull-Ups", image: "https://i.gifer.com/BVdS.gif" },
  {
    id: "19",
    name: "Shoulder Press",
    image: "https://media1.tenor.com/m/ZR-_3Mxq0gYAAAAd/arnold-press.gif",
  },
  { id: "20", name: "Bicep Curls", image: "https://i.gifer.com/7hh1.gif" },
  { id: "21", name: "Jump Rope", image: "https://i.gifer.com/Gjnt.gif" },
  { id: "22", name: "High Knees", image: "https://i.gifer.com/9hD9.gif" },
  {
    id: "23",
    name: "Mountain Climbers",
    image: "https://i.gifer.com/3IDz.gif",
  },
  {
    id: "24",
    name: "Chin Ups",
    image:
      "https://fitnessprogramer.com/wp-content/uploads/2021/03/Chin-Up.gif",
  },
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Worktracker = () => {
  const [templates, setTemplates] = useState(predefinedTemplates);
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [currentSession, setCurrentSession] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [showRepsSetsModal, setShowRepsSetsModal] = useState(false);
  const [showAddExerciseModal, setShowAddExerciseModal] = useState(false);
  const [savedSessions, setSavedSessions] = useState({});

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const addToSession = (template) => {
    setCurrentSession({
      ...currentSession,
      [selectedDay]: [...currentSession[selectedDay], template],
    });
  };

  const [weight, setWeight] = useState(""); // Add this line

  const handleExerciseClick = (template, exercise) => {
    setSelectedTemplate(template);
    setSelectedExercise(exercise);
    setReps(exercise.reps || "");
    setSets(exercise.sets || "");
    setWeight(exercise.weight || ""); // Add this line
    setShowRepsSetsModal(true);
  };

  const handleRepsSetsSave = () => {
    if (selectedTemplate && selectedExercise) {
      const updatedTemplates = templates.map((template) => {
        if (template.id === selectedTemplate.id) {
          return {
            ...template,
            exercises: template.exercises.map((exercise) =>
              exercise.id === selectedExercise.id
                ? { ...exercise, reps, sets, weight } // Add weight here
                : exercise
            ),
          };
        }
        return template;
      });

      setTemplates(updatedTemplates);
      setShowRepsSetsModal(false);
      setSelectedExercise(null);
      setSelectedTemplate(null);
      setReps("");
      setSets("");
      setWeight(""); // Reset weight
    }
  };

  const handleAddExerciseToTemplate = () => {
    if (selectedTemplate && selectedExercise) {
      const updatedTemplates = templates.map((template) => {
        if (template.id === selectedTemplate.id) {
          const updatedExercises = [...template.exercises];
          const existingExerciseIndex = updatedExercises.findIndex(
            (ex) => ex.id === selectedExercise.id
          );
          if (existingExerciseIndex !== -1) {
            updatedExercises[existingExerciseIndex] = {
              ...updatedExercises[existingExerciseIndex],
              reps,
              sets,
            };
          } else {
            updatedExercises.push({ ...selectedExercise, reps, sets });
          }
          return {
            ...template,
            exercises: updatedExercises,
          };
        }
        return template;
      });
      setTemplates(updatedTemplates);
      setShowAddExerciseModal(false);
      setSelectedTemplate(null);
      setSelectedExercise(null);
      setReps("");
      setSets("");
    }
  };

  const finishSession = () => {
    // Save the current session
    setSavedSessions({
      ...savedSessions,
      [selectedDay]: currentSession[selectedDay],
    });
    // Reset current session
    setCurrentSession({
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    });
    // Optional: Notify the user that the session has been saved
    alert(`Session for ${selectedDay} has been saved.`);
  };

  const removeExerciseFromTemplate = (templateId, exerciseId) => {
    setTemplates(
      templates.map((template) => {
        if (template.id === templateId) {
          return {
            ...template,
            exercises: template.exercises.filter(
              (exercise) => exercise.id !== exerciseId
            ),
          };
        }
        return template;
      })
    );
  };

  const removeExerciseFromSession = (templateId, exerciseId) => {
    setCurrentSession({
      ...currentSession,
      [selectedDay]: currentSession[selectedDay].map((template) => {
        if (template.id === templateId) {
          return {
            ...template,
            exercises: template.exercises.filter(
              (exercise) => exercise.id !== exerciseId
            ),
          };
        }
        return template;
      }),
    });
  };

  return (
    <div>
      <Navbar2/>
    <div className="back">
      <div className="workout-session">
        <h2>Workout Session</h2>

        {/* Professional Day Selector */}
        <div className="day-selector-professional">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              className={`day-item-professional ${
                selectedDay === day ? "active" : ""
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="template-selection">
          <h2>Templates</h2>
          {templates.map((template) => (
            <div key={template.id} className="template-item">
              <img
                src={template.image}
                alt={template.name}
                className="template-image"
              />
              <div className="template-details">
                <h4>{template.name}</h4>
                <div className="exercise-list">
                  {template.exercises.map((exercise) => (
                    <div
                      key={exercise.id}
                      className="exercise-item"
                      onClick={() => handleExerciseClick(template, exercise)}
                    >
                      <img
                        src={exercise.image}
                        alt={exercise.name}
                        className="exercise-image"
                      />
                      <span>{exercise.name}</span>
                      <div className="exercise-meta">
                        <span>
                          {exercise.reps ? `Reps: ${exercise.reps}` : "Reps: -"}
                        </span>
                        <span>
                          {exercise.sets ? `Sets: ${exercise.sets}` : "Sets: -"}
                        </span>
                        {/* Conditionally render the weight element if the exercise uses weight */}
                        {[
                          "Bench Press",
                          "Hammer Curls",
                          "Shoulder Press",
                          "Bicep Curls",
                        ].includes(exercise.name) && (
                          <span>{`Weight: ${
                            exercise.weight ? `${exercise.weight} kg` : "-"
                          }`}</span>
                        )}
                      </div>
                      <button
                        className="remove-exercise-button"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering the modal when clicking the remove button
                          removeExerciseFromTemplate(template.id, exercise.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="buttons-container">
                  <button
                    className="add-to-day-button"
                    onClick={() => addToSession(template)}
                  >
                    Add to {selectedDay}
                  </button>
                  <button
                    className="add-to-day-button2"
                    onClick={() => {
                      setSelectedTemplate(template);
                      setShowAddExerciseModal(true);
                    }}
                  >
                    Add Exercise
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reps and Sets Modal */}
        {showRepsSetsModal && (
          <div className="reps-sets-modal">
            <div className="modal-content">
              <h3>Edit Exercise Details</h3>
              <label>
                Reps:
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
              </label>
              <label>
                Sets:
                <input
                  type="number"
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
              </label>
              {/* Conditionally render the weight input field */}
              {selectedExercise &&
                (selectedExercise.name === "Bench Press" ||
                  selectedExercise.name === "Hammer Curls" ||
                  selectedExercise.name === "Shoulder Press" ||
                  selectedExercise.name === "Bicep Curls") && (
                  <label>
                    Weight:
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </label>
                )}
              <button
                className="save-reps-sets-button"
                onClick={handleRepsSetsSave}
              >
                Save
              </button>
              <button
                className="save-reps-sets-button2"
                onClick={() => setShowRepsSetsModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Add Exercise Modal */}
        {showAddExerciseModal && (
          <div className="add-exercise-modal">
            <div className="modal-content">
              <h3>Add Exercise to Template</h3>
              <select
                onChange={(e) =>
                  setSelectedExercise(
                    allExercises.find(
                      (exercise) => exercise.name === e.target.value
                    )
                  )
                }
                value={selectedExercise ? selectedExercise.name : ""}
              >
                <option value="">Select Exercise</option>
                {allExercises.map((exercise) => (
                  <option key={exercise.id} value={exercise.name}>
                    {exercise.name}
                  </option>
                ))}
              </select>
              <label>
                Reps:
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
              </label>
              <label>
                Sets:
                <input
                  type="number"
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
              </label>
              <button
                className="confirm-add-exercise-button"
                onClick={handleAddExerciseToTemplate}
              >
                Add Exercise
              </button>
              <button
                className="confirm-add-exercise-button2"
                onClick={() => setShowAddExerciseModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Display the session templates */}
        <div className="session-templates">
  <h2>{selectedDay}'s Session</h2>
  {currentSession[selectedDay].length > 0 ? (
    currentSession[selectedDay].map((template, index) => (
      <div key={index} className="session-item">
        <img
          src={template.image}
          alt={template.name}
          className="template-image"
        />
        <div className="template-details">
          <h5>{template.name}</h5>
          <div className="exercise-list">
            {template.exercises.map((exercise) => (
              <div
                key={exercise.id}
                className="exercise-item"
                onClick={() => handleExerciseClick(template, exercise)}
              >
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="exercise-image"
                />
                <span>{exercise.name}</span>
                <div className="exercise-meta">
                  <span>
                    {exercise.reps ? `Reps: ${exercise.reps}` : "Reps: -"}
                  </span>
                  <span>
                    {exercise.sets ? `Sets: ${exercise.sets} `: "Sets: -"}
                  </span>
                  {/* Add the weight information here */}
                  {exercise.weight && (
                    <span>{`Weight: ${exercise.weight} kg`}</span>
                  )}
                </div>
                <button
                  className="remove-exercise-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the modal when clicking the remove button
                    removeExerciseFromSession(template.id, exercise.id);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No templates added for {selectedDay}</p>
  )}
</div>


        {/* Finish Session Button */}
        <button className="confirm-add-exercise-button" onClick={finishSession}>
          Finish Session
        </button>
      </div>
    </div>
    </div>
  );
};

export default Worktracker;