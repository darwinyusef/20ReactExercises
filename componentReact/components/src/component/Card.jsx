import React from 'react'
import './card.css'

export const Card = ({ imge, title, time, pointer, price }) => {
    return (
        <>
            <div className="card">
                <div className="top">
                    <p className="heart">❤</p>
                    <img src={imge} alt="Ensalada de aguacate" />
                </div>
                <div className="bottom">
                    <h1>{title}</h1>
                    <section className="midbloque">
                        <p>
                            <span>{time}</span>min
                        </p>
                        <p>
                            <span>★</span>
                            <span>{pointer}</span>
                        </p>
                    </section>
                    <p className="price">$ {price}</p>

                </div>
            </div>
        </>
    )
}
