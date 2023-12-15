import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import ByDate from './Components/ByDate/ByDate';
import Empty from './Components/EmptyState/Empty';
import Filter from './Components/Filter/Filter';

function App() {
  return (
    <div className="App">
      {/* <SideBar/>
      <ByDate/>
      <Empty/> */}
      <Filter/>
    </div>
  );
}

export default App;
