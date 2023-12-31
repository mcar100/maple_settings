import React, { useState, useEffect } from 'react';
import BuffItem from '../Item/BuffItem';
import SwitchingItem from '../Item/SwitchItem';

function MainItemList({
  itemType,
  itemList,
  totalItemEffect,
  setTotalItemEffect,
}) {
  const [reset, setReset] = useState(false);
  const [complete, setComplete] = useState(false);
  const [filteredItemList, setFilteredItemList] = useState('');
  const [filteredSwitchingItemList, setFilteredSwitchingItemList] =
    useState('');

  useEffect(() => {
    if (itemList) {
      setFilteredItemList(() => {
        const newItemList = itemList.filter(
          (item) => item.type1 === itemType && item.type2 === 'potion/coupon'
        );
        return newItemList;
      });

      setFilteredSwitchingItemList(() => {
        const newItemList = itemList.filter(
          (item) => item.type1 === 'switching'
        );
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
        attackRate: 0,
        bossPower: 0,
        ignoreDefense: 0,
        damage: 0,
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
                <BuffItem
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
          <div className="main-itemList-inventory">
            {filteredSwitchingItemList ? (
              filteredSwitchingItemList.map((item) => (
                <SwitchingItem
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
            )}{' '}
          </div>
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
