import avatarImg from '../assets/avatar.png'
import './Card.css'


function onHandle(name){
    alert(`Witam, jestem ${name}`);
}

function Card(props){

    return (
        <section className='card'>
            <img src={props.img} width="200px"></img>
            <h2>{props.name}</h2>
            <p>Jestem Natalia. Moim celem jest nauczenie się framework-a React na poziomie umożliwiającym pisanie frontendowych aplikacji. Przyswoiłam JavaScript oraz HTML i CSS. </p>
            <button type='button' onClick={()=> onHandle(props.name)}>Hello</button>
        </section>
    )
}

export default Card