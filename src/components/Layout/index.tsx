import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Layout() {
    return (
        <main className="w-full min-h-screen bg-slate-200">
            <Navbar/>
            <Outlet />
        </main>    
    )
}