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

// Hard coded the apiData since original api is not live anymore
const apiData = {
  tickets: [
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: ["Feature request"],
      userId: "usr-1",
      status: "Todo",
      priority: 4,
    },
    {
      id: "CAM-2",
      title:
        "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 1,
    },
    {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "In progress",
      priority: 0,
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "Todo",
      priority: 1,
    },
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "Backlog",
      priority: 2,
    },
    {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: ["Feature Request"],
      userId: "usr-3",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "Todo",
      priority: 2,
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: ["Feature Request"],
      userId: "usr-4",
      status: "Backlog",
      priority: 1,
    },
  ],
  users: [
    {
      id: "usr-1",
      name: "Anoop sharma",
      available: false,
    },
    {
      id: "usr-2",
      name: "Yogesh",
      available: true,
    },
    {
      id: "usr-3",
      name: "Shankar Kumar",
      available: true,
    },
    {
      id: "usr-4",
      name: "Ramesh",
      available: true,
    },
    {
      id: "usr-5",
      name: "Suresh",
      available: true,
    },
  ],
};

export async function getData() {
  // try {
  //   const response = await fetch(
  //     "https://api.quicksell.co/v1/internal/frontend-assignment"
  //   );
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   throw new Error("Error fetching data:", error);
  // }
  return apiData;
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
