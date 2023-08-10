import React, { useState, useEffect } from 'react';

function MainItem({ title, image }) {
  return (
    <div className="main-item-container">
      <div className="main-item-img">
        <img
          loading="lazy"
          src={require(`../../assets/icons/${image}`)}
          alt={`${title}`}
        />
      </div>
      <div className="main-item-title">{title}</div>
    </div>
  );
}

export default MainItem;
