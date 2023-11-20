import React from "react";
import {
  getUserById,
  getActivityById,
  getPrioritySVG,
  getUserAvatarURL,
} from "../../utils/fetchData";
import TagSVG from "../../assets/tag.svg";
import "./cards.css";

export default function StatusCard({ users, task }) {
  const tags = task.tag;
  const user = getUserById(users, task.userId);
  const avatarURL = getUserAvatarURL(user);
  const isAvailable = getActivityById(users, task.userId);
  const prioritySVG = getPrioritySVG(task.priority);

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
      <h4 className="card-title">{task.title}</h4>
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
