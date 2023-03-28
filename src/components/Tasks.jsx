const Tasks = () => {
  return (
    <section className="mt-5">
      <h1 className="text-blue-700 font-bold text-3xl text-center mb-4">
        Your Tasks
      </h1>
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="w-40 flex mb-5 justify-between items-center">
          <h3 className="text-red-500 font-semibold">School</h3>
          <button className="bg-blue-700 hover:bg-blue-500 rounded-md px-2 text-white">
            Delete
          </button>
        </div>
        <div className="w-40 flex mb-5 justify-between items-center">
          <h3 className="text-red-500 font-semibold">College</h3>
          <button className="bg-blue-700 hover:bg-blue-500 rounded-md px-2 text-white">
            Delete
          </button>
        </div>
        <div className="w-40 flex mb-5 justify-between items-center">
          <h3 className="text-red-500 font-semibold">Academy</h3>
          <button className="bg-blue-700 hover:bg-blue-500 rounded-md px-2 text-white">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
