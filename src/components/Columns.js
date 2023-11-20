import React from "react";
import {
  getUserById,
  getActivityById,
  getPrioritySVG,
  getStatusSVG,
  getUserAvatarURL,
} from "../utils/fetchData";
import { orderTasks, groupTasks } from "../utils/formatData";
import StatusCard from "./cards/StatusCard";
import PriorityCard from "./cards/PriorityCard";
import UserCard from "./cards/UserCard";
import AddSVG from "../assets/add.svg";
import OptionsSVG from "../assets/options.svg";

export default function Columns({ tickets, users, grouping, ordering }) {
  const tasks = groupTasks(tickets, users, grouping);
  return (
    <div className="column-canvas">
      {Object.entries(tasks).map(([key, value]) => (
        <div key={key} className="column">
          <div className="column-heading flex-row space-between">
            <div className="column-info">
              {grouping === "Status" && (
                <img src={getStatusSVG(key)} alt="Status Icon" />
              )}
              {grouping === "User" && (
                <>
                  <img
                    className="user-icon"
                    src={getUserAvatarURL(getUserById(users, key))}
                    alt="User Icon"
                  />
                  {getActivityById(users, key) ? (
                    <div className="dot dot-green" />
                  ) : (
                    <div className="dot dot-red" />
                  )}
                </>
              )}
              {grouping === "Priority" && (
                <img src={getPrioritySVG(key)} alt="Priority Icon" />
              )}
              <h3>{grouping === "User" ? getUserById(users, key) : key}</h3>
              <p>{value.length}</p>
            </div>
            <div className="column-config">
              <img src={AddSVG} alt="Add Icon" />
              <img src={OptionsSVG} alt="Options Icon" />
            </div>
          </div>
          {orderTasks(ordering, value).map((task) => (
            <div key={task.id}>
              {grouping === "Status" && (
                <StatusCard users={users} task={task} />
              )}
              {grouping === "User" && <UserCard users={users} task={task} />}
              {grouping === "Priority" && (
                <PriorityCard users={users} task={task} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
