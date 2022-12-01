import Rock from "../iconos/rock.svg";
import Papper from "../iconos/papper.svg";
import Scissor from "../iconos/scissor.svg";
import { Context } from "./Context";
import { useContext } from "react";

const BoardButtons = () => {
    const { choice } = useContext(Context);

    return (
        <>
            <button onClick={() => choice(Rock)}><img src={Rock} /></button>
            <button onClick={() => choice(Papper)}><img src={Papper} /></button>
            <button onClick={() => choice(Scissor)}><img src={Scissor} /></button>
        </>
    )
}

export default BoardButtons;