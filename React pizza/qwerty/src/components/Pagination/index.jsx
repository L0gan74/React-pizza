import React from "react";
import ReactPaginate from "react-paginate";
import styles from './Pagination.modules.scss'

const Pagination = ({onChangePage}) => {
  return (
    <div className={styles.root}>
    <ReactPaginate
      className="bag"
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
    </div>
  );
};

export default Pagination;
