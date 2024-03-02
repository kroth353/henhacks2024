import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [attemptsEntered, setAttemptsEntered] = useState<number>(0);

    function addAttempt() {
        setNumAttempts(numAttempts + attemptsEntered);
    }

    function useAttempt() {
        setNumAttempts(numAttempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button onClick={useAttempt} disabled={numAttempts == 0}>
                Use
            </Button>
            <Button onClick={addAttempt}> Gain </Button>
            <Form.Control
                type="number"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAttemptsEntered(parseInt(event.target.value))
                }
            />
            <div>Number of Attempts Left: {numAttempts}</div>
        </div>
    );
}
