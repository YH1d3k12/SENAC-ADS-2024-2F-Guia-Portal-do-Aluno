import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/main.css";


export default function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <h3>Olá</h3>   
            </main>
            <Footer />
        </div>
    );
}