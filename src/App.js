import React, { useState, useEffect } from "react";
import { getData } from "./utils/fetchData";
import Dropdown from "./components/Dropdown";
import Columns from "./components/Columns";
import "./App.css";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "Status"
  );
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") || "Priority"
  );

  useEffect(() => {
    getData()
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
    localStorage.setItem("grouping", event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrdering(event.target.value);
    localStorage.setItem("ordering", event.target.value);
  };

  return (
    <div className="App">
      <div className="title-bar flex-row space-between">
        <Dropdown
          grouping={grouping}
          ordering={ordering}
          handleGroupingChange={handleGroupingChange}
          handleOrderingChange={handleOrderingChange}
        />
        <h1>
          <a href="/">TaskLANE</a>
        </h1>
      </div>
      <Columns
        tickets={tickets}
        users={users}
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
}
