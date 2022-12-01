import Rock from "../iconos/rock.svg";
import Papper from "../iconos/papper.svg";
import Scissor from "../iconos/scissor.svg";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [loading, setLoading] = useState(0);
    const [player , setPlayer] = useState([]);
    const [machine, setMachine] = useState([]);

    class Element{
        constructor(id, img, win, lose, tie) {
            this.id = id;
            this.img = img;
            this.win = win;
            this.lose = lose;
            this.tie = tie;
        }
    }

    const rock = new Element(0, Rock, "scissor", "papper", "rock");
    const papper = new Element(0, Papper, "rock", "scissor", "papper");
    const scissor = new Element(0, Scissor, "papper", "rock", "scissor");

    const randomNumber = () => {
        const number = parseInt(Math.random()*3);
        if(number === 0) {
            setMachine(rock.img);
        }
        else if (number === 1) {
            setMachine(papper.img);
        }
        else if (number === 2) {
            setMachine(scissor.img);
        } else {
            return console.log("Error");
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

    return (
        <>
            <Context.Provider value={{ choice, loading, player, machine }}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider;