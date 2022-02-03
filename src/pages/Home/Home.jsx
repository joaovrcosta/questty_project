import { Footer } from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import { LandingHeader } from "../../components/HeaderLandingPage/LandingHeader";

export function Home() {

    return (
        <>
            <LandingHeader />
            {/* <Link to="feed"><button>Feed</button></Link> */}
            {/* <h2>Responder e aprender</h2>
            <div className={styles.inputContainer}>
                <input className={styles.inputContainerElement} placeholder="Qual a sua dúvida?"></input>
                <button className={styles.inputContainerButton}>Pergunte</button>
            </div> */}
            <Footer />
        </>
    )
}