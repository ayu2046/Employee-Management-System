import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      {/* Header Row */}
      <div className="bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-2 py-2 px-4 flex justify-between rounded shadow-md">
        <h2 className="text-lg font-medium text-white w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium text-white w-1/5">New Task</h3>
        <h5 className="text-lg font-medium text-white w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium text-white w-1/5">Completed</h5>
        <h5 className="text-lg font-medium text-white w-1/5">Failed</h5>
      </div>
      
      {/* Task Rows */}
      <div>
        {userData.map((employee, idx) => (
          <div 
            key={idx} 
            className="border-2 border-gray-500 mb-2 py-2 px-4 flex justify-between rounded bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-md"
          >
            <h2 className="text-lg font-medium text-white w-1/5">{employee.firstName}</h2>
            <h3 className="text-lg font-medium text-blue-400 w-1/5">{employee.taskCounts.newTask}</h3>
            <h5 className="text-lg font-medium text-yellow-400 w-1/5">{employee.taskCounts.active}</h5>
            <h5 className="text-lg font-medium text-green-400 w-1/5">{employee.taskCounts.completed}</h5>
            <h5 className="text-lg font-medium text-red-500 w-1/5">{employee.taskCounts.failed}</h5>
          </div>
        ))}
      </div>

      {/* Task Details */}
      <div className="mt-5">
        {userData.map((employee, idx) => (
          <div key={idx} className="mb-5">
            <h2 className="text-xl font-semibold text-white mb-2">
              Tasks for {employee.firstName}
            </h2>
            <div>
              {employee.tasks.length > 0 ? (
                employee.tasks.map((task, taskIdx) => (
                  <div 
                    key={taskIdx} 
                    className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded shadow-md mb-3"
                  >
                    <h3 className="text-lg font-medium text-white">
                      {task.taskTitle}
                    </h3>
                    <p className="text-sm text-gray-400">{task.taskDescription}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Date: {task.taskDate} | Category: {task.category}
                    </p>
                    <p className="text-sm mt-1">
                      Status:{" "}
                      <span
                        className={`font-semibold ${
                          task.completed
                            ? "text-green-400"
                            : task.active
                            ? "text-yellow-400"
                            : task.failed
                            ? "text-red-400"
                            : "text-blue-400"
                        }`}
                      >
                        {task.completed
                          ? "Completed"
                          : task.active
                          ? "Active"
                          : task.failed
                          ? "Failed"
                          : "New"}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No tasks assigned.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
