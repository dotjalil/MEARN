import { useState } from "react";
import "./App.css";

function App() {
  let [addStudentForm, setAddStudentForm] = useState({
    id: 0,
    name: "",
    age: "",
  });
  let [students, setStudents] = useState([]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function removeStudent(id) {
    let filteredArr = students.filter((student) => student.id !== id);
    setStudents(filteredArr);
  }

  function handleInput(e) {
    setAddStudentForm({
      ...addStudentForm,
      id: students.length !== 0 ? students[students.length - 1].id + 1 : 0,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    if (!addStudentForm.name || !addStudentForm.age) {
      alert("input valid data");
      return;
    }
    addStudent(addStudentForm);
    setAddStudentForm({
      id: 0,
      name: "",
      age: "",
    });
  }

  return (
    <div className="min-h-screen bg-[#ededed] flex items-center justify-center">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <form onSubmit={handleFormSubmission} className="mb-10">
            <h1 className="text-grey-darkest">Students List</h1>
            <div className="flex mt-4">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Student Name"
                name="name"
                onChange={handleInput}
                value={addStudentForm.name}
              />
              <input
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Student Age"
                name="age"
                onChange={handleInput}
                value={addStudentForm.age}
              />
              <button
                type="submit"
                className="flex-no-shrink p-2 border-2 rounded text-purple border-purple hover:text-white hover:bg-purple"
              >
                Add
              </button>
            </div>
          </form>
          <hr />
          <div className="pt-10 bt-solid">
            {students.length > 0 &&
              students.map((student) => {
                return (
                  <div key={student.id} className="flex mb-4 items-center">
                    <p className="w-full text-grey-darkest w-1/3">
                      {student.name}
                    </p>
                    <p className="w-1/3 text-center">{student.age}</p>
                    <button
                      onClick={() => {
                        removeStudent(student.id);
                      }}
                      className="flex-no-shrink p-2 ml-2 border-2 rounded text-orange border-orange hover:text-white hover:bg-orange w-1/3"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
