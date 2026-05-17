import "../index.css";

const InternshipCard = ({ internship, onApply }) => {
  // Safe access to nested fields with fallbacks
  const getLocation = () => {
    if (internship.locations && internship.locations.length > 0) {
      return internship.locations
        .map((loc) => loc.country)
        .join(", ");
    }
    return "Remote";
  };

  const getStipend = () => {
    if (internship.stipend?.salary) {
      return internship.stipend.salary;
    }
    return "Not disclosed";
  };

  const getDuration = () => {
    return internship.duration || "Duration not specified";
  };

  const getCompanyName = () => {
    return internship.company_name || "Company";
  };

  const getProfileName = () => {
    return internship.profile_name || "Internship";
  };

  const getPostedDate = () => {
    return internship.posted_on || "Recently posted";
  };

  const getApplicants = () => {
    return internship.application_status_message?.message || "0 applicants";
  };

  return (
    <button onClick={() => onApply(internship)}>
    <div className="internship-card">
      {/* Card Header */}
      <div className="card-header">
        <div className="company-info">
          <h3 className="title">{internship.title}</h3>
          <p className="company">{getCompanyName()}</p>
          {/* <p className="profile">{getProfileName()}</p> */}
        </div>
        <div className="company-logo">
          {internship.company_logo ? (
            <img
              src={`https://internshala.com/uploads/${internship.company_logo}`}
              alt="Company logo"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            "📦"
          )}
        </div>
      </div>

      {/* Card Meta Information */}
      <div className="card-meta">
        <div className="meta-item">
          <span className="icon">📍</span>
          <span>{getLocation()}</span>
        </div>
        <div className="meta-item">
          <span className="icon">💰</span>
          <span className="stipend">{getStipend()}</span>
        </div>
        <div className="meta-item">
          <span className="icon">📅</span>
          <span>{getDuration()}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="card-tags">
        {internship.work_from_home && (
          <span className="badge wfh">🏠 Work from Home</span>
        )}
        {internship.part_time && (
          <span className="badge part-time">⏰ Part-time</span>
        )}
        {internship.is_ppo && (
          <span className="badge ppo">✅ PPO Available</span>
        )}
        {internship.is_premium && (
          <span className="badge premium">⭐ Premium</span>
        )}
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        <div className="meta-footer">
          <span className="posted-at">
            <span className="icon">🕐</span>
            {getPostedDate()}
          </span>
          <span className="applicants">
            <span className="icon">👥</span>
            {getApplicants()}
          </span>
        </div>
      </div>
    </div>
    </button>
  );
};

export default InternshipCard;
