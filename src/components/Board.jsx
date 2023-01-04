import BoardTurn from "./BoardTurn";
import BoardButtons from "./BoardButtons";
import Score from "../components/Score";

const Board = () => {
    return (
        <>
            <main className="board">
                <section className="players">
                    <div className="playerDiv">
                        <span className="spanPlayer">player</span>
                        <span className="spanMachine">machine</span>
                    </div>
                    <div className="boxPlayerDiv">
                        <span className="especialS">player</span>
                        <BoardTurn/>
                        <span className="especialS">machine</span>
                    </div>
                </section>
                <section className="buttons">
                    <div className="buttonsDiv">
                        <BoardButtons/>
                    </div>
                </section>
                <Score/>
            </main>
        </>
    )
}

export default Board;