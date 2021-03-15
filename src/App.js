import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav";
import ShowCaseSection from "./components/ShowCaseSection";
import SkillsSection from "./components/SkillsSection";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ShowCaseSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
