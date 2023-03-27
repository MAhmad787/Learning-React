const Hamburger = () => {
  return (
    <nav className="w-screen h-max flex bg-blue-700 px-4 py-2 flex-col sm:flex-row">
      <div className="flex-1">
        <h1 className="">
          {' '}
          <h1 className="text-3xl font-bold text-white">React</h1>
        </h1>
      </div>
      <ul
        className="flex-1 flex align-center justify-center text-white pt-2
      flex-col sm:flex-row
      "
      >
        <li className="pr-6">Home</li>
        <li className="pr-6">About</li>
        <li className="pr-6">Services</li>
        <li className="pr-6">Contact</li>
      </ul>
    </nav>
  );
};

export default Hamburger;
