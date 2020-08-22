import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Friki.dotabuff.com%2Ft%2Fl%2F18Oax7Qo5Mb.png&imgrefurl=https%3A%2F%2Fru.dotabuff.com%2Fesports%2Fteams%2F6302488-ayaya-hyperclap&tbnid=PIbDWvCRhaWL6M&vet=12ahUKEwiz_8aUra7rAhXZXZoKHTobDj0QMygJegUIARDGAQ..i&docid=_IsMzOwAOH4lOM&w=250&h=150&q=ayaya&ved=2ahUKEwiz_8aUra7rAhXZXZoKHTobDj0QMygJegUIARDGAQ' />
      </header>
      <nav className='nav'>
        <div>
          Profile
       </div>
        <div>Messages</div>
      </nav>
      <div className='content'>Content</div>
    </div>
  );
}

export default App;
