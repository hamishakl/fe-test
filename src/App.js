import React from "react";

import './App.css'
import './stylesheets/reset.css'

import Form from "./components/Form";
import HeadingText from "./components/HeadingText";

function App() {
  return (
    <div className="wrapper">
        <HeadingText />
        <Form />
    </div>
  );
}

export default App;
