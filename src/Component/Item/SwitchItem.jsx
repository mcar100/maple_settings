import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

function SwitchingItem({ item, reset, setReset, complete, setComplete }) {
  const { shortTitle, image, mode } = item;
  // 완료 버튼이 눌렸는지 감지
  const [isComplete, setIsComplete] = useState(false);
  // 아이템이 선택된지 확인
  const [itemChecked, setItemChecked] = useState(false);
  // boss인지 exp인지 확인
  const [selectedMode, setSelectedMode] = useState('boss');

  // 아이템 별 완료 확인
  useEffect(() => {
    if (complete && itemChecked) {
      setIsComplete(true);
      setComplete(false);
    } else {
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
    }
  }, [reset]);

  const handleContainerClicked = () => {
    const updateItemChecked = !itemChecked;
    setItemChecked(updateItemChecked);
  };

  return (
    <ItemContainer
      className="main-item-container"
      $itemchecked={itemChecked ? 'true' : ''}
      $iscomplete={isComplete ? 'true' : ''}
    >
      {isComplete && itemChecked ? (
        <div className="main-item-mode">
          <ModeChecked $modechecked={'true'}>{selectedMode}</ModeChecked>
        </div>
      ) : (
        <div className="main-item-mode">
          {mode.map((unit, idx) => (
            <ModeChecked
              key={`mode-${idx}`}
              $modechecked={selectedMode === unit ? 'true' : ''}
              onClick={() => {
                setSelectedMode(unit);
              }}
            >
              {unit}
            </ModeChecked>
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
          src={
            image
              ? require(`../../assets/icons/${image}`)
              : require(`../../assets/icons/no-image.jpg`)
          }
          alt={`${shortTitle}`}
        />
        <div className="main-item-title">{shortTitle}</div>
      </div>
    </ItemContainer>
  );
}

export default SwitchingItem;

const ItemContainer = styled.div`
  border-color: ${({ $itemchecked }) => ($itemchecked ? '#f90' : '#303030')};
  color: ${({ $itemchecked }) => ($itemchecked ? '#f90' : '#303030')};
`;

const ModeChecked = styled.div`
  color: ${({ $modechecked }) => ($modechecked ? '#f90' : '#303030')};
`;
