import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Sidebar = () => {
  return (
    <aside className="hidden  lg:w-64 md:flex lg:flex-col bg-gray-200 h-screen p-4 my-5 rounded-2xl-custom ">
      <nav>
        <ul>
    
          <h2 className="text-xl font-bold">Buddyspair</h2>
          <li><a href="#" className="block py-2 hover:bg-gray-700">Home</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-700">Love</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-700">Messages</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-700">Favourites</a></li>
            <li><a href="#" className="block py-2 hover:bg-gray-700">Search</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
