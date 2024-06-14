import './EmptyPage.css'
import sad from '../../assets/SadFace.svg'

import Title from '../Components/Title/Title';

import { useEffect } from 'react';

export default function EmptyPage({ title, setCurrentPage }) {
    useEffect(() => {
        setCurrentPage("/empty");
    }, [setCurrentPage]);

    return (
        <div className='EmptyPage'>
            <Title title = {title}></Title>
            <img className='empty-img' src={sad} alt="Sad face"></img>
        </div>
    );
}
