import React, { useState } from 'react';
import "./App.css";

import Horizontal from "./Assets/Horizontal.png";
import Vertical from "./Assets/Vertical.png";


function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jenga
            </header>
        </div>
            <body>
            <img src={Horizontal} style={{ position: 'absolute', top: '25px', left: '60px' }}alt="Horizontal" className="img" ></img>
            <img src={Horizontal} style={{ position: 'absolute', top: '35px', left: '80px' }}alt="Horizontal" className="img"></img>
            <img src={Horizontal} style={{ position: 'absolute', top: '45px', left: '100px' }}alt="Horizontal" className="img"></img>
            
            <img src={Vertical} style={{ position: 'absolute', top: '0px', left: '80px' }}alt="Horizontal" className="images"></img>
            <img src={Vertical} style={{ position: 'absolute', top: '10px', left: '60px' }}alt="Horizontal" className="images"></img>
            <img src={Vertical} style={{ position: 'absolute', top: '20px', left: '40px' }}alt="Horizontal" className="images"></img>
       
            <img src={Horizontal} style={{ position: 'absolute', top: '-25px', left: '60px' }}alt="Horizontal" className="images"></img>
            <img src={Horizontal} style={{ position: 'absolute', top: '-15px', left: '80px' }}alt="Horizontal" className="images"></img>
            <img src={Horizontal} style={{ position: 'absolute', top: '-5px', left: '100px' }}alt="Horizontal" className="images"></img>
            </body>
       </div>
    );
}

export default App;
