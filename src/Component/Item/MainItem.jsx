import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

function MainItem({
  item,
  setTotalItemEffect,
  reset,
  setReset,
  complete,
  setComplete,
}) {
  const { shortTitle, image, stat, duration } = item;
  const [timer, setTimer] = useState(duration[0]);
  const [itemChecked, setItemChecked] = useState(false);

  useEffect(() => {
    if (reset) {
      setItemChecked(false);
      setReset(false);
      setComplete(false);
    }
  }, [reset]);

  useEffect(() => {
    if (complete) {
      setTimeout(() => {}, timer);
    }
  }, [complete]);

  const handleContainerClicked = () => {
    const updateItemChecked = !itemChecked;
    setItemChecked(updateItemChecked);
    setTotalItemEffect((prev) => {
      const totalItemEffect = { ...prev };
      const changeValue = updateItemChecked ? 1 : -1;
      for (const [key, value] of Object.entries(stat)) {
        totalItemEffect[key] += value * changeValue;
      }
      return totalItemEffect;
    });
  };

  return (
    <ItemContainer
      className="main-item-container"
      itemchecked={itemChecked ? 'true' : ''}
    >
      {complete && itemChecked ? (
        <div className="main-item-duration">
          <TimeChecked timechecked={'true'}>{timer}</TimeChecked>
        </div>
      ) : (
        <div className="main-item-duration">
          {duration.map((unit, idx) => (
            <TimeChecked
              key={`duration-${idx}`}
              timechecked={timer === unit ? 'true' : ''}
              onClick={() => {
                setTimer(unit);
              }}
            >
              {unit}
            </TimeChecked>
          ))}
        </div>
      )}
      <div
        className="main-item-body"
        onClick={() => {
          handleContainerClicked();
        }}
      >
        <img
          loading="lazy"
          src={require(`../../assets/icons/${image}`)}
          alt={`${shortTitle}`}
        />
        <div className="main-item-title">{shortTitle}</div>
      </div>
    </ItemContainer>
  );
}

export default MainItem;

const ItemContainer = styled.div`
  border-color: ${(props) => (props.itemchecked ? '#f90' : '#303030')};
  color: ${(props) => (props.itemchecked ? '#f90' : '#303030')};
`;

const TimeChecked = styled.div`
  color: ${(props) => (props.timechecked ? '#f90' : '#303030')};
`;
