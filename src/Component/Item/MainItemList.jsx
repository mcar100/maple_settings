import React, { useState, useEffect } from 'react';
import MainItem from './MainItem';
import { getItemDB } from '../../api/getItemDB';

function MainItemList() {
  const [itemList, setItemList] = useState('');
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
    <div className="main-itemList-board">
      <div className="main-itemList-field main-itemList-potion">
        <div className="main-itemList-title">도핑류</div>
        <div className="main-itemList-inventory">
          {itemList ? (
            itemList.map((item) => (
              <MainItem title={item.short_title} image={item.image} />
            ))
          ) : (
            <div>아이템이 없습니다.</div>
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
  );
}

export default MainItemList;
