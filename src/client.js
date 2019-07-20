import React from "react";
import ReactDOM from "react-dom";

const pages = {
  "/": React.lazy(() => import("../pages/index")),
  "/page1": React.lazy(() => import("../pages/page1")),
  "/page2": React.lazy(() => import("../pages/page2"))
};

function App() {
  const page = "/";
  const Page = pages[page];

  return (
    <React.Suspense fallback={<p>loading</p>}>
      <Page />
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById("react-root"));
