import Card from './Card'
import './Content.css'
import nataliaImg from '../assets/avatar.png'
import { useState } from 'react'
import Button from './Button';
import Calculator from './Calculator'
import Todos from './Todos';
import Counter from './Counter';
import LoginPanel from './LoginPanel';
import Weather from './Weather';

function createInitialTasks() {
    const initialTasks = ['item 1', 'item 2', 'item  3'];
    return initialTasks;
}

function Content() {
    const team = [
        {
            "id": 1,
            "name": "Anna",
            "img": nataliaImg
        },
        {
            "id": 2,
            "name": "Karol",
            "img": nataliaImg
        },
        {
            "id": 3,
            "name": "Zofia",
            "img": nataliaImg
        },
        {
            "id": 4,
            "name": "Marcel",
            "img": nataliaImg
        },
        {
            "id": 5,
            "name": "Kamil",
            "img": nataliaImg
        },
    ]

    const [user, setUser] = useState('Zofia');


    function userHandleClick() {
        setUser('Anna');
    }




    return (
        <>
            <Weather/>

             <LoginPanel/>

            <Counter />
            <Todos />
            <Calculator />


            <section>
                <h2>Nasz zespół</h2>
                <section className='content'>
                    {team.map((teamMember) => <Card name={teamMember.name} img={teamMember.img} key={teamMember.id} />)}
                </section>
            </section> 



        </>
    )
}

export default Content