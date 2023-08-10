import react, { useState } from 'react';
import ShortItemList from '../Item/ShortItemList';

function ItemDropBar() {
  const [dropBar, setDropBar] = useState(true);

  const handleDropBarOpen = () => {
    setDropBar((prev) => !prev);
  };
  return (
    <div className="dropbar-container">
      <div className="dropbar-handle-container">
        <div className="dropbar-handle" onClick={handleDropBarOpen}></div>
      </div>
      {dropBar ? (
        <div className="dropbar-body">
          <ShortItemList />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemDropBar;
