import React from 'react';
import logo from '../../logo.svg';
import './Profile.css';

function Profile() {
  return (
    <div className="Devfense-Profile container">
        <div className="columns">
            <div className="column photo-container is-two-fifths">
                <img src={logo} className="profile-pic"/>
            </div>
            <div className="column">
                <div className="profile-info">
                    <h1>Lorem Ipsum Dolor Sit Amet</h1>
                    <p>lorem ipsum dolor sit amet consectitur. Ojsmee heyosa dila bento abias.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
