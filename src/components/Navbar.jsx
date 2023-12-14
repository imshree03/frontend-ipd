import { useEffect, useState } from "react";
import { GiDoctorFace } from "react-icons/gi";
import { motion } from "framer-motion";
import { app } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { UseraccessToken, fetchUserInfo } from "../utils/fetchUser";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState("");
  // const [open , setOpen] = useState(true)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const { user } = await signInWithPopup(auth, provider);
    const { providerData, accessToken } = user;
    // console.log(user);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  };

  const logout = e => {
    e.preventDefault();
    localStorage.clear();
    setUser("");
  };

  useEffect(() => {
    const accessToken = UseraccessToken();
    if (!accessToken) {
      console.log("success");
    } else {
      const [user] = fetchUserInfo();
      setUser(user);
    }
  }, []);

  return (
    <div className="full_container">
      <nav className="container navbar">
        <div className="Logo">
          <span>
            <GiDoctorFace style={{ color: "#ca8a04", fontSize: "3rem" }} />
          </span>
          <h3>
            TB <span>Imaging</span>
          </h3>
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="loginInfo">
          {!localStorage.getItem("accessToken") ? (
            <button onClick={login}>Login</button>
          ) : (
            <div className="logoutInfo">
              <span>Hey! {user.displayName}</span>
              <motion.img
                src={user.photoURL}
                alt=""
                whileTap={{ scale: 0.7 }}
              />

              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
