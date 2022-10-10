import './App.css';
import Header from "./components/header/Header";
import ContentContainer from "./components/content/ContentContainer";
import ForecastContainer from "./components/Forecast/ForecastContainer";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <ContentContainer/>
            <ForecastContainer/>
            <Footer />
        </div>
    );
}

export default App;
