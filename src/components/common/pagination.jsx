import React from "react";
import _ from "lodash";
// stateless function
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  console.log("pages=>", pages);
  console.log("pageCount=>", pagesCount);
  console.log("itemCount=>", itemsCount);
  console.log("pageSize=>", pageSize);
  console.log("currentPage=>", currentPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a
              className="page-link"
              href="#home"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
