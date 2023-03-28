const Task = ({ org, onDelete }) => {
  return (
    <div className="w-80 flex mb-5 justify-between items-center">
      <h3 className="text-red-500 font-semibold">{org.text}</h3>
      <button
        className="bg-blue-700 hover:bg-blue-500 rounded-md px-2 text-white"
        onClick={() => onDelete(org.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
