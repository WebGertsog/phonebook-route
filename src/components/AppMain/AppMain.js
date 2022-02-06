import { BrowserRouter, NavLink, Link, Route, Routes } from "react-router-dom";
import App from "../../App";
import LoginScreen from "../LoginScreen/LoginScreen";
import DetailedContact from "../DetailedContact/DetailedContact";

const AppMain = () => {
  const style = (isActive) => ({
    display: "block",
    margin: "1rem 0",
    color: isActive ? "red" : "",
  });
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          style={({ isActive }) => {
            return style(isActive);
          }}
          to={"/"}
        >
          LoginScreen
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return style(isActive);
          }}
          to={"/App"}
        >
          App
        </NavLink>
        {/* <Link to={"/"}>LoginScreen</Link>
        <Link to={"/App"}>App</Link> */}
      </nav>
      <Routes>
        <Route path={"/"} element={<LoginScreen />}>
          <Route path={"DetailedApp"} element={<App />} />
        </Route>
        <Route path={"/App"} element={<App />}>
          <Route path={":id"} element={<DetailedContact />} />
        </Route>
        <Route path={"*"} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppMain;
