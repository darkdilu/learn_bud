

import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-100 rounded-full -my-10  md:hidden ">
      <div className="grid grid-cols-6 gap-4  mx-auto items-center">
        <div></div>
        <div>
          <img
            src="/assets/Images/newglass.jpeg"
            alt="New Glass"
            className="bg-pink-500 h-6 rounded-3xl -mx-5"
          />
        </div>
        <div>
          <img
            src="/assets/Images/love.png"
            alt="Love"
            className="h-6 mx-auto bg-pink-400 rounded-full"
          />
        </div>
        <div>
          <img
            src="/assets/Images/home2.png"
            alt="Home"
            className="h-9 mx-auto bg-pink-950 rounded-full"
          />
        </div>
        <div>
          <img
            src="/assets/Images/star.jpeg"
            alt="Star"
            className="h-9 mx-auto bg-pink-950 rounded-full"
          />
        </div>
        <div>
          <img
            src="/assets/Images/comment.png"
            alt="Comment"
            className="h-6 mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

