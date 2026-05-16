
import './DropdownMenu.css';

const DropdownMenu = ({ 
  title, 
  menuData, 
  onMouseEnter, 
  onMouseLeave, 
  isOpen, 
  type = 'two-column' 
}) => {
  const renderContent = () => {
    if (type === 'single') {
      // For courses - single column
      return (
        <div className="dropdown-content-single">
          {menuData.map((item, idx) => (
            <a key={idx} href={item.url} className="dropdown-item">
              <div className="item-text">{item.label}</div>
              {item.trending && <span className="tag-trending">Trending in AI</span>}
            </a>
          ))}
        </div>
      );
    }

    // For two-column menus (internships, jobs)
    // Layout: Section headings on left, items on right
    const sections = Object.keys(menuData);
    
    return (
      <div className="dropdown-content-grid">
        {sections.map((sectionKey, sectionIdx) => {
          // Format section heading (e.g., "topLocations" -> "Top Locations")
          const formattedHeading = sectionKey
            .replace(/([A-Z])/g, ' $1') // Add space before capitals
            .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
            .trim();

          return (
            <div key={sectionIdx} className="dropdown-section">
              {/* SECTION HEADING */}
              <div className="section-heading">
                <h4>{formattedHeading}</h4>
              </div>

              {/* SECTION ITEMS */}
              <div className="section-items">
                {menuData[sectionKey].map((item, itemIdx) => (
                  <a 
                    key={itemIdx} 
                    href={item.url} 
                    className="dropdown-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <li
      className="nav-item dropdown-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href="#" className="nav-link">
        {title}
        <i className="dropdown-arrow">▼</i>
      </a>
      {isOpen && (
        <div className="dropdown-menu">
          {renderContent()}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;