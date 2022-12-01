import BoardTurn from "./BoardTurn";
import BoardButtons from "./BoardButtons";
import Score from "../components/Score";

const Board = () => {
    return (
        <>
            <main className="board">
                <section className="players">
                    <div className="playerDiv">
                        <span className="spanPlayer">Player</span>
                        <span className="spanMachine">Machine</span>
                    </div>
                    <div className="boxPlayerDiv">
                        <BoardTurn/>
                    </div>
                </section>
                <section className="buttons">
                    <div className="buttonsDiv">
                        <BoardButtons/>
                    </div>
                </section>
                <button className="score">
                    <Score/>
                </button>
            </main>
        </>
    )
}

export default Board;