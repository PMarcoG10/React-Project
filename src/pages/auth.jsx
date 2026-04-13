// the authentication page of the website

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Auth() {

    // state to toggle between modes (Sign Up or Login)
    const [ mode, setMode ] = useState("SignUp")

    // state to store any authentication errors
    const [ error, setError] = useState(null)

    // hook to programmatically navigate between routes
    const navigate = useNavigate()

    // get authentication functions and user state from context
    const { signUp, login } = useAuth()
    
    // - register: connects inputs to the form
    // - handleSubmit: handles form submission
    // - errors: contains validation errors for form fields
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    // function runs when form is submitted
    function onSubmit(data) {
        // clear previous errors
        setError(null)
        let result
        if (mode === "SignUp"){
            result = signUp(data.email, data.password)
        } else {
            result = login(data.email, data.password)
        }

        // if authentication is successful, redirect to home page
        if (result.success) {
            navigate("/")
        } else {
            // otherwise show error message
            setError(result.error)
        }
    }

    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">

                    {/* this showcase the sign up or login page */}
                    <h1 className="page-title">
                        { mode === "SignUp" ? "Sign Up" : "Login"}
                    </h1>

                    <form className="auth-form" onSubmit={ handleSubmit(onSubmit) }>
                        { error && <div className="error-message">{ error }</div>}
                        {/* handles the users email */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-input" type="email" id="email" { ...register('email', { required: "Email is required" }) }/>
                            
                            {/* shows error message when email is not provided */}
                            { errors.email && ( <span className="form-error">{ errors.email.message }</span> )}
                        </div>

                        {/* handles the users password */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="form-input"
                                type="password"
                                id="password"
                                
                                // checks to see if password is between 4 to 12 characters
                                { ...register('password',
                                    { required: "Password is required",
                                        minLength : {
                                            value: 4,
                                            message: "Password must be at least 4 characters",
                                        },
                                        maxLength : {
                                            value: 12,
                                            message: "Password must be at most 12 characters",
                                        }
                                    }) }
                                />

                            {/* shows an error message when password is not provided */}
                            { errors.password && ( <span className="form-error">{ errors.password.message }</span> )}
                        </div>

                        <button type="submit" className="btn btn-primary btn-large">
                            { mode === "SignUp" ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    {/* asks to sign up or log into their account */}
                    <div className="auth-switch">
                        { mode === "SignUp" ? (
                        <p>
                            Already have an account?{" "}
                            <span className="auth-link" onClick={ () => setMode("Login")}>
                                Login
                            </span>
                        </p>
                    ) : (
                        <p>
                            {""}
                            Don't have an account?{""}
                            <span className="auth-link" onClick={ () => setMode("SignUp")}>Sign Up</span>
                        </p>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}