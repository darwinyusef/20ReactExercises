import { useEffect, useState } from 'react';
import './board.css';
import lv1 from './datas/lv1.json';


const BoardGame = () => {
    const [element, setElements] = useState([]);
    const board = lv1;

    let handleClick = (e) => {
        e.preventDefault();
        const item = e.target.dataset.title
        if (element[0] != "") {
            setElements([item, ""])
        } else if (element[""] != "") {
            setElements([...element, item])
        }

        console.log(element);
    }
    return (
        <div className='board'>
            <section className='initName'>
                {
                    board.map((res, index) => {
                        return (
                            <div className="cell" data-id={res.id} data-title={res.title} key={index} style={{ 'order': res.order }} onClick={handleClick}>
                                <span className='content'>
                                    {res.title}
                                </span>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default BoardGame