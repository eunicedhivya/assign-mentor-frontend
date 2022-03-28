import UserRow from "../components/UserRow";
import { useState, useEffect } from "react";

function Home() {
  const [studentList, setStudentList] = useState([]);

  const url = "http://localhost:4000/students/";

  const getStudents = () => {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((stds) => setStudentList(stds));
  };

  useEffect(getStudents, []);

  console.log(studentList);
  return (
    <>
      <div className="row">
        <h2>Manage Users</h2>
      </div>
    </>
  );
}

export default Home;
