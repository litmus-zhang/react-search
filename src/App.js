import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterItem from './components/FilterItem';
import DayCard from './components/DayCard';




//Component = SearchBar, filters, dayCard 

function App() {
  return (
    <div className="App">
      <main className='container'>
      <h1>Welcome to helicarrier</h1>
      <SearchBar />
      <div className='filter_container'>
        <FilterItem />
        <FilterItem />
        <FilterItem />

        </div>
        <DayCard/>
        <DayCard/>
        <DayCard/>
      </main>
      
      <style jsx="true">{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
         

        }
      .filter_container {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
      }
      `}</style>
    </div>
  );
}

export default App;
