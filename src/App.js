import "./css/theme.css"
import "./css/index.css"
import LogoAnimation from './containers/logo.animation'
import React from "react";
import Header from "./containers/header";
import Me from "./containers/me";
import Experience from "./containers/experience";
import Projects from "./containers/projects";

import StatesManager from "./utils/states_manager";
import CaseStudy from "./containers/case.study";

global.stateManager = new StatesManager()

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: true
    }
    this.hasScrollingListener = false
  }

  setScrollingState(value) {
    global.stateManager.update("scrolling", [{ "scrolling": value }])
  }
  componentDidMount() {
    const doc = document.documentElement
    doc.style.setProperty("--device-height", "100vh")
    doc.style.setProperty("--device-width", "99vw")
    setTimeout(() => {
      this.setState({ animation: false })
    }, 8000)
  }
  render() {
    if (this.state.animation)
      return (
        <div className="App">
          <LogoAnimation />
        </div>
      );

    return (
      <div className="App">
        <Header />
        <div id="main">
          <Me />
          <Experience />
          <Projects />
        </div>
        <CaseStudy />
      </div>
    )
  }
}

export default App;
