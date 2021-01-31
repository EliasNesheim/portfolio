import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";


/*<Switch>
        <Route component={Home} path = '/' exact />
        <Route component={About} path = '/about' />
        <Route component={SinglePost} path = '/post/:slug' />
        <Route component={Post} path = '/post' />
        <Route component={Project} path = '/project' />
      </Switch>
 */
function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  const [slug2, setSlug2] = useState(null);
  

  return (
    <BrowserRouter>
    <NavBar />
    <main>
    <Home />
    <Project />
    <About />
    <Post setSelectedImg={setSelectedImg} setSlug2={setSlug2}/>
    { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} slug2={slug2}/> }
    </main>
    </BrowserRouter>
  )
}

export default App;
