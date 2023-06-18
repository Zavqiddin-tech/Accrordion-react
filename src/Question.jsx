import React, { useState } from "react";


function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? '-' : '+'}
        </button>
      </header>
      <p>{showInfo && <p>{info}</p>}</p>
    </div>
  );
}

export default Question;
