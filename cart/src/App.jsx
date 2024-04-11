import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { useSharedContext, SharedProvider } from 'home/SharedContext';

function ComponentCount() {
  const { count } = useSharedContext();

  console.log('count:', count)

  return <p>Count: {count}</p>;
}

const App = () => (
  <div className="container">
    <div>Name: cart</div>
    <SharedProvider>
      <ComponentCount />
    </SharedProvider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
