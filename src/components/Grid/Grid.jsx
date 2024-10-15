import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from '../../helper/checkWinner';
import sound from '../../audio/turnAudio.mp3';

function Grid({cells}) {
    const [board, setBoard] = useState(Array(cells).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const turnsound = new Audio(sound);

    function play(index) {
        if(turn === true) {
            board[index] = 'O';
        }
        else if(turn === false) {
            board[index] = 'X';
        }
        turnsound.play();
        const win = isWinner(board, (turn)?'O':'X');
        if(win) {
            setWinner(win);
        }
        setTurn(!turn);
        setBoard([...board]);
    }

    function reset() {
        setWinner(null);
        setTurn(true);
        setBoard(Array(cells).fill(""));
    }

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner} </h1>
                        <button className="reset" onClick={()=> reset()}>Reset Game</button>
                    </>
                )
            }
            <div className="turn-highlight">Current Turn: {(turn)? 'O' : 'X'} </div>
            <div className="grid">
                {board.map((ele, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={ele} index={idx} /> )}
            </div>
        </div>
    )
}

export default Grid;