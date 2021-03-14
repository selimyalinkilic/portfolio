import AboutSection from "./components/AboutSection";
import GlobalStyle from './components/GlobalStyle';
import ShowCaseSection from "./components/ShowCaseSection";
import SkillsSection from "./components/SkillsSection";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ShowCaseSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

export default App;
