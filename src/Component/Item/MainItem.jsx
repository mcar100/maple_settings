function MainItem() {
  const title = '몬파';
  return (
    <div className="main-item-container">
      <div className="main-item-head">
        <img className="main-item-img" src="/red_potion.png" />
      </div>
      <div className="main-item-body">
        <div className="main-item-title">{title}</div>
        <button className="main-item-checkbutton">check</button>
      </div>
    </div>
  );
}

export default MainItem;
