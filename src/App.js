import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterItem from './components/FilterItem';
import DayCard from './components/DayCard';
import {Users} from "./constant"
import { useState, useEffect } from 'react';
import Table from './Table';
import axios from 'axios';
import {ALL_TRANSCATIONS} from "./constant"





//Component = SearchBar, filters, dayCard 

function App()
{
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  
  // const filteredUserByName = ALL_TRANSCATIONS.filter(item =>
  // {
  //   const trx = item.Transactions
  //   const response = trx.filter(t => t.receiver.toLowerCase().includes(query))
  //   setData(response)
  // })
  // const keys = ["first_name", "last_name", "email"]
  // const search = data =>
  // {
  //   return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))
  // }
  // useEffect(() =>
  // {
  //   filteredUserByName()
  
    
  // }, [])
  return (
    <div className="App">
      {/* <input
        type="text"
        placeholder='Search.. '
        className='search'
        onChange={e=> setQuery(e.target.value)}
      />
      <Table data={data}/> */}
      {/* <ul className='list'>
        {
          filteredUserByFirstName.map(user => (
            <li key={user.id} className='listItem'>{ user.first_name}</li>
          ))
        }
        

      </ul> */}
      <main className='container'>
      <h1>Welcome to helicarrier</h1>
        {/* <SearchBar /> */}
        <input
        type="text"
        placeholder='Search.. '
        className='search'
        onChange={e=> setQuery(e.target.value)}
      />
      <div className='filter_container'>
        <FilterItem />
        <FilterItem />
        <FilterItem />

        </div>
        {
          ALL_TRANSCATIONS.map(trx => <DayCard key={trx.id} date={ trx.date} Transactions={trx.Transactions} />)
        }
        
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
