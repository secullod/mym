import {AuthContext} from "../context/AuthContext"
import {useContext} from "react"

export const useAuthContext = () => {
    const {state, dispatch} = useContext(AuthContext)

    if (!state) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return {...state, dispatch}
}
