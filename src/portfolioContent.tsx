import mainBG from './images/079.webp'
function MainContent() {


    return (
        <>
            <div className="mainHead">
                <h1>Specialized Web Design</h1>
                <p>

                </p>
            </div>
            <div className="mainBody">
                Main Body
            </div>
            <div className="mainFoot">
                <h2>Thanks for checking out my site!</h2>
                <div className="imageFrame">
                    <img src={mainBG} alt="background image" />
                </div>
            </div>

        </>
    )
}

export default MainContent;
