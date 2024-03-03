import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GradeLevelSelection({
    options
}: {
    options: string[];
}): JSX.Element {
    const [choice, setChoice] = useState<string>("");

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    //This is the View
    return (
        <div>
            <Form.Group>
                <Form.Label>Choose your Grade Level</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((myChoice: string) => (
                        <option key={myChoice}>{myChoice}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Selected: {choice}</div>
        </div>
    );
}
