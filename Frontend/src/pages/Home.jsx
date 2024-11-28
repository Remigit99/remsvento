
import headerImg from "../assets/investo_header.png"
import learnMoreImg from "../assets/investo_learn.png"
import invest1 from "../assets/investo_port.png"
import invest2 from "../assets/invest_wise.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import "../../styles/homeStyle.css"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Package, Facebook, TwitterIcon, Instagram, Youtube } from "lucide-react"

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
                            <span>Learn more</span>  <ArrowRight />
                        </Link>
                    </div>
                </div>
            </section>


            <section className="startup">
                <div className="container startup__container">
                    <h2>
                        Begin your startup journey on the <br></br>
                        right foot by making strategic <br></br>
                        investments
                    </h2>

                    <div className="startup_strat">
                        <article>
                            <div className="icon">
                                <Package />
                            </div>

                            <h3>Increase value for Money</h3>
                            <p>
                                Investing is a smart strategy for making
                                your money more useful and profitable over time.
                                By investing you manage your finances effectively and have
                                the potentialto  increase the value of your money.
                            </p>
                        </article>

                        <article>
                            <div className="icon">
                                <Package />
                            </div>

                            <h3>Open the Knowledge</h3>
                            <p>
                                Your understanding of the economy and finance
                                will broaden, potentially making you a reliable
                                financial planner.
                            </p>
                        </article>
                        <article>
                            <div className="icon">
                                <Package />
                            </div>

                            <h3>Achieving Your Freedom</h3>
                            <p>
                                Financial freedom is a state where you are financially
                                independent. Meaning your income is sufficient to
                                cover your needs without relying on external assistance.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="easy">
                <div className="container easy__container">
                    <div className="easy__container-left">
                        <img src={invest1} />

                    </div>


                    <div className="easy__container-right">
                        <h2>Investing in startups made easy</h2>

                        <p>Investing doesn&apos;t have to be hard. We make it easy
                            to invest for your future with simple, low-cost investment
                            options and personalized advice.
                        </p>

                        <div className="easy_benefits">
                            <div>
                                <CheckCircle color="purple" />
                                <h6>Smart Solutions for the automated world</h6>
                            </div>
                            <div>
                                <CheckCircle color="purple" />
                                <h6>Do great things everyday</h6>
                            </div>
                            <div>
                                <CheckCircle color="purple" />
                                <h6>Building a better future together  </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="wisely">
                <div className="container wisely__container">


                    <div className="wisely__container-left">
                        <h2>Invest wisely, invest safely,<br></br> invest now</h2>

                        <p>Investing can be a great way to grow your money,
                            but it can be tricky to get started. Catch offers
                            easy access toinf ormation about investing in startups

                        </p>

                        <div className="wisely_benefits">
                            <Link to="/login" className="btn startBtn">
                                <span>Start Investing Now</span>  <ArrowRight /> </Link>
                        </div>
                    </div>

                    <div className="wisely__container-right">
                        <img src={invest2} />

                    </div>

                </div>
            </section>

            <section className="intel">
                <div className="container intel__container">
                    <div className="intel_header">
                        <h2>
                            Investing in startups <br></br>
                            intelligently
                        </h2>

                        <div className="intel_main">
                            <article>
                                <div className="icon">
                                    <img src={icon1} />
                                </div>
                                <h3>The complexity of simplicity</h3>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quaerat.
                                </p>
                            </article>


                            <article>
                                <div className="icon">
                                    <img src={icon2} />

                                </div>
                                <h3>Amazing service. It sets our business apart</h3>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quaerat.
                                </p>
                            </article>

                            <article>
                                <div className="icon">
                                    <img src={icon3} />

                                </div>
                                <h3>Do great things everyday with easy</h3>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quaerat.
                                </p>
                            </article>


                        </div>
                    </div>
                </div>

            </section>

            <footer>
                <div className="container footer__container">
                    <div className="footer__container-left">
                        <Link to="/" className="logo">
                            <h3>rem<span>Vento</span></h3>
                        </Link>

                        <p>
                            Invest with confidence.
                        </p>

                        <div className="footer__socials">
                            <Facebook />
                            <TwitterIcon />
                            <Instagram />
                            <Youtube />
                        </div>
                    </div>


                    <div className="footer__container-right">

                        <article>
                            <h5>Company</h5>
                            <Link to="/">About Us</Link>
                            <Link to="/">Contact Us</Link>
                            <Link to="/">Career</Link>
                            <Link to="/">Blog</Link>
                        </article>

                        <article>
                            <h5>Features</h5>
                            <Link to="/">Pricing</Link>
                            <Link to="/">Products</Link>
                            <Link to="/">Updates</Link>
                            <Link to="/">Ivesting</Link>
                            <Link to="/">Options</Link>
                            <Link to="/">Overview</Link>
                        </article>

                        <article>
                            <h5>Legal</h5>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms of Service</Link>

                        </article>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Home