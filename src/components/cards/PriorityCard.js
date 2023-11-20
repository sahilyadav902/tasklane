import React from "react";
import {
  getActivityById,
  getUserById,
  getStatusSVG,
  getUserAvatarURL,
} from "../../utils/fetchData";
import TagSVG from "../../assets/tag.svg";
import "./cards.css";

export default function PriorityCard({ users, task }) {
  const tags = task.tag;
  const user = getUserById(users, task.userId);
  const avatarURL = getUserAvatarURL(user);
  const isAvailable = getActivityById(users, task.userId);
  const statusSVG = getStatusSVG(task.status);

  return (
    <div className="card">
      <div className="card-start flex-row space-between">
        <h3>{task.id}</h3>
        <div className="flex-row">
          <img className="user-icon" src={avatarURL} alt={user} />
          {isAvailable ? (
            <div className="dot-card dot-green" />
          ) : (
            <div className="dot-card dot-red" />
          )}
        </div>
      </div>
      <div className="card-title flex-row">
        <img src={statusSVG} alt={task.status} />
        <h4>{task.title}</h4>
      </div>
      <div className="card-end flex-row">
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
