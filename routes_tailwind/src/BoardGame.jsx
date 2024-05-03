import { useState } from 'react';
import './board.css';
import lv1 from './datas/lv1.json';


const BoardGame = () => {
    const board = [...lv1];
    const [element, setElements] = useState(board);
    const [closeBtn, setCloseBtn] = useState(['none', '']);

    let handleClick = (event, index) => {
        event.preventDefault();
        if (element[index]['status'] == "close") {
            element[index]['status'] = "open";
            setElements([...element])
        }

        let val = validateRelation(element);
        if (val != null) {
            setElements([...val])
        }
    }

    let validateRelation = (el) => {
        let info = el.filter((r) => {
            return r.status == "open"
        });
        if (info.length == 2) {
            if (info[1]['title']) {

                if (info[0]['title'] == info[1]['title']) {
                    setCloseBtn(['flex', info[0]['descript']]);
                    setTimeout(() => {
                        setCloseBtn(['none', '']);
                    }, 6000);
                    return reset(el, true);
                } else {
                    setTimeout(() => {
                        reset(el, false);
                    }, 2000);
                }
            }
        } else {
            return null
        }
    }

    let reset = (el, type) => {
        const fin = [];
        if (type) {
            el.map((r) => {
                if (r.status == "open") {
                    r.status = "win";
                    fin.push(r)
                } else {
                    fin.push(r)
                }
            })
        } else {
            el.map((r) => {
                if (r.status == "open") {
                    r.status = "close";
                    fin.push(r)
                } else {
                    fin.push(r)
                }
            })
        }

        return fin;
    }

    let close = () => {
        setCloseBtn(['none', '']);
    }

    let gameReset = () => {
        const fin = [];
        element.map((r) => {
            if (r.status == "open" || r.status == "win" || r.status == "close") {
                r.status = "close";
                fin.push(r)
            }
        })
        setElements([...fin])
    }

    return (
        <>
            <div className='board'>
                <section className='initName'>
                    {
                        element.map((res, index) => {
                            return (
                                <div className={`cell ${(res.status == 'open') ? 'open' : ""} ${(res.status == 'win') ? "win" : ""} ${(res.status == "close") ? "close" : ""}`} key={index} style={{ 'order': res.order }} onClick={(event) => handleClick(event, index)}>
                                    <span className='content'>
                                        {res.title}
                                    </span>
                                </div>
                            )
                        })
                    }
                </section>

                <div className="ms" style={{ display: closeBtn[0] }}>
                    <p>{closeBtn[1]}</p>
                    <span onClick={close}>x</span>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <button onClick={gameReset} className='w-36 bg-red-700 text-white font-bold rounded-lg mb-7'> Resetear </button>
            </div>
        </>
    )
}

export default BoardGame