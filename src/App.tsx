import './App.css';
import { Header } from './layout/header/Header';
import { Skills } from './layout/sections/skills/Skills';
import { HomePageFirstSection } from './layout/sections/main/HomePageFirstSection';
import './assets/fonts/Jersey15-Regular.ttf';
import { AboutSection } from './layout/sections/about/AboutSection';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <HomePageFirstSection/>
            <Skills/>
            <AboutSection backgroundSrc = {"ellips"}/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default App;