import React, { useState, useEffect } from 'react';
import { styled, css, keyframes } from 'styled-components';

function MainItem({
  item,
  setTotalItemEffect,
  reset,
  setReset,
  complete,
  setComplete,
}) {
  const { shortTitle, image, stat, duration } = item;
  // 완료 버튼이 눌렸는지 감지
  const [isComplete, setIsComplete] = useState(false);
  // 아이템이 선택된지 확인
  const [itemChecked, setItemChecked] = useState(false);
  // 효과 지속 시간
  const [timer, setTimer] = useState(duration[0]);
  // 점차 감소하는 지속 시간
  const [timeText, setTimeText] = useState(duration[0]);

  // 아이템 별 완료 확인
  useEffect(() => {
    if (complete && itemChecked) {
      setIsComplete(true);
      setComplete(false);
    }
  }, [complete]);

  // reset
  useEffect(() => {
    if (reset && itemChecked) {
      setItemChecked(false);
      setComplete(false);
      setReset(false);
      setIsComplete(false);
      setTimeText(timer);
    }
  }, [reset]);

  useEffect(() => {
    if (isComplete) {
      const setIntervalChecker = setInterval(() => {
        setTimeText((prev) => prev - 1);
      }, 1000);
      const setTimeoutChecker = setTimeout(() => {
        setItemChecked(false);
        setTimeText(timer);
        setIsComplete(false);
        setTotalItemEffect((prev) => {
          const totalItemEffect = { ...prev };
          for (const [key, value] of Object.entries(stat)) {
            totalItemEffect[key] -= value;
          }
          return totalItemEffect;
        });
      }, timer * 1000);

      return () => {
        console.log('이벤트 끝');
        clearInterval(setIntervalChecker);
        clearTimeout(setTimeoutChecker);
      };
    }
  }, [isComplete]);

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
      iscomplete={isComplete ? 'true' : ''}
      timer={timer ? timer : '0'}
    >
      {isComplete && itemChecked ? (
        <div className="main-item-duration">
          <TimeChecked timechecked={'true'}>{timeText}</TimeChecked>
        </div>
      ) : (
        <div className="main-item-duration">
          {duration.map((unit, idx) => (
            <TimeChecked
              key={`duration-${idx}`}
              timechecked={timer === unit ? 'true' : ''}
              onClick={() => {
                setTimer(unit);
                setTimeText(unit);
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

  ${({ iscomplete, itemchecked, timer }) =>
    iscomplete && itemchecked
      ? css`
          animation: ${boxColor} ${timer}s linear;
        `
      : ''}
`;

const TimeChecked = styled.div`
  color: ${(props) => (props.timechecked ? '#f90' : '#303030')};
`;

const boxColor = keyframes`
  0%{
    border-color: #f90;
    color: #f90;
  }
  70%{
    border-color: #f90;
    color: #f90;
  }
  90%{
    border-color: red;
    color: red;
  }
  100%{
    border-color: #303030;
    color: #303030;
  }
`;
