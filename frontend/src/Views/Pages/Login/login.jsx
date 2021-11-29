import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../../Controllers/Redux/authSlice'
import './login.css'

export default ()=>{
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name:"",
        password: ""
    })

    function handleChange(e){
        setFormInput({...formInput, [e.target.name]: [e.target.value]})
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(signIn(formInput))
    }

    return(
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login:</h1>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formInput.name} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formInput.password} />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
