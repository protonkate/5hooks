import { useEffect, useState } from 'react';
import './App.css';
import useLocalStorage from './LocalStorageHook/useLocalStorage';
import ToggleComponent from './ToggleComponent/ToggleComponent';
import TimeoutComponent from './useTimeout/TimeoutComponent';
import DebounceComponent from './DebounceHook/DebounceComponent';
import UseArrayComponent from './useArray/UseArrayComponent';


function App() {
  const [name, setName] = useLocalStorage('name', 'start');

  useEffect(() => console.log(name));

  return (
    <> 
      <h2>Toggle Hook</h2>
      <ToggleComponent/>
      <hr/>
      <h2>Timeout Hook</h2>
      <TimeoutComponent/>
      <hr/>
      {/* <h2>Local Storage Hook</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}/>*/}
      <h2>Debounce Hook</h2> 
      <DebounceComponent/>
      <hr/> 
      <h2>Use Array Component</h2> 
      <UseArrayComponent/>
    </>
  );
}

export default App;
