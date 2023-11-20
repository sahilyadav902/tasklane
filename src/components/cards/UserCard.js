import React from "react";
import { getPrioritySVG, getStatusSVG } from "../../utils/fetchData";
import TagSVG from "../../assets/tag.svg";
import "./cards.css";

export default function UserCard({ users, task }) {
  const tags = task.tag;
  const prioritySVG = getPrioritySVG(task.priority);
  const statusSVG = getStatusSVG(task.status);

  return (
    <div className="card">
      <div className="card-start flex-row space-between">
        <h3>{task.id}</h3>
      </div>
      <div className="card-title flex-row">
        <img src={statusSVG} alt={task.status} />
        <h4>{task.title}</h4>
      </div>
      <div className="card-end flex-row">
        <img
          className="feature-highlight"
          src={prioritySVG}
          alt={task.priority}
        />
        {tags.map((item) => (
          <div key={item} className="flex-row feature-highlight">
            <img src={TagSVG} alt="Tag Icon" />
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
