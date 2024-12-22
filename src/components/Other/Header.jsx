import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("loggedInUser");
    if (userData) {
      const parsedUserData = JSON.parse(userData).data;
      setUsername(parsedUserData.firstName);
      setRole(parsedUserData.role === "employees" ? "Employee" : "Admin");
    }
  }, []);

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
    // Optionally redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="sticky px-3 top-0 z-50 bg-black rounded-md shadow-md">
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-xl font-medium text-gray-500">
            Hello, <br />
            <span className="text-2xl font-semibold text-blue-600">
              {username} ({role}) 👋
            </span>
          </h1>
        </div>
        <button
          onClick={logOutUser}
          className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
