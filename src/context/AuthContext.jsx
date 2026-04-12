import { createContext, useState } from "react";

// creating a context to share authentication state across the app
export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
    
    // state to track the currently logged-in user
    // initializes from localstorage if a user was previously logged in
    const [ user, setUser ] = useState(localStorage.getItem("currentUserEmail")
        ? {email: localStorage.getItem("currentUserEmail") }
        : null
    )

    // function to register a new user
    function signUp(email, password) {

        // get existing users from localstorage or default to an empty array
        const users = JSON.parse(localStorage.getItem('users') || "[]" )

        // check if the email is already registered
        if (users.find((u)=> u.email === email)) {
            return { success: false, error: "Email already exists"}
        }

        const newUsers = { email, password }
        users.push(newUsers)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("currentUserEmail", email)

        setUser({ email })

        return { success: true}
    }

    // function to log in an existing user
    function login(email, password) {

        // retrieve stored users
        const users = JSON.parse(localStorage.getItem('users') || "[]" )

        // find user matching with the email or password 
        const user = users.find((u)=> u.email === email && u.password === password)

        if (!user) {
            return { success: false, error: "Invalid email or password" }
        }

        localStorage.setItem("currentUserEmail", email)
        setUser({ email })

        return { success: true}
    }

    // function to log out the current user
    function logout() {
        localStorage.removeItem("currentUserEmail")
        setUser(null)
    }

    // provide auth functions and user state to the rest of the app 
    return (
        <AuthContext.Provider value={ {signUp, user, logout, login } }>
            { children }
        </AuthContext.Provider>
    )
}