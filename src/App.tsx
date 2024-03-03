import React, { useState } from 'react';
import "./App.css";

import Horizontal from "./Assets/Horizontal.png";
import Vertical from "./Assets/Vertical.png";
import { EquationGenerator } from "./form-components/EquationGenerator";

interface ImageStyle {
    position: 'absolute';
    id: number,
    top: string;
    left: string;
}
function App(): JSX.Element {
    const generateImages = (type: string, startTop: number, startLeft: number, numImages: number, 
        topIncrement: number, leftIncrement: number, startId: number): JSX.Element[] => {
            const images: JSX.Element[] = [];
    
        let idNum = startId;

        function Hider({ children, id }: { children: React.ReactNode; id: number }): JSX.Element {
            const [hidden, setHidden] = useState<boolean>(false);
        
            const handleClick = (): void => {
                setHidden(!hidden);
            };
        
            return (
                <span onClick={handleClick}>
                    {hidden ? null : children}
                </span>
            );
        }


        for (let i = 0; i < numImages; i++) {
            const style: ImageStyle = {
                position: 'absolute',
                id: i,
                top: `${startTop + (i * topIncrement)}px`,
                left: `${startLeft + (i * leftIncrement)}px`,
            };

            images.push(
                <Hider key={`${type}-${i}`} id={idNum}>
                <img
                    key={`${type}-${i}`}
                    id={''+idNum}
                    src={type === 'horizontal' ? Horizontal : Vertical}
                    style={style}
                    alt={`${type} ${i}`}
                    className={type === 'horizontal' ? 'img' : 'images'}
                />
                </Hider>
            );


            console.log(images[i]);

            idNum++;
        }
        

        return images;
    };
    return (
        <div className="App">
            <header className="App-header" style={{color:'#AD883A', fontSize:'50px'}}>
                MATH JENGA
                <br></br>
                <div style={{fontSize:'15px'}}>Kayla Roth, Jess Manchak, Emilie Barniak</div>
            </header>
        <body style={{height:'450px'}}>
            <div>
                {generateImages('horizontal', 500, 840, 3, 20, 40, 0)}
                {generateImages('vertical', 450, 920, 3, 20, -40, 3)}
                {generateImages('horizontal', 400, 840, 3, 20, 40, 6)}
                {generateImages('vertical', 350, 920, 3, 20, -40, 9)}
                {generateImages('horizontal', 300, 840, 3, 20, 40, 12)}
                {generateImages('vertical', 250, 920, 3, 20, -40, 15)}
            </div>

            <br></br>
            <div>
                <EquationGenerator></EquationGenerator>
            </div>
        </body>
            <hr></hr>
       </div>
    );
}

export default App;