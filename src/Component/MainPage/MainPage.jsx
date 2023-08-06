import react from 'react';
import MainNav from './MainNav';
import MainItemList from './MainItemList';

function MainPage() {
  return (
    <div className="main-container">
      <MainNav />
      <div className="main-itemList-container">
        <MainItemList />
        <div className="button-container">
          <button>리셋</button>
          <button>완료</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
