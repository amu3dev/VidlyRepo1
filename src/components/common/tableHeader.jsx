import React, { Component } from "react";


class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn); // watch this 1st time
    console.log("TableHeader sortColumn=>", sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path && column.key === undefined)
      return <i className="fa fa-sort" aria-hidden="true" />;
    if (column.key) return null;
    if (sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    return <i className="fa fa-sort-desc" aria-hidden="true" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              scope="col"
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
