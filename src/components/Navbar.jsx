import { list } from 'postcss';
import React from 'react';

const links = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/' },
  { id: 3, name: 'Movies', link: '/' },
  { id: 4, name: 'Shows', link: '/' },
  { id: 5, name: 'Contact', link: '/' },
];

const Navbar = ({ onOpen, onClick }) => {
  return (
    <nav>
      <ul
        className={
          onOpen
            ? `flex-1 flex align-center justify-center text-white pt-2 sm:flex-row flex-col`
            : ` flex-1 sm:flex align-center justify-center text-white pt-2 sm:flex-row hidden`
        }
      >
        {links.map((link) => (
          <li
            key={link.id}
            className="text-white sm:pr-4 pb-4"
            onClick={() => onClick(link.name)}
          >
            <a href={link.link}></a>
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// className={`}

export default Navbar;
