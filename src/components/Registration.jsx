import { useState } from "react";
import './Registration.css'

function Validate(form){
    if(form.name.length <3)
        return "Imię jest za krótkie"

    // ... reszta walidacji

    return null;
}

function Registration(){

    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        name:'',
        lastname:'',
        email: '',
        password:'',
        passwordRep: ''
    })

    async function handleSubmit(e){
        e.preventDefault();

        const errorMsg = Validate(form);
        if(errorMsg){
            setError(errorMsg)
            console.error(errorMsg)
            return
        }
        else{
            setError(null)
        }
        
        console.log(form)
    }

    function updateField(e){
        setForm(
            {...form, 
                [e.target.name] : e.target.value
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Rejestracja</h3>
            <div>
                <label>Imię:</label>
                <input type="text" name="name" onChange={updateField}></input>
            </div>
            <div>
                <label>Nazwisko:</label>
                <input type="text" name="lastname" onChange={updateField}></input>
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email" name="email"onChange={updateField}></input>
            </div>
            <div>
                <label>Hasło:</label>
                <input type="text" name="emailRep" onChange={updateField}></input>
            </div>
            <div>
                <label>Powtórz hasło:</label>
                <input type="text" name="emailRep" onChange={updateField}></input>
            </div>
            { error ? <p className="error"> {error}</p> : ""
            }
            <button type="submit">Zarejestruj</button>
        </form>
    )
}

export default Registration