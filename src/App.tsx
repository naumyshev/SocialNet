import React from 'react';
import './App.css';
import logo from './pic/logo512.png'
import lake from './pic/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src={logo} alt="logo"/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src={lake} alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
