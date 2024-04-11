import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import SafeComponent from "./SafeComponent";

import { useSharedContext, SharedProvider } from 'home/SharedContext';
import { capitalize } from 'home/utils';

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

function SomeComponent() {
  const { count, incrementCount } = useSharedContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <SafeComponent>
          <Header />
        </SafeComponent>
        { }
        <SharedProvider>
          <SomeComponent />
        </SharedProvider>
        <div>
          <h5>{
            capitalize("products")
          }</h5>
          <p>Welcome to the Products page</p>
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
