import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export function Home() {
    return (
        <div>
            <Header />
            <button>ENTRAR</button>
            <button>CADASTRAR</button>
            <button>FAÇA SUA PERGUNTA</button>
            <Footer />
        </div>
    )
}