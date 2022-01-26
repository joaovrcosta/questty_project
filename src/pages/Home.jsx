import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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