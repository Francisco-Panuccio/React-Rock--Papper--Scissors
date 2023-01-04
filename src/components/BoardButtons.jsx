import { Context } from "./Context";
import { useContext } from "react";

const BoardButtons = () => {
    const { choice, loading, rock, papper, scissor } = useContext(Context);

    return (
        <>
            <button className="btn" onClick={() => choice(rock)} disabled={loading === 1}><img src={rock.img} /></button>
            <button className="btn" onClick={() => choice(papper)} disabled={loading === 1}><img src={papper.img} /></button>
            <button className="btn" onClick={() => choice(scissor)} disabled={loading === 1}><img src={scissor.img} /></button>
        </>
    )
}

export default BoardButtons;