import { useState, useMemo, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function InternshalaClone() {
  const [mockInternships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://internshala.com/hiring/search');
        const data = await res.json();

        const ids = data.internship_ids;
        const meta = data.internships_meta;
        const internshipList = ids.map((id) => meta[id]);

        console.log('Fetched internships:', internshipList);
        setInternships(internshipList);
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter state
  const [filters, setFilters] = useState({
    profiles: [],
    locations: [],
    workFromHome: false,
    partTime: false,
    stipend: 0,
    duration: '',
  });

  
  const [selectedInternship, setSelectedInternship] = useState(null);
  console.log(selectedInternship);

  // Filter internships based on active filters
  const filteredInternships = useMemo(() => {
    return mockInternships.filter((internship) => {
      // PROFILE FILTER
      if (
        filters.profiles.length > 0 &&
        !filters.profiles.includes(internship.profile_name)
      ) {
        return false;
      }

      // LOCATION FILTER - Check if any selected location matches
      if (filters.locations.length > 0) {
        const hasMatchingLocation = internship.locations?.some((loc) =>
          filters.locations.includes(loc.country)
        );
        if (!hasMatchingLocation) {
          return false;
        }
      }

      // // WORK FROM HOME FILTER
      // if (filters.workFromHome && !internship.work_from_home) {
      //   return false;
      // }

      // // PART TIME FILTER
      // if (filters.partTime && !internship.part_time) {
      //   return false;
      // }

      // STIPEND FILTER - Check if stipend is greater than or equal to filter
      const stipendAmount = internship.stipend?.salaryValue1 || 0;
      if (stipendAmount < filters.stipend) {
        return false;
      }

      // DURATION FILTER - Check if duration is less than or equal to max
      if (filters.duration) {
        const durationNumber = Number(
          internship.duration?.replace(/[^0-9]/g, '')
        ) || 0;
        const maxDuration = Number(filters.duration);
        if (durationNumber > maxDuration) {
          return false;
        }
      }

      return true;
    });
  }, [mockInternships, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      profiles: [],
      locations: [],
      workFromHome: false,
      partTime: false,
      stipend: 0,
      duration: '',
    });
  };

  const handleApply = (internship) => {
    setSelectedInternship(internship);
    alert(`Applied for ${internship.title} at ${internship.company_name}!`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="app">
        <Header  />
        <div className="loading-container">
          <p>Loading internships...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="app">
        <Header  />
        <div className="error-container">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header/>

      <div className='container'>
        <div className="breadcrumb">
        <span>Home</span>
        <span className="separator">/</span>
        <span>Internships</span>
      </div>

      <div className="search-header">
        <h4 className="page-title">
          {filteredInternships.length} Total Internships
        </h4>
        <p className="page-subtitle">Latest Summer Internships in India</p>
      </div>
      </div>

      

      <div className="container">
        <Sidebar
          internships={mockInternships}
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
        />

        <MainContent
          internships={filteredInternships}
          filteredCount={filteredInternships.length}
          totalCount={mockInternships.length}
          onApply={handleApply}
        />
      </div>

      <Footer />
    </div>
  );
}
