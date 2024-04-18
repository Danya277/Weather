import axios from "axios";
import { createContext, useReducer } from "react";


 export const authContext = createContext()

const INITIAL_STATE = {
    accessToken: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SIGN_UP_USER": {
            return {...state, accessToken: action.payload}
        }
        default: {
            return state;
        }
    }
}

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    const signUpUser = async (user) => {
        try {
            const {data} = await axios.post("http://localhost:8000/register", user)
            dispatch({
                type: "SIGN_UP_USER",
                payload: data.accessToken
            })
        }
        catch (e){
            console.log(e)
        }
    }

    

    return (
        <authContext.Provider value={{
            signUpUser: signUpUser,
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider