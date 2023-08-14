import React from 'react';

function MainNav({ setItemType }) {
  const handleItemType = (itemType) => {
    const newType = itemType;
    setItemType(newType);
  };

  return (
    <div className="main-nav">
      <ul>
        <li
          onClick={() => {
            handleItemType('boss');
          }}
        >
          보스 세팅
        </li>
        <li
          onClick={() => {
            handleItemType('exp');
          }}
        >
          재획 세팅
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
