import Rock from "../iconos/rock.svg";
import Papper from "../iconos/papper.svg";
import Scissor from "../iconos/scissor.svg";
import { Context } from "./Context";
import { useContext } from "react";

const BoardButtons = () => {
    const { choice, loading, rock, papper, scissor } = useContext(Context);

    return (
        <>
            <button className="btn" onClick={() => choice(rock)} disabled={loading === 1}><img src={Rock} /></button>
            <button className="btn" onClick={() => choice(papper)} disabled={loading === 1}><img src={Papper} /></button>
            <button className="btn" onClick={() => choice(scissor)} disabled={loading === 1}><img src={Scissor} /></button>
        </>
    )
}

export default BoardButtons;