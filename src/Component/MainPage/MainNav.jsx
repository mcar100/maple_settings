import React from 'react';
import { styled } from 'styled-components';

function MainNav({ itemType, setItemType }) {
  const handleItemType = (itemType) => {
    const newType = itemType;
    setItemType(newType);
  };

  return (
    <div className="main-nav">
      <ul>
        <MainNavLi
          $navtype={'boss'}
          $itemtype={itemType}
          onClick={() => {
            handleItemType('boss');
          }}
        >
          보스
        </MainNavLi>
        <MainNavLi
          $navtype={'exp'}
          $itemtype={itemType}
          onClick={() => {
            handleItemType('exp');
          }}
        >
          사냥/재획
        </MainNavLi>
      </ul>
    </div>
  );
}

export default MainNav;

const MainNavLi = styled.li`
  color: ${({ $itemtype, $navtype }) =>
    $itemtype === $navtype ? '#f90' : '#303030'};
`;
