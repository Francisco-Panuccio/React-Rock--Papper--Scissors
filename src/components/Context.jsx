import Rock from "../iconos/rock.svg";
import Papper from "../iconos/papper.svg";
import Scissor from "../iconos/scissor.svg";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [loading, setLoading] = useState(0);
    const [player , setPlayer] = useState([]);
    const [machine, setMachine] = useState([]);

    const randomNumber = () => {
        const number = parseInt(Math.random()*3);
        if(number === 0) {
            setMachine(Rock);
        }
        else if (number === 1) {
            setMachine(Papper);
        }
        else if (number === 2) {
            setMachine(Scissor);
        } else {
            return console.log("Error");
        }
    }

    function results() {
        if(player === Rock && machine === Scissor) {
            alert("Ganaste");
        }
        else if(player === Rock && machine === Papper) {
            alert("Perdiste");
        }
        else if(player === Rock && machine === Rock) {
            alert("Empataste");
        }
    }

    function choice(hand) {
        setLoading(1);
        setPlayer(hand);
        setTimeout(() => {
            randomNumber();
            setLoading(2);
        },1700)
    }

    console.log(player);
    console.log(machine);

    return (
        <>
            <Context.Provider value={{ choice, loading, player, machine }}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider;