import Slideshow from "./slideshow.tsx";

function MainContent() {


    return (
        <>
            <div className="mainHead">
                <h1>Main Page</h1>
            </div>
            <div className="mainBody">
                Main Body
            </div>
            <div className="mainFoot">

                <Slideshow/>
            </div>

        </>
    )
}

export default MainContent;
