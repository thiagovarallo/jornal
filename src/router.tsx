import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function router() {
    
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Layout />}> 
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}