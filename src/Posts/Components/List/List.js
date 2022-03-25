import React from "react";

import ListItem from "../ListItem/ListItem";

import "./List.css";

const List = ({ listItems = [{ id: "" }], onClick = (id) => {} }) => {
  return (
    <div className="list">
      {listItems.map((item) => (
        <ListItem item={item} onClick={onClick} key={item.id} />
      ))}
    </div>
  );
};

export default List;
