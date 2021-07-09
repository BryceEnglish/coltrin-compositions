import { useMediaQuery } from "react-responsive"
import './App.css';
import SplashScreen from "./components/SplashScreen";
import SocialTray from "./components/SocialTray";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import MusicPlayer from "./components/MusicPlayer";

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1280px)" })

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1279px)" })

const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery()

  return isDesktop ? children : null
}

const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return isTabletAndBelow ? children : null
}

function App() {

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
  }

  return (
    <div className="App">
      <SocialTray />
      <div className="App-content">
        {/* Desktop Start */}
        <Desktop>
          <SplashScreen />
          <Intro />
          <MusicPlayer />
        </Desktop>
        {/* Desktop End */}
        {/* Mobile/Tablet Start */}
        <TabletAndBelow>
        </TabletAndBelow>
        {/* Mobile/Tablet End */}
      </div>
      <Footer />
    </div>
  )
}

export default App;
