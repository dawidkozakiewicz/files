import React from 'react';

const Navigation = (props) => {
    return (
        <div className="nav">
            <button onClick={() => props.newGameHandler()}>NOWA GRA</button>
            <button onClick={() => props.restartNewGame()}>RESTART</button>
            <button onClick={() => props.solveSudoku()}>ROZWIĄZANIE</button>
            <button onClick={() => props.checkSudoku()}>SPRAWDŹ</button>
            {
                props.error ? <div><p className="error-msg">{props.error}</p></div> : null
            }
            {
                props.newGameClicked ? 
                <div>
                    <h1>POZIOM TRUDNOŚCI:</h1>
                    <button onClick={(e) => props.startNewGame(e.target.textContent)}>1</button>
                    <button onClick={(e) => props.startNewGame(e.target.textContent)}>2</button>
                    <button onClick={(e) => props.startNewGame(e.target.textContent)}>3</button>
                    <button onClick={(e) => props.startNewGame(e.target.textContent)}>4</button>
                    <button onClick={(e) => props.startNewGame(e.target.textContent)}>5</button>
                    <button onClick={(e) => props.startNewGame(e.target.textContent)}>6</button>
                </div> : null
            }
        </div>
    )
}

export default Navigation;