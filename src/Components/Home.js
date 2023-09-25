import RandomWord from "./RandomWord"

const Home = ({ type }) => {

    const wordsList = ["coding", "ML/AI", "control", "DRL", "robotics", "research", "agile", "leadership"]

    return (
        <>
            <div className="anchor-padding" id={"home-padding"}></div>
            <div className={type==='even'? "section even" : "section odd"}>
                <div className="home">
                    <h1> Hi! </h1>
                    <h2>i am Tommaso Pardi</h2>
                    <h3>a Robotics Engineer with a passion for <RandomWord wordsList={wordsList}/></h3>
                </div>
            </div>
        </>
    )
}

export default Home;