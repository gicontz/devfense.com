import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Devfense-Header">
        <ul className="nav">
            <li><a href="#profile">Profile</a></li>
            <li><a href="#xp">Works</a></li>
            <li><a href="#techstack">Technology</a></li>
            <li><a href="#socials">Socials</a></li>
            <li><a href="#blog">Blog</a></li>
        </ul>
    </header>
  );
}

export default Header;
