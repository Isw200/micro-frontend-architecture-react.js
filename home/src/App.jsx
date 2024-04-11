import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "./Header";
import Footer from "./Footer";
import { useSharedContext, SharedProvider } from './SharedContext';

function SomeComponent() {
  const { count, incrementCount } = useSharedContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}

const App = () => (
  <div className="container">
    <Header />
    <div>
      <h5>Home</h5>
      <p>Welcome to the Home page</p>
    </div>
    <SharedProvider>
      <SomeComponent />
    </SharedProvider>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
