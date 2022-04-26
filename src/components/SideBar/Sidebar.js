import React from "react";
import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

function Siderbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="sidebar">
      {location.pathname === "/" ? (
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      ) : (
        <SidebarRow selected Icon={SearchIcon} title="Search" />
      )}
      <SidebarRow Icon={WhatshotIcon} title="Trending" />

      <hr />
      <Link to="/">
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      </Link>
      <hr />
      <div
        onClick={() => {
          signOut(auth).catch((error) => alert(error.message));
          navigate("/");
        }}
      >
        <SidebarRow Icon={LogoutIcon} title="Logout" />
      </div>
    </div>
  );
}

export default Siderbar;
