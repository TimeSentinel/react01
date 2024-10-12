import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import MainContent from "./content.tsx";

function App() {

    return (
        <>
            <div className="header4">
                <Header/>
            </div>

            <div className="content">
                <MainContent/>
            </div>

            <div className="footer">
                <Footer/>
            </div>

        </>
    )
}

export default App
