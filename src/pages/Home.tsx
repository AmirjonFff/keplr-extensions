import '../../public/assets/css/normalize.css'
import '../../public/assets/css/style.css'
import headerLogo from '../../public/assets/img/header-logo.svg';
import introVideo from '../../public/assets/intro.webm';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <img src={headerLogo} alt="logo" className="header__logo" />
                <div className="header__desc">Your Interchain Gateway</div>
            </div>

            <div className="container home-container">
                <div className="home__logo">
                    <video
                        width="200"
                        height="200"
                        autoPlay
                        loop
                        muted
                        className="home-video"
                    >
                        <source src={introVideo} type="video/webm" />
                    </video>
                </div>

                <div className="home__btns">
                    <a href="/login" className="btn btn--one">
                        Create a new wallet
                    </a>
                    <a href="/login" className="btn btn--two">
                        Import an existing wallet
                    </a>
                    <a href="/login" className="btn btn--three">
                        Connect Hardware Wallet
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;