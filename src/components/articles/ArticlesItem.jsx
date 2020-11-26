import React from "react";
import PropTypes from "prop-types";

import './_d_ArticlesItem.scss';
import './_m_ArticlesItem.scss';



export function ArticlesItem({ blueTitle, title, subhead, img, author, note }) {
  return (
    <>
      <div className="media">
        <img className="note-img" src={img} alt={title}/>
      </div>
        <h1 className="title"><em className="blue-text">{blueTitle}</em><a href={note}>{title}</a></h1>
        <p className="subhead">{subhead}</p>
        <p className="author"><strong>{author}</strong></p>
    </>
  );
}


ArticlesItem.propTypes = {
    title: PropTypes.string.isRequired,
    subhead: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    note: PropTypes.string,
};
