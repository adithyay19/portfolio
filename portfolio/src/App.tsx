// import './App.css';
import { useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';


function ModeToggler() {
  const { mode, setMode } = useColorScheme();

  return (
    <>
      
      <Button
        variant = "outlined"
        color = "neutral"
        onClick={() => setMode(mode === 'dark'? 'light' : 'dark')}
      >
        {mode === 'dark'? 'Light mode' : 'Dark mode'}
      </Button>
    </>
  );
}

function App() {
  return(
    <h1>Personal Portfolio</h1>
  )

}

export default App
