import React from "react";

function Navbar() {
  return (
    <div className="grid grid-cols-2">
      <div className="container flex items">
        <img
          className="w-[200px]"
          src="./src/assets/img/logo.png"
          alt="Netflix"
        />
      </div>
      <div className="flex items-end justify-end p-4">
        <button>
          <img
            className="w-[90px] h-[90px] rounded-md"
            src="./src/assets/img/avatar.png"
            alt="avatar"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
