import { RegisterApp } from "./registration/Register"
import { LoginApp } from "./registration/LoginIn"
import {  useState } from "react"

export type pageList = "register" | "login"

export const  NavigateApp = ()  => {

    const [page, setPage] = useState("login")
    
    switch (page) {
        case "login":
            return <LoginApp page={setPage}/>
        case "register": 
        return <RegisterApp page={setPage}/>

    }
}