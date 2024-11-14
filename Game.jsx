import React, { useState } from "react";
import "./Css/External.css"
const Game = () => {
    const [userInput, setUserInput] = useState("")
    const [computerResult, setComputerInput] = useState("")
    const [result, setResult] = useState(null)
    const [draw, setDraw] = useState(0)
    const [userPoint, setUserPoint] = useState(0)
    const [match, setMatch] = useState(0)
    const results = ["Draw", "user Win", "user Loss"];
    const handleValue = (userSelection) => {
        setMatch(match + 1)
        const variable = ["rock", "paper", "scissor"];
        const random = Math.floor(Math.random() * variable.length);
        const computerSelection = variable[random]
        setComputerInput(computerSelection) // scissor
        setUserInput(userSelection)        // rock
        let tempResult = null;
        if (computerSelection == userSelection) {
            tempResult = 0;
            setDraw(draw + 1)
        } else if (computerSelection == "rock") {
            tempResult = userSelection == "paper" ? 1 : 2;
        } else if (computerSelection == "paper") {
            tempResult = userSelection == "scissor" ? 1 : 2;
        } else if (computerSelection == "scissor") {
            tempResult = userSelection == "rock" ? 1 : 2
        }
        if (tempResult === 1) {
            setUserPoint(userPoint + 1);
        }
        setResult(tempResult);
    }
    const reset = () => {
        setUserInput("");
        setComputerInput("");
        setResult("");

        setDraw(0);
        setUserPoint(0);
        setMatch(0)
    }
    const product={
        productName:"i-phone",
        productId:454,
        productRank:1,
        productAccessories:["earphone","charger","cable"]


    }
    return (
        <>
            <div className="main">
                <div className="header">
                    <h1>computer result:-{computerResult}</h1>
                </div>
                <div className="body">
                    <h1>result={results[result]}</h1>
                </div>
                <h1>User selection:-{userInput}</h1>
                <div className="footer">
                    <button className={userInput == "rock" ? "select-btn" : "btn"} id="Rock" onClick={() => { handleValue("rock") }}>Rock</button>
                    <button className={userInput == "paper" ? "select-btn" : "btn"} id="paper" onClick={() => { handleValue("paper") }}>Paper</button>
                    <button className={userInput == "scissor" ? "select-btn" : "btn"} id="scissor" onClick={() => { handleValue("scissor") }}>Scissor</button>
                </div>
                <h1>Total matches: {match}</h1>
                <h1>User Points: {userPoint}</h1>
                <h1>Draw Matches: {draw}</h1>
                <h1>Computer Points: {match - draw - userPoint}</h1>
                <button onClick={() => { reset() }}>Reset</button>
            </div>
        </>
    );
}
export default Game;