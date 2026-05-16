import  { useState } from 'react';
import './Header.css';
import ProfileDropdown from './ProfileDropdown';
import DropdownMenu from './DropdownMenu';

// Dropdown Data
const INTERNSHIPS_MENU = {
  topLocations: [
    { label: 'Work from Home', url: '/internships/work-from-home' },
    { label: 'Internship in Bangalore', url: '/internships/internship-in-bangalore' },
    { label: 'Internship in Delhi', url: '/internships/internship-in-delhi' },
    { label: 'Internship in Hyderabad', url: '/internships/internship-in-hyderabad' },
    { label: 'Internship in Mumbai', url: '/internships/internship-in-mumbai' },
    { label: 'Internship in Chennai', url: '/internships/internship-in-chennai' },
    { label: 'Internship in Pune', url: '/internships/internship-in-pune' },
    { label: 'Internship in Kolkata', url: '/internships/internship-in-kolkata' },
    { label: 'Internship in Jaipur', url: '/internships/internship-in-jaipur' },
    { label: 'International Internship', url: '/internships/international-internship' },
  ],
  profile: [
    { label: 'Computer Science Internship', url: '/internships/computer-science-internship' },
    { label: 'Marketing Internship', url: '/internships/marketing-internship' },
    { label: 'Finance Internship', url: '/internships/finance-internship' },
    { label: 'Graphic Design Internship', url: '/internships/graphic-design-internship' },
    { label: 'Architecture Internship', url: '/internships/architecture-internship' },
    { label: 'Mechanical Internship', url: '/internships/mechanical-internship' },
    { label: 'HR Internship', url: '/internships/hr-internship' },
    { label: 'Digital Marketing Internship', url: '/internships/digital-marketing-internship' },
    { label: 'Law Internship', url: '/internships/law-internship' },
    { label: 'Electronics Internship', url: '/internships/electronics-internship' },
  ],
  topCategories: [
    { label: 'Engineering Internship', url: '/internships/engineering-internship' },
    { label: 'Business/MBA Internship', url: '/internships/mba-internship' },
    { label: 'Humanities Internship', url: '/internships/humanities-internship' },
    { label: 'Science Internship', url: '/internships/science-internship' },
    { label: 'Internships with Job Offer', url: '/internships/ppo-true' },
    { label: 'Part-Time Jobs/Internships', url: '/internships/part-time-jobs' },
    { label: 'Internships for Women', url: '/internships-for-women' },
  ],
  exploreMore: [
    { label: 'Internships by Category', url: '/internships-by-category' },
    { label: 'Internships by Location', url: '/internships-by-location' },
    { label: 'Internships by Company', url: '/internships-at-company' },
  ],
};

const JOBS_MENU = {
  topLocations: [
    { label: 'Work from home', url: '/jobs/work-from-home' },
    { label: 'Jobs in Bangalore', url: '/jobs/jobs-in-bangalore' },
    { label: 'Jobs in Delhi', url: '/jobs/jobs-in-delhi' },
    { label: 'Jobs in Hyderabad', url: '/jobs/jobs-in-hyderabad' },
    { label: 'Jobs in Gurgaon', url: '/jobs/jobs-in-gurgaon' },
    { label: 'Jobs in Kolkata', url: '/jobs/jobs-in-kolkata' },
    { label: 'Jobs in Mumbai', url: '/jobs/jobs-in-mumbai' },
    { label: 'Jobs in Pune', url: '/jobs/jobs-in-pune' },
    { label: 'Jobs in Chennai', url: '/jobs/jobs-in-chennai' },
    { label: 'Jobs in Noida', url: '/jobs/jobs-in-noida' },
  ],
  topCategories: [
    { label: 'Data Entry Jobs', url: '/jobs/data-entry-jobs' },
    { label: 'Content Writing Jobs', url: '/jobs/content-writing-jobs' },
    { label: 'Digital Marketing Jobs', url: '/jobs/digital-marketing-jobs' },
    { label: 'Data Science Jobs', url: '/jobs/data-science-jobs' },
    { label: 'Cyber Security Jobs', url: '/jobs/cyber-security-jobs' },
    { label: 'Teaching Jobs', url: '/jobs/teaching-jobs' },
    { label: 'HR Jobs', url: '/jobs/hr-jobs' },
    { label: 'Part Time Jobs', url: '/jobs/part-time-jobs' },
    { label: 'Jobs for Women', url: '/jobs-for-women' },
  ],
};

const COURSES_MENU = [
  { label: 'Artificial Intelligence & Machine Learning', url: '#', trending: true },
  { label: 'Web Development with AI', url: '#' },
  { label: 'Machine learning with AI', url: '#' },
  { label: 'Cyber Security with AI', url: '#' },
  { label: 'Programming in Python with AI', url: '#' },
  { label: 'Digital Marketing with AI', url: '#' },
];




// Main Header Component
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =useState(false);

  const profileData = {
    name: 'Sibsankar Manna',
    email: 'manna.sibsankar8@gmail.com',
    image: 'https://internshala.com/uploads/profile_picture/student/cropped/5887684f432fcb36a9b46d214a17f082.jpg',
    rating: '4.3',
  };

  const handleDropdownEnter = (name) => {
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Brand Section */}
        <div className="brand-container">
          <button
                  className="hamburger-menu"
                  onClick={() =>
                    setMobileMenuOpen(true)
                  }
                >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="/" className="logo">
            <div className="logo-image"><img src='./logo.png' alt='logo'/></div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-menu">
            {/* Internships Dropdown */}
            <DropdownMenu
              title="Internships"
              menuData={INTERNSHIPS_MENU}
              isOpen={openDropdown === 'internships'}
              onMouseEnter={() => handleDropdownEnter('internships')}
              onMouseLeave={handleDropdownLeave}
              type="two-column"
            />

            {/* Courses Dropdown */}
            <DropdownMenu
              title="Courses"
              menuData={COURSES_MENU}
              isOpen={openDropdown === 'courses'}
              onMouseEnter={() => handleDropdownEnter('courses')}
              onMouseLeave={handleDropdownLeave}
              type="single"
            />

            {/* Jobs Dropdown */}
            <DropdownMenu
              title="Jobs"
              menuData={JOBS_MENU}
              isOpen={openDropdown === 'jobs'}
              onMouseEnter={() => handleDropdownEnter('jobs')}
              onMouseLeave={handleDropdownLeave}
              type="two-column"
            />

            {/* IS PRO Button */}
            <li className="nav-item">
              <a href="#" className="nav-link pro-btn">
                IS PRO
              </a>
            </li>

            {/* Chat Icon */}
            <li className="nav-item chat-icon">
              <a href="/chat" className="nav-link">
                💬
              </a>
            </li>

            {/* Profile Dropdown */}
            <ProfileDropdown
              isOpen={openProfileDropdown}
              onMouseEnter={() => setOpenProfileDropdown(true)}
              onMouseLeave={() => setOpenProfileDropdown(false)}
              profile={profileData}
            />
          </ul>
        </nav>

        {/* Mobile Navigation Icons */}
        <div className="nav-mobile">
          <a href="/chat" className="mobile-chat-icon">
            💬
          </a>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}

      <div
        className={`mobile-sidebar-overlay ${
          mobileMenuOpen ? "show" : ""
        }`}
        onClick={() =>
          setMobileMenuOpen(false)
        }
      >

        <div
          className={`mobile-sidebar ${
            mobileMenuOpen ? "open" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >

          {/* PROFILE */}

          <div className="mobile-profile">

            <img
              src={profileData.image}
              alt="profile"
              className="mobile-profile-image"
            />

            <div>

              <h3>
                {profileData.name}
              </h3>

              <p>
                {profileData.email}
              </p>

            </div>

          </div>

          {/* RATING */}

          <div className="mobile-rating">

            <span>⭐ 4.3</span>

            <span className="know-more">
              Know More →
            </span>

          </div>

          {/* MENU */}

          <div className="mobile-menu-links">

            <a href="/">Internships</a>

            <a href="/">Jobs</a>

            <a href="/">
              Career Launchpads
            </a>

            <a href="/">Courses</a>

            <a href="/">Online Degrees</a>

            <a href="/">IS PRO</a>

            <a href="/">Study Abroad</a>

            <a href="/">Air India</a>

          </div>

          {/* SECOND SECTION */}

          <div className="mobile-menu-links second">

            <a href="/">
              My Applications
            </a>

            <a href="/">
              My Bookmarks
            </a>

            <a href="/">
              Edit Resume
            </a>

            <a href="/">
              Edit Preferences
            </a>

            <a href="/">
              More
            </a>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
