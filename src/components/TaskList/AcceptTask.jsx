import React, { useState } from 'react';

const AcceptTask = ({ data, onUpdateStatus }) => {
  const [status, setStatus] = useState(data.status || 'pending');  // Initially, task is pending

  // Function to handle "Mark as Completed"
  const handleComplete = () => {
    setStatus('completed');
    onUpdateStatus(data.id, 'completed'); // Pass task ID and new status to parent component
  };

  // Function to handle "Mark as Failed"
  const handleFail = () => {
    setStatus('failed');
    onUpdateStatus(data.id, 'failed'); // Pass task ID and new status to parent component
  };

  // Function to handle "Mark as Accepted"
  const handleAccept = () => {
    setStatus('accepted');
    onUpdateStatus(data.id, 'accepted'); // Pass task ID and new status to parent component
  };

  return (
    <div className={`flex-shrink-0 h-full w-[300px] p-5 ${status === 'accepted' ? 'bg-green-600' : status === 'failed' ? 'bg-red-600' : status === 'completed' ? 'bg-blue-600' : 'bg-gray-600'} rounded-xl transition-all`}>
      <div className='flex justify-between items-center'>
        <h3 className={`text-white text-sm px-3 py-1 rounded ${status === 'accepted' ? 'bg-green-800' : status === 'failed' ? 'bg-red-800' : 'bg-gray-500'}`}>
          {data.category}
        </h3>
        <h4 className='text-white text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-white'>{data.taskDescription}</p>
      
      <div className='flex justify-between mt-6'>
        {status !== 'accepted' && (
          <button
            className={`bg-green-500 rounded font-medium py-1 px-2 text-xs transition-all ${status === 'completed' ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleAccept}
            disabled={status === 'completed'}  // Disable button if task is already completed
          >
            Mark as Accepted
          </button>
        )}
        <button
          className={`bg-red-500 rounded font-medium py-1 px-2 text-xs transition-all ${status === 'failed' ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleFail}
          disabled={status === 'failed'}  // Disable button if task is already marked as failed
        >
          Mark as Failed
        </button>
      </div>
      
      {status && (
        <div className={`mt-4 text-sm text-center font-semibold ${status === 'accepted' ? 'text-green-200' : status === 'failed' ? 'text-red-200' : 'text-gray-200'}`}>
          Task is {status}
        </div>
      )}
    </div>
  );
};

export default AcceptTask;
