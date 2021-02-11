import React, { useState } from "react";
import { isEmpty, size } from "lodash";
import shortid from "shortid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(false);

  const validForm = () => {
    let isValid = true;
    setError(null);

    if (isEmpty(task)) {
      setError("Debes ingresa una tarea.");
      isValid = false;
    }

    return isValid;
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!validForm()) return;

    const newTask = {
      id: shortid.generate(),
      name: task,
    };

    setTasks([...tasks, newTask]);
    console.log("Ok");
    setTask("");
  };

  const saveTask = (e) => {
    e.preventDefault();

    if (!validForm()) return;

    const editedTasks = tasks.map((item) =>
      item.id === id ? { id, name: task } : item
    );

    setTasks(editedTasks);
    setEditMode(false);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const editTask = (theTask) => {
    setEditMode(true);
    setTask(theTask.name);
    setId(theTask.id);
  };

  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          {size(tasks) > 0 ? (
            <ul className="list-group">
              {tasks.map((task) => (
                <li className="list-group-item">
                  <span className="lead">{task.name}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editTask(task)}
                  >
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <li className="list-group-item">Aún no hay tares programadas.</li>
          )}
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {editMode ? "Editar" : "Agregar"} Tarea
          </h4>
          {error && <span className="text-danger">{error}</span>}
          <form onSubmit={editMode ? saveTask : addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la Tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button
              className={
                editMode
                  ? "btn btn-sm btn-warning btn-block"
                  : "btn btn-sm btn-dark btn-block"
              }
              type="submit"
            >
              {editMode ? "Guardar" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
