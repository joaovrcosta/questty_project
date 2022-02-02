import { Footer } from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import { LadingHeader } from "../../components/HeaderLadingPage/LadingHeader";

export function Home() {

    return (
        <>
            <LadingHeader />
            <Link to="feed"><button>Feed</button></Link>
            <Footer />
        </>
    )
}