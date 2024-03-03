import react from 'react';
import "./App.css";

import Horizontal from "./Assets/Horizontal.png";
import Vertical from "./Assets/Vertical.png";
import { EquationGenerator } from "./form-components/EquationGenerator";


function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jenga
            </header>
            <div>
            <body>
                        <img src={Horizontal} style={{ position: 'absolute', top: '300px', left: '80px' }} alt="Horizontal" className="img"></img>
                        <img src={Horizontal} style={{ position: 'absolute', top: '320px', left: '120px' }} alt="Horizontal" className="img"></img>
                        <img src={Horizontal} style={{ position: 'absolute', top: '340px', left: '160px' }} alt="Horizontal" className="img"></img>

                        <img src={Vertical} style={{ position: 'absolute', top: '250px', left: '120px' }} alt="Horizontal" className="images"></img>
                        <img src={Vertical} style={{ position: 'absolute', top: '270px', left: '80px' }} alt="Horizontal" className="images"></img>
                        <img src={Vertical} style={{ position: 'absolute', top: '290px', left: '40px' }} alt="Horizontal" className="images"></img>

                        <img src={Horizontal} style={{ position: 'absolute', top: '200px', left: '80px' }} alt="Horizontal" className="images"></img>
                        <img src={Horizontal} style={{ position: 'absolute', top: '220px', left: '120px' }} alt="Horizontal" className="images"></img>
                        <img src={Horizontal} style={{ position: 'absolute', top: '240px', left: '160px' }} alt="Horizontal" className="images"></img>
                </body>
            </div>
            <hr></hr>
            <EquationGenerator></EquationGenerator>
       </div>
    );
}

export default App;
