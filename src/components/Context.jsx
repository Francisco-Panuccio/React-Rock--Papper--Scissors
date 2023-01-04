import Rock from "../iconos/rock.svg";
import Papper from "../iconos/papper.svg";
import Scissor from "../iconos/scissor.svg";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [loading, setLoading] = useState(0);
    const [player , setPlayer] = useState();
    const [machine, setMachine] = useState();
    const [popUp, setPopUp] = useState();
    const [score, setScore] = useState(0);
    const [scoreValue, setScoreValue] = useState(
        {gamerPlayer: 0,
        gamerMachine: 0}
    );

    class Elements {
        constructor(value, img) {
            this.value = value;
            this.img = img;
        }
    }

    const rock = new Elements("R", Rock);
    const papper = new Elements("P", Papper);
    const scissor = new Elements("S", Scissor);

    const randomNumber = () => {
        const number = parseInt(Math.random()*3);
        if(number === 0) {
            setMachine(rock);
        }
        else if (number === 1) {
            setMachine(papper);
        }
        else if (number === 2) {
            setMachine(scissor);
        } else {
            return console.log("Error no hay número random");
        }
    }

    const Winner = {
        "P-R":"P",
        "R-S":"R",
        "S-P":"S",
    }

    const whoWon = (playerValue, machineValue) => {
        if(playerValue === machineValue) return 0
        if(playerValue === Winner[playerValue + "-" + machineValue]) return 1
        return -1
    }

    const results = () => {
        const result = whoWon(player.value, machine.value)
        switch(result) {
            case 1: setPopUp(1);
                    setLoading(3);
                    setScoreValue({...scoreValue, gamerPlayer: scoreValue.gamerPlayer + 1});
            break;
            
            case 0: setPopUp(0);
                    setLoading(4);
            break;

            case -1: setPopUp(-1);
                    setLoading(5);
                    setScoreValue({...scoreValue, gamerMachine: scoreValue.gamerMachine + 1});
            break;
        }
    }

    function choice(hand) {
        setPopUp();
        setLoading(1);
        setPlayer(hand);
        setTimeout(() => {
            randomNumber();
            setLoading(2);
        },1700)
    }
    
    function scoreShow() {
        setScore(1);
    }

    function scoreBreak() {
        setScore(0);
    }

    useEffect(() => {
        if(loading === 2 && player) {
            results();
        }
    }, [loading])

    return (
        <>
            <Context.Provider value={{ choice, scoreShow, scoreBreak, score, scoreValue, popUp, loading, player, machine, rock, papper, scissor }}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider;