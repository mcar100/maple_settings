import React, { useState, useEffect } from 'react';
import MainItem from './MainItem';

function MainItemList({
  itemType,
  itemList,
  totalItemEffect,
  setTotalItemEffect,
}) {
  const [reset, setReset] = useState(false);
  const [complete, setComplete] = useState(false);
  const [filteredItemList, setFilteredItemList] = useState('');
  useEffect(() => {
    if (itemList) {
      setFilteredItemList(() => {
        const newItemList = itemList.filter(
          (item) => item.type1 === itemType && item.type2 === 'potion/coupon'
        );
        console.log(itemType);
        return newItemList;
      });
    }
  }, [itemType, itemList]);

  const resetTotalItemEffect = () => {
    setReset(true);
    setTotalItemEffect((prev) => {
      return {
        ...prev,
        attackPower: 0,
        bossPower: 0,
        ignoreDefense: 0,
        criDamage: 0,
        critical: 0,
        allStat: 0,
        hitManaPoint: 0,
        experience: 0,
        dropRate: 0,
      };
    });
  };

  const handleResetBtn = () => {
    resetTotalItemEffect();
  };

  const handleCompleteBtn = () => {
    console.log(`현재 적용 중인 효과`);
    console.log(totalItemEffect);
    setComplete(true);
  };

  return (
    <div className="main-itemList-container">
      <div className="main-itemList-board">
        <div className="main-itemList-field main-itemList-potion">
          <div className="main-itemList-title">도핑류</div>
          <div className="main-itemList-inventory">
            {filteredItemList ? (
              filteredItemList.map((item) => (
                <MainItem
                  key={item.id}
                  item={item}
                  setTotalItemEffect={setTotalItemEffect}
                  reset={reset}
                  setReset={setReset}
                  complete={complete}
                  setComplete={setComplete}
                />
              ))
            ) : (
              <div className="main-itemList-no-item">아이템이 없습니다.</div>
            )}
          </div>
        </div>
        <div className="main-itemList-field main-itemList-switching">
          {' '}
          <div className="main-itemList-title">스위칭류</div>
          <div className="main-itemList-inventory"></div>
        </div>
        <div className="main-itemList-field main-itemList-partybuff">
          {' '}
          <div className="main-itemList-title">파티버프류</div>
          <div className="main-itemList-inventory"></div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleResetBtn}>리셋</button>
        <button onClick={handleCompleteBtn}>완료</button>
      </div>
    </div>
  );
}

export default MainItemList;
