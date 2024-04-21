// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const href = location.pathname === "/organizer" ? "/" : "/organizer";
  const buttonTitle = location.pathname !== "/organizer" ? "Je suis organisateur" : "Je suis un spectateur";

  return (
    <div className="navbar" id="home">
      <div className="flex-1">
        <img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/typography.png" className="w-24 md:w-40" />
      </div>
      <div className="flex-none">
        <a href={href} className="border-2 btn btn-outline border-lime text-lime">
          {buttonTitle}
        </a>
      </div>
    </div>
  )
}