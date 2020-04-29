import React from "react";
//import { getGenres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const {
    onItemSelect,
    items,
    textProperty,
    valueProperty,
    selectedGenre,
  } = props;

  console.log("items=>", items);
  console.log("selectedGenre=>", selectedGenre);

  return (
    <ul className="list-group">

      {items.map((item) => (
        <li
          className={
            item.name === selectedGenre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
