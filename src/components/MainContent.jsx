import { useState, useEffect } from "react";
import "../index.css";
import InternshipCard from "./InternshipCard";

const MainContent = ({ internships, onApply }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Reset to page 1 when internships change (filters applied)
  useEffect(() => {
    setCurrentPage(1);
  }, [internships]);

  // Calculate pagination values
  const totalPages = Math.ceil((internships?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInternships = internships?.slice(startIndex, endIndex) || [];

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 6; // Maximum page buttons to show at once

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart pagination with ellipsis
      if (currentPage <= 3) {
        // Near the start
        pages.push(1, 2, 3, 4, 5, 6);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(
          totalPages - 5,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        // In the middle
        pages.push(
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3
        );
      }
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of internship list
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageNumbers = getPageNumbers();
  const showEllipsis = totalPages > 6;

  return (
    <main className="main-content">
      <div className="internship-list">
        {currentInternships && currentInternships.length > 0 ? (
          currentInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              onApply={onApply}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No internships found matching your criteria</p>
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {internships && internships.length > itemsPerPage && (
        <div className="pagination">
          {/* PREVIOUS BUTTON */}
          <button
            className="btn-pagination"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>

          {/* PAGE NUMBERS */}
          <div className="page-numbers">
            {pageNumbers.map((page, index) => (
              <span
                key={index}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            ))}

            {/* ELLIPSIS + LAST PAGE */}
            {showEllipsis && currentPage < totalPages - 3 && (
              <>
                <span className="ellipsis">...</span>
                <span onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </span>
              </>
            )}
          </div>

          {/* NEXT BUTTON */}
          <button
            className="btn-pagination"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      )}
    </main>
  );
};

export default MainContent;