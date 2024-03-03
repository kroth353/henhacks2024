import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>("");

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    //This is the View
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Choose your answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((myChoice: string) => (
                        <option key={myChoice}>{myChoice}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Your answer is {choice == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
