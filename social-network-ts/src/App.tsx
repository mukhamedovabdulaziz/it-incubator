import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import state, {addPost, stateType, updateNewPost} from "./redux/state";

// type AppsType = {
//   state: stateType
//   addPost: (addPost:string) => void;
// }

function App() {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={state.profilePage.posts}
                                                     newPostText={state.profilePage.newPostText}
                                                     addPost={addPost}
                                                     updateNewPost={updateNewPost}
            />}/>
            <Route path="/dialogs" element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                     messages={state.dialogsPage.messages}/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
