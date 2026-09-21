import React from "react";
import "./button.css";

export const Buttoncd = ({ tagName, selectTagName, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "green" },
    CSS: { backgroundColor: "blue" },
    JavaScript: { backgroundColor: "yellow" },
    React: { backgroundColor: "pink" },
    default: { backgroundColor: "white" },
  };

  return (
    <>
      <button
        style={selected ? tagStyle[tagName]: tagStyle.default}
        type="button"
        onClick={() => selectTagName(tagName)}
        className="tag"
      >
        {tagName}
      </button>
    </>
  );
};

export default Buttoncd;
