import React, { useEffect, useState } from "react";
import DropdownSVG from "../assets/dropdown.svg";
import SettingsSVG from "../assets/settings.svg";

export default function Dropdown({
  grouping,
  ordering,
  handleGroupingChange,
  handleOrderingChange,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [grouping, ordering]);

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={SettingsSVG} alt="Settings Icon" />
        Display
        <img src={DropdownSVG} alt="Dropdown Icon" />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="flex-row space-between margin-bottom">
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={grouping}
              onChange={handleGroupingChange}
            >
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
          <div className="flex-row space-between">
            <label htmlFor="ordering">Ordering</label>
            <select
              id="ordering"
              value={ordering}
              onChange={handleOrderingChange}
            >
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
