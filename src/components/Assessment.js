import React from "react";
import "./SkillsMatrix.css";

const Assessment = () => {
  const assessments = [
    {
      Assessment: "UI challenge",
      GitLink: " ",
      DateCompleted: "Used in multiple projects.",
      Score: "95%",
      Notes: "",
    },
    {
      Assessment: "Weather App",
      GitLink: "",
      DateCompleted: "Used in multiple projects.",
      Score: "95%",
      Notes: "",
    },
    {
      Assessment: "To-Do List",
      GitLink: " ",
      DateCompleted: "Used in multiple projects.",
      Score: "95%",
      Notes: "",
    },
    {
      Assessment: "Shopping List",
      GitLink: "",
      DateCompleted: "",
      Score: "95%",
      Notes: "",
    },
    {
      Assessment: "Recipe App",
      GitLink: "",
      DateCompleted: "Used in multiple projects.",
      Score: "95%",
      Notes: "",
    },
    {
      Assessment: "Shopping List",
      GitLink: "",
      DateCompleted: "Used in multiple projects.",
      Score: "95%",
      Notes: "",
    },
    {
      Assessment: "Hotel App",
      GitLink: "",
      DateCompleted: "Used in multiple projects.",
      Score: "95%",
      Notes: "",
    },
  ];

  return (
    <div className="skills-matrix-container">
      <h1>Assessments</h1>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Assessment</th>
            <th>Git Link</th>
            <th>DateComplete</th>
            <th>Grade/Score</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessments, index) => (
            <tr key={index}>
              <td>{assessments.Assessment}</td>
              <td>{assessments.GitLink}</td>
              <td>{assessments.DateCompleted}</td>
              <td>{assessments.Score}</td>
              <td>{assessments.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assessment;
