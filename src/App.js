import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ROUTES = [
  { path: "/", component: <Home /> },
  { path: "/portfolio", component: <Portfolio /> },
  { path: "/privacy-policy", component: <PrivacyPolicy /> },
  { path: "/contact", component: <Contact /> },
  { path: "/team", component: <Team /> },
  { path: "/terms-and-conditions", component: <TermsAndConditions /> },
];
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
