import "./App.css";
import logo from "./assets/logo.png"
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import RecommendedVideos from "./components/RecommendedSection/RecommendedVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import Watch from "./components/Watch/Watch";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(true);

  function signUp(event) {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );

    setEmail("");
    setPassword("");
  }

  function signIn(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );

    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setOpenSignIn(false);
        setOpen(false);
      } else {
        setUser(null);
        setOpenSignIn(true);
      }
    });
  }, [user]);

  return (
    <div className="app">
      <BrowserRouter>
        <Modal open={openSignIn}>
          <Box sx={style}>
            <form className="app_signUp">
              <center>
                <img
                  alt="logo"
                  src={logo}
                  className="logo"
                />
              </center>

              <Input
                className="modal_input"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="modal_input_password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                className="modalButton"
                onClick={signIn}
              >
                Sign In
              </Button>
              <h3>Or</h3>
              <Button
                variant="contained"
                className="modalButton"
                onClick={() => {
                  setOpen(true);
                  setOpenSignIn(false);
                }}
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Modal>

        <Modal open={open}>
          <Box sx={style}>
            <form className="app_signUp">
              <center>
                <img
                  alt="logo"
                  src={logo}
                  className="logo"
                />
              </center>

              <Input
                className="modal_input"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="modal_input_password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                className="modalButton"
                onClick={signUp}
              >
                Sign Up
              </Button>
              <h3>Or</h3>
              <Button
                variant="contained"
                className="modalButton"
                onClick={() => {
                  setOpen(false);
                  setOpenSignIn(true);
                }}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Modal>

        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app_page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
          <Route
            path="/search/:anySearch"
            element={
              <div className="app_page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
