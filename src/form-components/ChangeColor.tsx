import React, { useState } from "react";
import { Form } from "react-bootstrap";

const myColors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];
const default_color = myColors[0];

export function ChangeColor(): JSX.Element {
    //This is the State (Model)
    const [chosenColor, setColor] = useState<string>(default_color);

    //This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    //This is the View
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {myColors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="colors"
                        label={
                            <span
                                style={{
                                    backgroundColor: color
                                }}
                            >
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosenColor == color}
                    />
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}
                    </span>
                    .
                </div>
            </div>
        </div>
    );
}
