import React, { useEffect, useState } from "react";


function UsersList() {
    const [users, setUsers] = useState([])
    const [counter, setCounter] = useState(1)
    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setUsers(json))
    }, [])

    useEffect(() => {
       
        console.log("licznik się zmienił : ", counter)


        return console.log("czyszczenie licznika:", counter)
        

    }, [counter]);

    useEffect(() => {
        function handleEvent(e) {
            console.log(e.key)
        }

        window.addEventListener("keyup", handleEvent)

        return () => window.removeEventListener("keyup", handleEvent)
        
    }
    );



    function updateCounter(e) {
        setCounter(counter + 1)
    }

    const listItems = users.map(user => <li id={user.id}>{user.name}</li>)

    return (
        <div>

            <ul>
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
            {counter}
            <button onClick={updateCounter}>+</button>
        </div>
    )
}

export default UsersList