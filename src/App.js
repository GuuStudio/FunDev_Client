import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/route";
import { Fragment } from "react";
import Header from "./pages/Header/Header";
import PublicContext from "./services/PublicContext";

function App() {
  return (
    <Router>
      <div className="App">
        <PublicContext>
          <Header />
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = route.layout || Fragment;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </PublicContext>
      </div>
    </Router>
  );
}

export default App;
