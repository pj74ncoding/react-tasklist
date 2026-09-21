import React from "react";
import "./taskcard.css";
import Button from "./button";
const Taskcard = ({title, tagName, handleDelete, index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tagName.map((item, index)=> <Button key={index} tagName={item} selected />)}
  
        </div>

        <div className="task_delete" onClick={()=> handleDelete(index)}>
        {/* <i className="fa-regular fa-trash-can delete_icon"></i> */}
        <i className="fa-regular fa-trash-can fa-lg delete_icon"></i>
          
        </div>
      </div>
    </article>
  );
};

export default Taskcard;
