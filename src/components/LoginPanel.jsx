import { useState } from "react";
import Button from "./Button";


function Logged() {

}

function NotLogged() {
    return {}
}

// function Panel({ isLogged, user }) {
//     if (isLogged) {
//         return (
//             <>
//                 <p>
//                     {user.name}
//                 </p>
//                 <Button text="Wyloguj"></Button>
//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <h2>Panel logowania</h2>
//                 <Button text="Zaloguj"></Button>
//             </>
//         )
//     }
// }

function LoginPanel() {
    const [isLogged, setIsLogged] = useState(true);
    const [user, setUser] = useState({ "name": "Ala" });
    const [userName, setUserName] = useState("");
    const flag = true;

    function logoutHandleClick(){
        setIsLogged(false);
        setUser({});
    }

    function loginHandleClick(){
        setIsLogged(true);
        setUser({"name": user.name});
    }

    
    if (isLogged) {
        return (
            <>
                <p>
                    {flag && "Zalogowany użytkownik: "}
                    {user.name}
                </p>
                <Button text="Wyloguj" onClick={logoutHandleClick}></Button>
            </>
        );
    }
    else {
        return (
            <>
                <h2>Panel logowania</h2>
                <input value={user.name} type="text" onChange={ e => setUser({"name": e.target.value})}></input>
                <Button text="Zaloguj" onClick={loginHandleClick}></Button>
            </>
        )
    }
}

export default LoginPanel