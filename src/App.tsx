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
    const generateImages = (type: string, startTop: number, startLeft: number, numImages: number, topIncrement: number, leftIncrement: number, startId: number) => {
        const images = [];
        let idNum = startId;

        for (let i = 0; i < numImages; i++) {
            const style: ImageStyle = {
                position: 'absolute',
                id: i,
                top: `${startTop + (i * topIncrement)}px`,
                left: `${startLeft + (i * leftIncrement)}px`
            };

            images.push(
                <img
                    key={`${type}-${i}`}
                    id={''+idNum}
                    src={type === 'horizontal' ? Horizontal : Vertical}
                    style={style}
                    alt={`${type} ${i}`}
                    className={type === 'horizontal' ? 'img' : 'images'}
                />
            );

            console.log(images[i]);

            idNum++;
        }
        

        return images;
    };
    return (
        <div className="App">
            <header className="App-header">
                Jenga
            </header>
        <body>
        {generateImages('horizontal', 300, 80, 3, 20, 40, 0)}
        {generateImages('vertical', 250, 120, 3, 20, -40, 3)}
        {generateImages('horizontal', 200, 80, 3, 20, 40, 6)}
        {generateImages('vertical', 150, 120, 3, 20, -40, 9)}
        {generateImages('horizontal', 100, 80, 3, 20, 40, 12)}
        {generateImages('vertical', 50, 120, 3, 20, -40, 15)}
            </body>
            <hr></hr>
            <EquationGenerator></EquationGenerator>
       </div>
    );
}

export default App;