import { useState } from "react";


const ProfileDropdown = ({ isOpen, onMouseEnter, onMouseLeave, profile }) => {
  const [showMoreSubmenu, setShowMoreSubmenu] = useState(false);
  const [showManageAccount, setShowManageAccount] = useState(false);

  return (
    <li
      className="nav-item profile-container-dropdown"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="profile-button">
        <img src={profile.image} alt="Profile" className="profile-image" />
        <i className="dropdown-arrow">▼</i>
      </button>
      {isOpen && (
        <div className="dropdown-menu profile-menu">
          <div className="profile-header">
            <div className="profile-name">{profile.name}</div>
            <div className="profile-email">{profile.email}</div>
          </div>

          <div className="profile-rating">
            <a href="/rating">
              <span className="star">★</span>
              <span className="rating-value">{profile.rating}</span>
              <span className="rating-label">Know More →</span>
            </a>
          </div>

          <nav className="profile-options">
            <a href="/student/dashboard">Home</a>
            <a href="/student/applications">My Applications</a>
            <a href="/bookmark">My Bookmarks</a>
            <a href="/student/interstitial">Edit Resume</a>
            <a href="/user_preference/preferences">Edit Preferences</a>
            <a href="/safety_tips">Safety Tips</a>
            <a href="/student/help_center">Help Center</a>

            <div className="submenu-container">
              <button
                className="submenu-toggle"
                onClick={() => setShowMoreSubmenu(!showMoreSubmenu)}
              >
                More <i>▶</i>
              </button>
              {showMoreSubmenu && (
                <div className="submenu">
                  <div className="submenu-item">
                    <button
                      className="submenu-toggle"
                      onClick={() => setShowManageAccount(!showManageAccount)}
                    >
                      Manage Account <i>▶</i>
                    </button>
                    {showManageAccount && (
                      <div className="submenu">
                        <a href="/login/update_password">Change Password</a>
                        <a href="/student/change_email">Change Email Address</a>
                        <a href="/delete_account">Delete My Account</a>
                      </div>
                    )}
                  </div>
                  <a href="/logout">Logout</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </li>
  );
};

export default ProfileDropdown;