import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Feed } from "./Feed/Feed";

export function Home() {
    return (
        <div>
            <Header />
            <Feed />
            <Footer />
        </div>
    )
}