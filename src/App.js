import React from "react";
import Navbar from "./Component/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {createStore} from "redux";
import Home from "./Component/Home.jsx";
import CreateNotes from "./Component/CreateNotes.jsx";
import Notes from "./Component/Notes.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<CreateNotes />} />
      </Routes>
    </Router>
  );
}

export default App;

// //Redux Manager
// function testStore(state=[{"name":"Amit"}],action)
// {
//  switch(action.type)
//  {
//    case "view":
//      {
//        return state.name;
//      }
//      default:
//        {
//          return state;
//        }
//  }
// }
// // Store
// const store =createStore(testStore,["reudx"]);
// //Operations
// store.dispatch();
