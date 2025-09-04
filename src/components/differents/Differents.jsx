import React from 'react'
import "./differents.scss"
import { MdArrowOutward } from 'react-icons/md'

import img1 from "../../assets/images/differ1.jpg"
import img2 from "../../assets/images/differ2.jpg"

const Differents = () => {
    return (
        <div className='differents container'>
            <div className="differents__left">
                <h1 className="differents__left-title">Что делает Valesco особенным</h1>
                <p className="differents__left-text">Самым большим преимуществом SK Valesco является то, что в нем используется лучшее в мире базовое масло группы III — YUBASE.</p>
                <p className="differents__left-desc"><span>YUBASE</span> — это собственный бренд базового масла SK Enmove, который занимает более 40% на мировом рынке базовых масел премиум-класса группы III.</p>
                <button className='differents__left-btn'>Узнать больше<MdArrowOutward /></button>
            </div>
            <div className="differents__right">
                <img className='differents__right-topImg' src={img1} alt="different img-top" />
                <img className='differents__right-bottomImg' src={img2} alt="different img-bottom" />
            </div>
        </div>
    )
}

export default Differents