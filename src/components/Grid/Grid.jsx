import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';

function Grid({cells}) {
    const [board, setBoard] = useState(Array(cells).fill(""));

    return (
        <div className="grid">
            {board.map((ele, idx) => <Card key={idx} /> )}
        </div>
    )
}

export default Grid;