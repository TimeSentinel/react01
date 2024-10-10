import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import Upper from "./upper.tsx";
import MainContent from "./content.tsx";

function App() {

    return (
        <>
            <div className="header">
                <Header/>
            </div>
            <div className="main">
                <h2>main section</h2>
                <div className="upperSection">
                    <Upper/>
                </div>
                <div className="content">
                    <MainContent/>
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>

        </>
    )
}

export default App
