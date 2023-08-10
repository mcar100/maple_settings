import react from 'react';

function ShortItem() {
  const title = '몬파';
  return (
    <div className="short-item-container">
      <div className="short-item-head">
        <img className="short-item-img" src="/red_potion.png" />
      </div>
      <div className="short-item-body">
        <div className="short-item-title">{title}</div>
        <button className="short-item-addbutton">
          <img
            className="short-item-addbutton-image"
            src="/icons/add.png"
            placeholder="add button"
          />
        </button>
      </div>
    </div>
  );
}
export default ShortItem;
