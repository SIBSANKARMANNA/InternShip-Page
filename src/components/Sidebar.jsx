import { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ internships, filters, onFilterChange, onReset }) => {
  // Modal state
  const [isOpen, setIsOpen] = useState(false);

  // Search input states
  const [profileSearch, setProfileSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [showMoreFilters, setShowMoreFilters] =useState(false);

  // Extract unique profiles from internships
  const allProfiles = Array.from(
    new Set(
      internships
        ?.map((item) => item.profile_name)
        .filter(Boolean)
    )
  ).sort();

  // Extract unique countries/locations from internships
  const allLocations = Array.from(
    new Set(
      internships
        ?.flatMap((item) => item.locations?.map((loc) => loc.country) || [])
        .filter(Boolean)
    )
  ).sort();

  // Filter profiles based on search input
  const filteredProfiles = allProfiles.filter((profile) =>
    profile.toLowerCase().includes(profileSearch.toLowerCase())
  );

  // Filter locations based on search input
  const filteredLocations = allLocations.filter((location) =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // Handle profile toggle
  const handleProfileToggle = (profile) => {
    const isSelected = filters.profiles.includes(profile);

    if (isSelected) {
      onFilterChange(
        "profiles",
        filters.profiles.filter((p) => p !== profile)
      );
    } else {
      onFilterChange("profiles", [...filters.profiles, profile]);
    }
  };

  // Handle location toggle
  const handleLocationToggle = (location) => {
    const isSelected = filters.locations.includes(location);

    if (isSelected) {
      onFilterChange(
        "locations",
        filters.locations.filter((l) => l !== location)
      );
    } else {
      onFilterChange("locations", [...filters.locations, location]);
    }
  };

  // Handle clear and close
  const handleClearAll = () => {
    onReset();
  };

  // Handle apply and close
  // const handleApply = () => {
  //   setIsOpen(false);
  // };

  // Count active filters
  const activeFilterCount = 
    (filters.profiles?.length || 0) +
    (filters.locations?.length || 0) +
    (filters.workFromHome ? 1 : 0) +
    (filters.partTime ? 1 : 0) +
    (filters.stipend > 0 ? 1 : 0) +
    (filters.duration ? 1 : 0);

  return (
    <>
      {/* FILTER BUTTON - Shows on mobile/tablet */}
      <button className="filter-button" onClick={() => setIsOpen(true)}>
        <span className="filter-icon">⚙️</span>
        Filters
        {activeFilterCount > 0 && (
          <span className="filter-badge">{activeFilterCount}</span>
        )}
      </button>

      {/* MODAL OVERLAY */}
      {isOpen && (
        <div className="filter-overlay" onClick={() => setIsOpen(false)} />
      )}


      


      {/* SIDEBAR MODAL */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* HEADER WITH CLOSE */}
        <div className="sidebar-header">
          <h2 className="sidebar-title">Filters</h2>
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close filters"
          >
            ✕
          </button>
        </div>

        {/* FILTER CONTENT */}
        <div className="sidebar-content">
          {/* PREFERENCES CHECKBOX */}
          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                // checked={filters.matchPreferences || false}
                // onChange={(e) =>
                //   onFilterChange("matchPreferences", e.target.checked)
                // }
              />
              <span>As per my preferences</span>
            </label>
          </div>

          {/* PROFILE FILTER */}
          <div className="filter-group">
            <label className="filter-label">Profile</label>

            <div className="search-dropdown">
              <input
                type="text"
                placeholder="e.g. Data Science"
                className="search-input"
                value={profileSearch}
                onChange={(e) => setProfileSearch(e.target.value)}
              />

              {/* DROPDOWN LIST */}
              {profileSearch && (
                <div className="dropdown-list">
                  {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile) => (
                      <div key={profile} className="dropdown-item">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={filters.profiles.includes(profile)}
                            onChange={() => handleProfileToggle(profile)}
                          />
                          <span
                            className={
                              filters.profiles.includes(profile)
                                ? "selected"
                                : ""
                            }
                          >
                            {profile}
                          </span>
                        </label>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">No results found</div>
                  )}
                </div>
              )}

              {/* SELECTED TAGS */}
              {filters.profiles.length > 0 && (
                <div className="selected-tags">
                  {filters.profiles.map((profile) => (
                    <div key={profile} className="tag">
                      {profile}
                      <button
                        className="tag-remove"
                        onClick={() => handleProfileToggle(profile)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* LOCATION FILTER */}
          <div className="filter-group">
            <label className="filter-label">Location</label>

            <div className="search-dropdown">
              <input
                type="text"
                placeholder="e.g. India"
                className="search-input"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              />

              {/* DROPDOWN LIST */}
              {locationSearch && (
                <div className="dropdown-list">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((location) => (
                      <div key={location} className="dropdown-item">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={filters.locations.includes(location)}
                            onChange={() => handleLocationToggle(location)}
                          />
                          <span
                            className={
                              filters.locations.includes(location)
                                ? "selected"
                                : ""
                            }
                          >
                            {location}
                          </span>
                        </label>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">No results found</div>
                  )}
                </div>
              )}

              {/* SELECTED TAGS */}
              {filters.locations.length > 0 && (
                <div className="selected-tags">
                  {filters.locations.map((location) => (
                    <div key={location} className="tag">
                      {location}
                      <button
                        className="tag-remove"
                        onClick={() => handleLocationToggle(location)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* INTERNSHIPS IN MY CITY CHECKBOX */}
          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                // checked={filters.internshipsInMyCity || false}
                // onChange={(e) =>
                //   onFilterChange("internshipsInMyCity", e.target.checked)
                // }
              />
              <span>Internships in my city</span>
            </label>
          </div>

          {/* WORK FROM HOME FILTER */}
          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                // checked={filters.workFromHome}
                // onChange={(e) =>
                //   onFilterChange("workFromHome", e.target.checked)
                // }
              />
              <span>Work from Home</span>
            </label>
          </div>

          {/* PART TIME FILTER */}
          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                // checked={filters.partTime}
                // onChange={(e) => onFilterChange("partTime", e.target.checked)}
              />
              <span>Part-time</span>
            </label>
          </div>

          {/* STIPEND FILTER */}
          <div className="filter-group">
            <label className="filter-label">
              Desired minimum monthly stipend (₹)
            </label>

            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={filters.stipend}
              onChange={(e) =>
                onFilterChange("stipend", Number(e.target.value))
              }
              className="filter-slider"
            />

            <div className="stipend-display">
              ₹{filters.stipend.toLocaleString("en-IN")}
            </div>
          </div>

          {/* VIEW MORE FILTERS LINK */}
          <button
            className="view-more-filters"
            onClick={() =>
              setShowMoreFilters(
                !showMoreFilters
              )
            }
          >

            {showMoreFilters
              ? "Hide filters ▲"
              : "View more filters ▼"}

          </button>
          {showMoreFilters && (

              <>
              
              {/* EXTRA FILTERS */}
              {/* DURATION FILTER (ADVANCED) */}
          <div className="filter-group">
            <label className="filter-label">Max Duration (Months)</label>

            <select
              value={filters.duration}
              onChange={(e) => onFilterChange("duration", e.target.value)}
              className="filter-select"
            >
              <option value="">No limit</option>
              <option value="1">1 Month</option>
              <option value="2">2 Months</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">1 Year</option>
            </select>
          </div>

          {/* JOB OFFER */}

          <div className="filter-group compact">

            <label className="filter-checkbox">

              <input type="checkbox" />

              <span>
                Internships with job offer
              </span>

              <span className="info-icon">
                ?
              </span>

            </label>

          </div>

          {/* FAST RESPONSE */}

          <div className="filter-group compact">

            <label className="filter-checkbox">

              <input type="checkbox" />

              <span>
                Fast response
              </span>

              <span className="info-icon">
                ?
              </span>

            </label>

          </div>

          {/* EARLY APPLICANT */}

          <div className="filter-group compact">

            <label className="filter-checkbox">

              <input type="checkbox" />

              <span>
                Early applicant
              </span>

              <span className="info-icon">
                ?
              </span>

            </label>

          </div>

          {/* WOMEN */}

          <div className="filter-group compact">

            <label className="filter-checkbox">

              <input type="checkbox" />

              <span>
                Internships for women
              </span>

              <span className="info-icon">
                ?
              </span>

            </label>

          </div>

              </>
            )}

          
        </div>

        {/* FOOTER WITH BUTTONS */}
        <div className="sidebar-footer">
          <button className="btn-clear-all" onClick={handleClearAll}>
            Clear All
          </button>
          {/* <button className="btn-apply" onClick={handleApply}>
            Apply
          </button> */}
        </div>
         {/* KEYWORD SEARCH */}

        <div className="filter-group keyword-search-box">

          <h3 className="keyword-title">
            Keyword Search
          </h3>

          <div className="keyword-input-wrapper">

            <input
              type="text"
              placeholder="e.g. Design, Mumbai, Infosys"
              className="keyword-input"
            />

            <button className="keyword-btn">

              🔍

            </button>

          </div>

        </div>
      </aside>
     
    </>
  );
};

export default Sidebar;