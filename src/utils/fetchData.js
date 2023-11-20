import BacklogSVG from "../assets/backlog.svg";
import CancelSVG from "../assets/cancel.svg";
import DashesSVG from "../assets/dashes.svg";
import DoneSVG from "../assets/done.svg";
import HighSVG from "../assets/high.svg";
import LowSVG from "../assets/low.svg";
import MediumSVG from "../assets/medium.svg";
import ProgressSVG from "../assets/progress.svg";
import TodoSVG from "../assets/todo.svg";
import UrgentSVG from "../assets/urgent.svg";

export async function getData() {
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
}

export function getUserById(users, userId) {
  const user = users.find((user) => user.id === userId);
  return user.name;
}

export function getActivityById(users, userId) {
  const user = users.find((user) => user.id === userId);
  return user.available;
}

export function getUserAvatarURL(username) {
  const encodedName = encodeURIComponent(username);
  return `https://ui-avatars.com/api/?size=64&background=random&name=${encodedName}`;
}

export function getStatusSVG(status) {
  switch (status) {
    case "Backlog":
      return BacklogSVG;
    case "Todo":
      return TodoSVG;
    case "In progress":
      return ProgressSVG;
    case "Done":
      return DoneSVG;
    case "Cancelled":
      return CancelSVG;
    default:
      return "";
  }
}

export function getPrioritySVG(priority) {
  switch (priority) {
    case 4:
    case "Urgent":
      return UrgentSVG;
    case 3:
    case "High":
      return HighSVG;
    case 2:
    case "Medium":
      return MediumSVG;
    case 1:
    case "Low":
      return LowSVG;
    case 0:
    case "No priority":
      return DashesSVG;
    default:
      return "";
  }
}
