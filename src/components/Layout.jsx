import { Footer } from "./Footer"
import { NavBar } from "./NavBar"
import { Outlet } from "react-router"

export function Layout(){
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}