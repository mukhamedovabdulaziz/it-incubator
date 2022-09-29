import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        APP HELLO
        <Routes>
          <Route path={"hello"} element={<HelloMessage message={"Hello samurai"}/>}/>
          <Route path={"bye"} element={<ByeMessage message={"Bye samurai"}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

type MessageType = {
  message: string
}

function HelloMessage(props: MessageType) {
  return (
    <h1>{props.message}</h1>
  );
}

const ByeMessage: React.FC<MessageType> = (props) => {
  return (
    <h1>{props.message}</h1>
  );
}

export default App;
