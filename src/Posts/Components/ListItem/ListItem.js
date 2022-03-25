import React from "react";

import "./ListItem.css";

const ListItem = ({
  item = { title: "", body: "", id: "" },
  onClick = (id) => {},
}) => {
  const onItemClicked = (id) => () => onClick(id);
  return (
    <div className="item" onClick={onItemClicked(item.id)}>
      <h2 className="item-title">{item.title}</h2>
      <p className="item-content">{item.body}</p>
    </div>
  );
};

export default ListItem;
