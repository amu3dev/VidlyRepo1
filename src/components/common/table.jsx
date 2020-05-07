import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableHeader";

const Table = ({ columns, sortColumn, onSort, data }) => {
  //const { data, sortColumn, onSort, columns } = props;

  return (
    <table className="table table-dark table-striped">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />

      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
