import React, { useContext, useState, useEffect } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const [likeCount, setLikeCount] = useState(0);
  const [displayText, setdisp] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Assuming fr is a boolean condition
  const fr = true; // Replace this with your actual condition

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  const increment = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContentButtonClick = () => {
    setdisp(!displayText);
    if (!displayText && fr) {
      setShowPopup(true);
      console.log("Content button clicked");
    }
  };

  useEffect(() => {
    if (showPopup) {
      alert('change');
      setShowPopup(false);
    }
  }, [showPopup]);

  return (
    <div style={themeStyle}>
      
      <br />
      {displayText && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis consequat nibh, eget placerat nisl. Aenean quis lacinia ante. Aliquam tempor orci id arcu sagittis, et condimentum lorem porttitor. Suspendisse non lacus sapien. Sed pharetra ligula felis, eget posuere quam consequat non. Proin venenatis neque ipsum. Curabitur egestas arcu id tortor convallis ullamcorper. Donec pharetra turpis sed ligula hendrerit gravida.</p>}
      <button className="content" onClick={handleContentButtonClick}>
        content
      </button>
      <h2 className="likecount">{likeCount}</h2>
      <button className="like" onClick={increment}>
        Like
      </button>
    </div>
  );
}

export default UseContext;
