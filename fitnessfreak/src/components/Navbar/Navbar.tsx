"use client";

import React from "react";
import logo from "@/assets/logo.png";
import { IoIosBody } from "react-icons/io";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import AuthPopup from "../AuthPopup/Authpopup";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

  const checkLogin = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/auth/checklogin",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();
      setIsLoggedIn(!!data.ok);
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_API + "/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setIsLoggedIn(false);
  };

  React.useEffect(() => {
    checkLogin();
  }, [showPopup]);

  return (
    <nav>
      <Image src={logo} alt="Logo" />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">
        <IoIosBody />
      </Link>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => setShowPopup(true)}>Login</button>
      )}

      {showPopup && <AuthPopup setShowpopup={setShowPopup} />}
    </nav>
  );
};

export default Navbar;