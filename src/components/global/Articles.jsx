import React, { useState }  from "react";
import { ArticlesItem } from "../articles/ArticlesItem";
import { cssClassName } from "../util/cssClassName";

import articlesItems from '../articles/items';

import './_left_Articles.scss';
import './_right_Articles.scss';

// Set focals value
const LEFT_FOCAL = 1;
const RIGHT_FOCAL = 2;

// Toggle activate focal
function focalToggle(formName, expandedFocal, setExpandedFocal) {
    const focalToActivate = expandedFocal === formName ? null : formName;
    setExpandedFocal(focalToActivate);
  }
  
export function Articles() {
    const [expandedFocal, setExpandedFocal] = useState(null); 
    const [items, setItems] = useState([]);

    // handle click event of the button to add item
    const addArticle = () => {
      setItems(prevItems => [
        ...prevItems, getRandomArticle()
      ]);
    };

    const getRandomArticle = () => {
      let randomItem = articlesItems[Math.floor(Math.random() * articlesItems.length)];
      return (
          <ArticlesItem blueTitle={randomItem.blueTitle}  title={randomItem.title} subhead={randomItem.subhead} img={randomItem.img} author={randomItem.author} />
        );
    };
    
    // Save input value
    let size;
    let textInput = React.createRef();

    // Add article depends of input value number
    const handleClick = () => {
      size = textInput.current.value;
        for (let i = 0; i < size; i++) {
            addArticle();
          }
          // if input value is empty, just add 5 articles
          if(size === "") {
            size = 5;
            for (let k = 0; k < size; k++) {
              addArticle();
            }
        }
}


  return (
    <>
    <div className={cssClassName("input-container ",{
      "hide": expandedFocal !== null,
      })}>
        <label htmlFor="">Input articles value to create. If you dont type anything, 5 articles are going to be created</label>
      <input type="text" ref={textInput} pattern="[0-9]*" placeholder="Type a value of articles to create..." />
      <button type="submit" className="left-focal-btn" onClick={() => {
        focalToggle(LEFT_FOCAL, expandedFocal, setExpandedFocal)
        handleClick()
      }}>Left Focal</button>
      <button type="submit" className="right-focal-btn" onClick={() => {
        focalToggle(RIGHT_FOCAL, expandedFocal, setExpandedFocal)
        handleClick()
      }}>Right Focal</button>
    </div>
    <div className="articles-container">
      <div className={cssClassName({
          "left-focal": expandedFocal === LEFT_FOCAL,
          "right-focal": expandedFocal === RIGHT_FOCAL,
          })}>
          {expandedFocal !== "" && items.slice(0, size).map((item, i) => (
              <article key={i} className="article">{item}</article>
          ))}
        </div>
      {expandedFocal !== null && <div className="sidebar"></div>}
    </div>
    </>
  );
}
