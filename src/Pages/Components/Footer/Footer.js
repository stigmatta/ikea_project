import './Footer.css'
import { Link } from 'react-router-dom'

import Insta from './assets/insta.svg'
import Twitter from './assets/twitter.svg'
import Telegram from './assets/telegram.svg'
import Visa from './assets/visa.svg'
import Mastercard from './assets/mastercard.svg'
import Maestro from './assets/maestro.svg'
import Paypal from './assets/paypal.svg'
import ApplePay from './assets/applepay.svg'

import Arrow from '../../../assets/arrowNext.svg'


export default function Footer(){
    const firstRow = [];
    const secondRow = [];
    const thirdRow = [];
    const fourthRow = [];


    for(let i = 0;i<9;i++){
        firstRow.push(<div key = {i} className='one-subsection'>Зміст підтеми</div>)
    }

    for(let i = 0;i<3;i++){
        secondRow.push(<div key = {i} className='one-subsection'>Зміст підтеми</div>)
    }

    for(let i = 0;i<6;i++){
        thirdRow.push(<div key = {i} className='one-subsection'>Зміст підтеми</div>)
    }

    for(let i = 0;i<4;i++){
        fourthRow.push(<span key = {i} className='last-row-sub'>Заголовок підрозділу</span>)
    }


    return(
        <div className='Footer'>
            <div className='sections'>
                <div className='one-section'>
                    <span>Заголовок підрозділу</span>
                    {firstRow}
                </div>

                <div className='one-section'>
                    <span>Заголовок підрозділу</span>
                    {secondRow}
                </div>

                <div className='one-section'>
                    <span>Заголовок підрозділу</span>
                    {thirdRow}
                </div>

                <div className='one-section'>
                    <span>Заголовок підрозділу</span>
                    {secondRow}
                </div>
            </div>

            <div className='logos'>
                <div className='logo-part1'>
                    <img src = {Insta}></img>
                    <img src = {Twitter}></img>
                    <img src = {Telegram}></img>
                </div>

                <div className='logo-part2'>
                    <img src = {Visa}></img>
                    <img src = {Mastercard}></img>
                    <img src = {Maestro}></img>
                    <img src = {Paypal}></img>
                    <img src = {ApplePay}></img>
                </div>
            </div>

            <div className='last-row'>
                <div className='last-row1'>
                <a href="#hashtag" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img className='arrow-up' src={Arrow} alt="Up Arrow" />
                </a>
                    <span className='last-row-sub'>Заголовок підрозділу</span>
                </div>

                <div className='last-row2'>
                    {fourthRow}
                </div>
            </div>
        </div>
    )
}