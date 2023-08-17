import React, { useState } from 'react';

function Header() {
  const [version, setVersion] = useState('v.1.0');
  const [lastUpdate, setLastUpdate] = useState('23.08.16');
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
      <div className="header-lastupdate">{lastUpdate}</div>
    </div>
  );
}

export default Header;
