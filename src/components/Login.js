import axios from 'axios'
import { response } from 'msw'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'



const Login = () => {

    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''

    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then(r => {
                localStorage.setItem('token', r.payload)
                push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>USERNAME</label>
                    <input onChange={onChange} type='text' name='username' id='username' />
                </div>
                <div>
                    <label htmlFor='password'>PASSWORD</label>
                    <input onChange={onChange} id='password' name='passwrod' type='password' />
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Login;