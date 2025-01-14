import React from "react";
import "./SkillsMatrix.css";

const SkillsMatrix = () => {
  const skills = [
    {
      skill: "HTML",
      level: "Intermediate",
      notes: "Used in multiple projects.",
    },
    {
      skill: "CSS",
      level: "Intermediate",
      notes: "Styled responsive layouts.",
    },
    {
      skill: "JavaScript",
      level: "Intermediate",
      notes: "Built dynamic web applications.",
    },
    {
      skill: "React Native",
      level: "Intermediate",
      notes: "Developed a to-do list app.",
    },
    {
      skill: "Java",
      level: "Intermediate",
      notes: "built Web applications",
    },
  ];

  return (
    <div className="skills-matrix-container">
      <h1>Skills Matrix</h1>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Proficiency Level</th>
            <th>Notes/Examples of Use</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.skill}</td>
              <td>{skill.level}</td>
              <td>{skill.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsMatrix;
