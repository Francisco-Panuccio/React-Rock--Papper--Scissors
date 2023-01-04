import { Context } from "./Context";
import { useContext } from "react";

const ScoreDiv = () => {
    const { scoreValue } = useContext(Context);

    return(
        <>
            <div className="scoreDiv">
                <div className="scoreDiv1">
                    <div className="scoreP">Player</div>
                    <div className="scoreSum">{scoreValue.gamerPlayer}</div>
                </div>
                <div className="scoreDiv2">
                    <div className="scoreM">Machine</div>
                    <div className="scoreSum">{scoreValue.gamerMachine}</div>
                </div>
            </div>
        </>
    )
}

export default ScoreDiv;