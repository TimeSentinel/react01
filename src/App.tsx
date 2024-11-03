import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import MainContent from "./mainContent.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "./portfolio.tsx";
import Freelance from "./freelance.tsx";
import Contact from "./contact.tsx";
import Slideshow from "./slideshow.tsx";
import Restaurant from "./restaurant.tsx";
import Credentials from "./credentials.tsx";

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
                            <Route path="resume" element={<Credentials/>}/>
                            <Route path="freelance" element={<Freelance/>}/>
                            <Route path="restaurant" element={<Restaurant/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="*" element={<MainContent/> }/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
            <div className="gallery">
                <Slideshow/>
            </div>
            <div className="footer">
                <Footer/>
            </div>

        </>
    )
}

export default App
