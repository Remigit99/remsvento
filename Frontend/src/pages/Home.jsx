
import headerImg from "../assets/investo_header.png"
import learnMoreImg from "../assets/investo_learn.png"
import "../../styles/homeStyle.css"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Home = () => {
    return (
        <>
            <header>
                <div className="container header__container">
                    <div className="header_container-left">
                        <h1>
                            Optimize returns,
                        </h1>
                        <h1 className="mini">
                            Minimize risks
                        </h1>
                        <h1>
                            Invest wisely

                        </h1>

                        <div className="header_parag">
                            <p>
                                Our team of experts is dedicated to supporting you
                                through every phase of your investment journey.
                                Whether you are a seasoned investor or just beginning.
                            </p>
                        </div>

                        <Link to="/login" className="btn startBtn">
                            <p>Start Investing Now</p>  <ArrowRight /> </Link>

                        <div className="header_stats">
                            <div className="amount_raised">
                                <h3>$286.8k</h3>
                                <p>Amount Raised</p>
                            </div>
                            <div className="minimum">
                                <h3>$1.5k</h3>
                                <p>Minimum</p>
                            </div>
                            <div className="val_cap">
                                <h3>$19M</h3>
                                <p>Valuation Cap</p>
                            </div>
                        </div>

                    </div>
                    <div className="header_container-right">

                        <img src={headerImg} className="header_img" />
                    </div>
                </div>
            </header>

            <section className="learn">
                <div className="container learn__container">
                    <div className="learn__container-left">
                        <img src={learnMoreImg} />
                    </div>
                    <div className="learn__container-right">

                        <h2>Learn about investing in startups</h2>
                        <p>
                            Investing can be a powerful way to grow your wealth.
                            But, starting can be daunting. Catch offers easy access
                            to information about investing in startups enables you to make
                            informed decisions and navigate the complexities of the investment
                            landscape with confidence.
                        </p>

                        <Link to="/login" className="btn learnMoreBtn" >
                            <p>Learn more</p>  <ArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home