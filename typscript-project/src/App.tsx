import React from 'react';
import './App.css';
import Guest from './state/Guest';
//import UserSearch from './state/UserSearch';
import UserSearch from './classes/UserSearch';
const users=[
  {name:'Sarah',age:20},
  {name:'Alex',age:20},
  {name:'Michael',age:20},]
function App() {
  return (
    <div >
      <UserSearch users={users} />
      {/* <UserSearch />
      <Guest /> */}
    </div>
  );
}

export default App;
