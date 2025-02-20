import { Link, Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = ()=>{
    return(
        <><div className="container">
        <div className="row">
            <div className="col">
                <Navbar/>
            </div>
        </div>
        <Outlet/>   
    </div>
        </>
    )
}
export default Layout