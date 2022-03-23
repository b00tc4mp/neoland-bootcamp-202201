import './Register.sass'
import { registerUser } from '../logic'
import { Logo, Button, Link } from './elements'
import { Input } from './form-elements'

function Register({ onLogin, onRegister }) {


    const register = async event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            await registerUser(name, email, password)
            onRegister && onRegister()
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    const goToLogin = event => {
        event.preventDefault()
        onLogin && onLogin()
    }

    return <form className='register' onSubmit={onSubmit}>
        <div className='register__container'>
            <Logo />
            <div className="register__wrapper">
                <Input type='text' name='name' placeholder='Name' required={true}/>
                <Input type='email' name='email' placeholder='Email' required={true}/>
                <Input type='password' name='password' placeholder='Password' required={true}/>
                <Button type='submit' innertext='Register' />
            </div>

            <Link href="" onClick={goToLogin} children={"Login"} />
        </div>

    </form>
}

export default Register