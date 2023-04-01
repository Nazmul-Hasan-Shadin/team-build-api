import React, {useEffect,useState} from 'react';

import './App.css';
import User from './components/User';

function App() {

  const [users,setUsers]= useState([]);
  const [team,setTeam]= useState([]);

  useEffect(()=>{
  fetch('https://randomuser.me/api/?results=15')
  .then(res=>res.json())
  .then(data=> setUsers(data.results))
}, []);

const addMember=(name)=>{
  setTeam([...team ,name])

}

  return (
    <div className="App">

   <h1> team Builder</h1>
   {
       team.map((m,index)=> <li key={index}>{m.name}</li>)
   }
   {
    users.map(user=> <User user={user} addMember={addMember}></User>)
   }
  



    </div>
  );
}

export default App;
