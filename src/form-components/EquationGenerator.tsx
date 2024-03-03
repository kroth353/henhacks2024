import React, { useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";

export function EquationGenerator(): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [player1Points, setPlayer1Points] = useState<number>(0);
    const [player2Points, setPlayer2Points] = useState<number>(0);
    const [correctAnswerSubmittted, setCorrectAnswerSubmitted] = useState<boolean>(false);
    const [displayText, setDisplayText] = useState<string>("");
    const [blockMessage, setBlockMessage] = useState<string>("");
    const [numTries, setNumTries] = useState<number>(0);
    const [randNum1, setRandNum1] = useState<number>(getRandomNumber());
    const [randNum2, setRandNum2] = useState<number>(getRandomNumber());
    const [randOp, setRandOp] = useState<string>(getRandomOperator())
    const [correctAnswer, setCorrectAnswer] = useState<number>(randOp === "+" ? randNum1 + randNum2 : randNum1 - randNum2)
    const [currentPlayer, setCurrentPlayer] = useState<"Player 1" | "Player 2">("Player 1");

    const answerInputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>setCorrectAnswer(randOp === "+" ? randNum1 + randNum2 : randNum1 - randNum2), [randNum1, randNum2, randOp]);
    
    function getRandomNumber(): number {
        return Math.floor(Math.random() * 20) + 1;
    }
    
    function getRandomOperator(): string {
        return Math.random() < 0.5 ? "+" : "-";
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function checkAnswer() {
        if(!correctAnswerSubmittted){
            if (parseInt(answer) === correctAnswer) {
                 if(numTries === 0){
                    if(currentPlayer === "Player 1"){
                        setPlayer1Points(player1Points + 1);
                        setNumTries(1);
                        setBlockMessage(`${currentPlayer}: Remove 1 block`);
                    }else{
                        setPlayer2Points(player2Points + 1);
                        setNumTries(1);
                        setBlockMessage(`${currentPlayer}: Remove 1 block`);
                    }
                 }else{
                    setBlockMessage("");
                 }
                setCurrentPlayer(currentPlayer === "Player 1" ? "Player 2" : "Player 1");
                setCorrectAnswerSubmitted(true);
                setDisplayText("");
                setNumTries(0);
                setRandNum1(getRandomNumber());
                setRandNum2(getRandomNumber());
                setRandOp(getRandomOperator());
            }else{
                if(numTries >= 1){
                    setBlockMessage(`${currentPlayer}: Remove 2 blocks`);
                }else{
                    setBlockMessage(`${currentPlayer}: Remove 2 blocks`);
                }
                setDisplayText("Try Again!");
                setNumTries(numTries + 1);
            }
            setAnswer("");
                if(answerInputRef.current){
                    answerInputRef.current.value = "";
                }
            setCorrectAnswerSubmitted(false);
        }
    }

    return (
        <div style={{fontSize:'20px', width:'800px', position:'absolute'}}>
            <h3 style={{color:'#AD883A', alignContent:'center'}}>Solve the equation!</h3>
            <div>{randNum1 + " "}{randOp + " "}{randNum2}</div>
            <Form.Group controlId="checkAnswer">
                <Form.Control ref={answerInputRef} onChange={updateAnswer} style={{ width: '200px', margin: '0 auto' }}/>
            </Form.Group>
            <br></br>
            <Button onClick={checkAnswer} disabled={correctAnswerSubmittted} style={{backgroundColor: "#afc5a1", borderBlockColor:"#afc5a1", color:'black'}}>Click to Check Answer</Button>
            
            <div>{displayText}</div>
            <div> {"Number of Tries for "} {currentPlayer + ":"} {numTries === 0 ? " " : numTries}</div>
            <div> <span style={currentPlayer === "Player 1" ? {
                                    backgroundColor: "#afc5a1"
                                } :{}}>Player 1 Points:</span> {player1Points}</div>
            <div> <span style={currentPlayer === "Player 2" ? {
                                    backgroundColor: "#afc5a1"
                                } :{}}>Player 2 Points:</span> {player2Points}</div>
            <div >{blockMessage}</div>
        </div>
    );
}
