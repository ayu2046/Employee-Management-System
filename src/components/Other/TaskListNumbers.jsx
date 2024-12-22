import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10  justify-between gap-5 screen">
      <div className="rounded-xl  w-[45%] py-6 px-9 bg-gradient-to-r from-blue-200 to-blue-500 text-blue-900 shadow-md">
        <h2 className="text-3xl text-black/55 font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl text-black/55 mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-green-200 to-green-500 text-green-900 shadow-md">
        <h2 className="text-3xl text-black/55 font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl text-black/55 mt-0.5 font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-yellow-200 to-yellow-500 text-yellow-900 shadow-md">
        <h2 className="text-3xl text-black/55 font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-xl text-black/55 mt-0.5 font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-200 to-red-500 text-red-900 shadow-md">
        <h2 className="text-3xl text-black/55 font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl text-black/55 mt-0.5 font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
