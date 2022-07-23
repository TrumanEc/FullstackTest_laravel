import { useEffect, useState } from "react";
import s from "./App.module.css";
import Ficha from "./Ficha";

function App() {
    const [turno, setTurno] = useState("red");
    const [ganador, setGanador] = useState("");
    const [fichas, setFichas] = useState(Array(16).fill("white"));
    const [marcador, setmarcador] = useState({ p1: 0, p2: 0 });

    useEffect(() => {
        verificar(fichas);
    }, [fichas]);

    const verificar = (tablero) => {
        let combos = {
            horizontales: [
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
                [12, 13, 14, 15],
            ],
            verticales: [
                [0, 4, 8, 12],
                [1, 5, 9, 13],
                [2, 6, 10, 14],
                [3, 7, 11, 15],
            ],
            diagonales: [
                [0, 5, 10, 15],
                [3, 6, 9, 12],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((jugada) => {
                if (
                    tablero[jugada[0]] === "white" ||
                    tablero[jugada[1]] === "white" ||
                    tablero[jugada[2]] === "white" ||
                    tablero[jugada[3]] === "white"
                ) {
                    // no hay juego
                } else if (
                    tablero[jugada[0]] === tablero[jugada[1]] &&
                    tablero[jugada[1]] === tablero[jugada[2]] &&
                    tablero[jugada[2]] === tablero[jugada[3]]
                ) {
                    setGanador(tablero[jugada[0]]);
                    alert(`el ganador es ${tablero[jugada[0]]}`);
                    tablero[jugada[0]] === "red"
                        ? setmarcador({ ...marcador, p1: marcador.p1 + 1 })
                        : setmarcador({ ...marcador, p2: marcador.p2 + 1 });
                    setFichas(Array(16).fill("white"));
                }
            });
        }
    };
    const handleClick = (num) => {
        ganador && setGanador("");
        const newTurno = turno === "red" ? "yellow" : "red";
        let mov = [...fichas];
        if (mov[num] === "white") {
            setTurno(newTurno);
            mov[num] = turno;
            setFichas(mov);
        } else alert("ys esta jugado");
    };
    const reiniciar = (e) => {
        e.preventDefault();
        setFichas(Array(16).fill("white"));
        setTurno("red");
    };
    return (
        <div className={s.app}>
            <h1>{`4 en linea`}</h1>
            <div className={s.btnGroup}>
                <button onClick={reiniciar}>Reiniciar Tablero</button>
            </div>
            <section className={s.game}>
                <section>
                    <div
                        className={s.player}
                        style={
                            turno === "red"
                                ? { background: "#CB4335" }
                                : { background: "#DCDCDC" }
                        }
                    >
                        P1
                    </div>
                    <p className={s.puntos}>{`${marcador.p1} pts`}</p>
                </section>

                <table className={s.table}>
                    <tbody>
                        <tr>
                            <Ficha
                                num={0}
                                onClick={handleClick}
                                color={fichas[0]}
                            />
                            <Ficha
                                num={1}
                                onClick={handleClick}
                                color={fichas[1]}
                            />
                            <Ficha
                                num={2}
                                onClick={handleClick}
                                color={fichas[2]}
                            />
                            <Ficha
                                num={3}
                                onClick={handleClick}
                                color={fichas[3]}
                            />
                        </tr>
                        <tr>
                            <Ficha
                                num={4}
                                onClick={handleClick}
                                color={fichas[4]}
                            />
                            <Ficha
                                num={5}
                                onClick={handleClick}
                                color={fichas[5]}
                            />
                            <Ficha
                                num={6}
                                onClick={handleClick}
                                color={fichas[6]}
                            />
                            <Ficha
                                num={7}
                                onClick={handleClick}
                                color={fichas[7]}
                            />
                        </tr>
                        <tr>
                            <Ficha
                                num={8}
                                onClick={handleClick}
                                color={fichas[8]}
                            />
                            <Ficha
                                num={9}
                                onClick={handleClick}
                                color={fichas[9]}
                            />
                            <Ficha
                                num={10}
                                onClick={handleClick}
                                color={fichas[10]}
                            />
                            <Ficha
                                num={11}
                                onClick={handleClick}
                                color={fichas[11]}
                            />
                        </tr>
                        <tr>
                            <Ficha
                                num={12}
                                onClick={handleClick}
                                color={fichas[12]}
                            />
                            <Ficha
                                num={13}
                                onClick={handleClick}
                                color={fichas[13]}
                            />
                            <Ficha
                                num={14}
                                onClick={handleClick}
                                color={fichas[14]}
                            />
                            <Ficha
                                num={15}
                                onClick={handleClick}
                                color={fichas[15]}
                            />
                        </tr>
                    </tbody>
                </table>
                <div className={s.base}></div>
                <section>
                    <div
                        className={s.player}
                        style={
                            turno === "yellow"
                                ? { background: "#FFC300" }
                                : { background: "#DCDCDC" }
                        }
                    >
                        P2
                    </div>
                    <p className={s.puntos}>{`${marcador.p2} pts`}</p>
                </section>
            </section>
        </div>
    );
}

export default App;
