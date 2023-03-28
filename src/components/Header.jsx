import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCrossedBones } from 'react-icons/gi';
import Navbar from './Navbar';
const Header = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-screen h-max flex bg-blue-700 px-4 py-2 flex-col sm:flex-row">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white">React</h1>
      </div>
      <Navbar onOpen={open} onClick={onClick} />
      <div
        className="absolute right-4 text-white text-3xl cursor-pointer sm:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <GiCrossedBones /> : <GiHamburgerMenu />}
      </div>
    </header>
  );
};

export default Header;
