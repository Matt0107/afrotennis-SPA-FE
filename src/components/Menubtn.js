import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const Menubtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const menuItems = [
      { label: 'Home', path: '/home' },
      { label: 'About', path: '/about' },
      { label: 'Profile', path: '/profile' },
      { label: 'Play with a buddy', path: '/buddy' },
      { label: 'Support', path: '/association' },
      { label: 'Logout', onClick: handleLogOut },
    ];
  
    function handleLogOut() {
      logoutUser();
      navigate('/');
    }
  
    return (
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          Menu
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {menuItems.map((item) => {
              if (item.onClick) {
                return (
                  <li key={item.label}>
                    <button onClick={item.onClick} className="dropdown-item">
                      {item.label}
                    </button>
                  </li>
                );
              } else {
                return (
                  <li key={item.path}>
                    <Link to={item.path} className="dropdown-item">
                      {item.label}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    );
  };
  

export default Menubtn;