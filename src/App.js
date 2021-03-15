import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav";
import ShowCaseSection from "./components/ShowCaseSection";
import SkillsSection from "./components/SkillsSection";
import {motion} from 'framer-motion';
import {contentAnimation} from './animation';
function App() {
  return (
    <div className="App">
      <GlobalStyle />      
      <Nav />      
      <motion.div variants={contentAnimation} initial="hidden" animate="show">
        <ShowCaseSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;
