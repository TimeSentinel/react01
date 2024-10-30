import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import MainContent from "./portfolioContent.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "./portfolio.tsx";
import Packages from "./packages.tsx";
import Contact from "./contact.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/">
                            <Route index element={<MainContent/>}/>
                            <Route path="portfolio" element={<Portfolio/>}/>
                            <Route path="packages" element={<Packages/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="*" element={<MainContent/> }/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>

            <div className="footer">
                <Footer/>
            </div>

        </>
    )
}

export default App
