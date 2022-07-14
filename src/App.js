import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react';
import Home from './Home';

export const courseContext = createContext();

function App() {
  const [course, setCourse] = useState('React JS');
  return (
    <courseContext.Provider value={course}>
      <div className='App'>
        <h1>Courses for you</h1>
        <div className='select-title'>
          <p>Select your favourite course</p>
          <select
            name='cars'
            id='cars'
            style={{ height: '30px' }}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value='React JS'>React JS</option>
            <option value='Node JS'>Node JS</option>
            <option value='Vue JS'>Vue JS</option>
            <option value='Next JS'>Next JS</option>
          </select>
        </div>
        <Home />
      </div>
    </courseContext.Provider>
  );
}

export default App;
