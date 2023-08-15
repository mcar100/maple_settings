import React, { useState, useEffect } from 'react';
import MainNav from './MainNav';
import MainItemList from '../MainPage/MainItemList';
import { getItemDB } from '../../api/getItemDB';

function MainPage() {
  const [itemType, setItemType] = useState('boss');
  const [itemList, setItemList] = useState('');
  const [totalItemEffect, setTotalItemEffect] = useState({
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
  });

  useEffect(() => {
    async function fetchItemData() {
      const data = await getItemDB();
      if (data) {
        setItemList(data);
      }
    }

    fetchItemData();
  }, []);

  return (
    <div className="main-container">
      <MainNav setItemType={setItemType} />
      <MainItemList
        itemType={itemType}
        itemList={itemList}
        totalItemEffect={totalItemEffect}
        setTotalItemEffect={setTotalItemEffect}
      />
    </div>
  );
}

export default MainPage;
