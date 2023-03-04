import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import NewFlashCard from './components/FlashCard/NewFlashCard';
import FlashCards from './components/FlashCard/FlashCards';

import classes from './App.module.css';

const App = () => {
  const [showCards, setShowCards] = useState(true);

  const newCardHandler: React.MouseEventHandler<HTMLElement> = () => {
    setShowCards(previousState => !previousState);
  }

  return (
    <div className={classes.App}>
      <Navbar onAddCard={newCardHandler}/>
      <br />
      {showCards ? <FlashCards /> : <NewFlashCard onAddCard={newCardHandler}/>}
    </div>
  );
}

export default App;
