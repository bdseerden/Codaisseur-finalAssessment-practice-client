import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUpPage/SignUpPage";
import Login from "./pages/LoginPage/LoginPage";
import SpacesPage from "./pages/SpacesPage/SpacesPage";
import SpaceDetailsPage from "./pages/SpaceDetailsPage/SpaceDetailsPage";
import MySpacePage from "./pages/MySpacePage/MySpacePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";

const Other = () => (
  <HeroBanner>
    <h1>Other</h1>
  </HeroBanner>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<SpacesPage />} />
        <Route exact path="/spaces/:id" element={<SpaceDetailsPage />} />
        <Route path="/myspace" element={<MySpacePage />} />
        <Route path="/other" element={<Other />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
