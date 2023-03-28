import React, { useState } from 'react';

const AddOrgs = ({ onAdd }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    text !== '' ? onAdd({ text }) : '';
  };
  return (
    <form onSubmit={onSubmit} className="w-screen flex justify-center mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your Institutes"
        className="border-2 outline-none bg-blue-400 text-white placeholder:text-white rounded-md px-2 py-1"
      />
      <button
        type="submit"
        className="font-bold text-white bg-blue-700 px-3 rounded-md"
      >
        {' '}
        Add
      </button>
    </form>
  );
};

export default AddOrgs;
