import React from 'react';
import copy from 'clipboard-copy'; // Import the clipboard-copy library
import { toast } from 'react-toastify';
const CopyButton = ({ text }) => {
  const handleCopy = () => {
    copy(text); // Call copy function with the text to copy
    toast.success('Copied to clipboard!');
  };

  return (
    <button onClick={handleCopy} className='text-2xl bg-red-400 hover:bg-red-600 py-2 px-4 rounded-lg border-2 border-red-900'>Copy</button>
  );
};

export default CopyButton;
