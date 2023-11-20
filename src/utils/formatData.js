export function orderTasks(ordering, tasks) {
  if (ordering === "Priority") {
    return tasks.sort((a, b) => b.priority - a.priority);
  } else if (ordering === "Title") {
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}

export function groupTasks(tickets, users, grouping) {
  if (grouping === "Status") {
    const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    const groupedByStatus = tickets.reduce((acc, task) => {
      acc[task.status] = [...(acc[task.status] || []), task];
      return acc;
    }, {});

    const result = statusOrder.reduce((acc, status) => {
      acc[status] = groupedByStatus[status] || [];
      return acc;
    }, {});

    return result;
  } else if (grouping === "User") {
    const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

    const groupedByUser = tickets.reduce((acc, task) => {
      acc[task.userId] = [...(acc[task.userId] || []), task];
      return acc;
    }, {});

    const result = sortedUsers.reduce((acc, user) => {
      acc[user.id] = groupedByUser[user.id] || [];
      return acc;
    }, {});

    return result;
  } else if (grouping === "Priority") {
    const priorityMap = {
      0: "No priority",
      4: "Urgent",
      3: "High",
      2: "Medium",
      1: "Low",
    };

    const orderedPriorities = [
      "No priority",
      "Urgent",
      "High",
      "Medium",
      "Low",
    ];

    const groupedByPriority = tickets.reduce((acc, task) => {
      const priorityName = priorityMap[task.priority];
      acc[priorityName] = [...(acc[priorityName] || []), task];
      return acc;
    }, {});

    const result = orderedPriorities.reduce((acc, priority) => {
      acc[priority] = groupedByPriority[priority] || [];
      return acc;
    }, {});

    return result;
  }
}
