import { Context } from "./Context";
import { useContext } from "react";
import ScoreDiv from "./ScoreDiv";

const Score = () => {
    const { scoreShow, scoreBreak, score} = useContext(Context);

    return (
        <>
            {
                score === 0 ? <div className="scoreD"><button className="score" onClick={() => scoreShow()}><span>SCORE</span></button></div>
                : <><div className="scoreD2"><button className="score2" onClick={() => scoreBreak()}><ScoreDiv/></button></div></>
            }
        </>
    )
}

export default Score;