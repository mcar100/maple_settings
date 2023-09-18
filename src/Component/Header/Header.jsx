import React from 'react';

function Header() {
  const version = 'v.1.0';
  const lastUpdate = '23.08.23';
  return (
    <div className="header-container">
      <div className="header-title">메이플 세팅 체크 리스트</div>
      <div className="header-nav">
        {/* <ul>
        <li>기본 세팅</li>
        <li>나만의 세팅</li>
      </ul> */}
      </div>
      <div className="header-version">{version}</div>
      <div className="header-lastupdate">updated: {lastUpdate}</div>
    </div>
  );
}

export default Header;
