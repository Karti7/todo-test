import React,{ useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoHome from './pages/TodoHome'

function App() {

  return (
    <div className="App">
      <div className="bg-dark text-white">
        <h1>Todo Test</h1>
      </div>
        <TodoHome/>
    </div>
  );
}

export default App;
