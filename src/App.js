import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ROUTES = [{ path: "/", component: <Home /> }];
function App() {
  return (
    <Wrapper>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 300,
            }}
          >
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          {ROUTES.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              exact
              element={item.component}
            />
          ))}
        </Routes>
      </Suspense>
    </Wrapper>
  );
}

export default App;
