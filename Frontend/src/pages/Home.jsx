
import headerImg from "../assets/investo_header.png"
import "../../styles/homeStyle.css"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Home = () => {
    return (
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

                    <img src={headerImg}  className="header_img" />
                </div>
            </div>
        </header>
    )
}

export default Home