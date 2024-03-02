import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [canEdit, setCanEdit] = useState<boolean>(false);

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    label={"I can edit = " + canEdit}
                    checked={canEdit}
                    onChange={() => setCanEdit(!canEdit)}
                />
            </div>
            <div>
                {canEdit ? (
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control onChange={updateUserName} />
                        <Form.Check
                            type="checkbox"
                            id="check-isStudent"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {userName + " "}
                        {isStudent ? " is a student" : " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
