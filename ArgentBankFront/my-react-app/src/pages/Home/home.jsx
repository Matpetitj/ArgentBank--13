import "./home.scoped.scss";

import Chat from "../../../assets/img/icon-chat.png";
import Money from "../../../assets/img/icon-money.png";
import Security from "../../../assets/img/icon-security.png";

function Home(){
    return (
        <>
            <main className="home">
                <section className="homeBanner">
                    <div className="homeBannerContent">
                        <p className="bannerSubtitle">No fees.</p>
                        <p className="bannerSubtitle">No minimum deposit.</p>
                        <p className="bannerSubtitle">High interest rates.</p>
                        <p className="bannerText">Open a savings account with Argent Bank today!</p>
                    </div>
                </section>
                <section className="homeContent">
                    <div className="homeItem">
                        <img className="homeIcon" src={Chat} alt="Icône de tchat"/>
                        <h3 className="homeItemTitle">You are our #1 priority</h3>
                        <p className="homeItemText"> 
                            Need to talk to a representative? 
                            You can get in touch through our 24/7 chat or 
                            through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className="homeItem">
                        <img className="homeIcon" src={Money} alt="Icône de billet"/>
                        <h3 className="homeItemTitle">More savings means higher rates</h3>
                        <p className="homeItemText"> 
                            The more you save with us, the higher your interest rate will be!
                        </p>
                    </div>
                    <div className="homeItem">
                        <img className="homeIcon" src={Security} alt="Icône de sécurité"/>
                        <h3 className="homeItemTitle">Security you can trust</h3>
                        <p className="homeItemText"> 
                            We use top of the line encryption to make sure your 
                            data and money is always safe.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;