import { useState } from 'react'
import Button from "./Button"

function Counter() {
    const [count, setCount] = useState(100);

    function counterHandleClick() {
        setCount(count + 1);
    }


    return (
        <section>
            <h2>Licznik: {count}</h2>
            <Button text='+' onClick={counterHandleClick}></Button>
        </section>
    )
}

export default Counter