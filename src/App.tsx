import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ProfilePageType, RootStateType, StoreType} from "./redux/store";
import {DialogActionType} from "./redux/dialogs-reducer";
import {ProfileActionType} from "./redux/profile-reducer";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ProfileActionType | DialogActionType) => void
    store: StoreType
}

function App(props: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={()=>
                        <Dialogs
                            store={props.store}
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path='/profile' render={()=>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/news' render={()=><News />}/>
                    <Route path='/music' render={()=><Music />}/>
                    <Route path='/settings' render={()=><Settings />}/>
                </div>
            </div>
    );
}

export default App;
