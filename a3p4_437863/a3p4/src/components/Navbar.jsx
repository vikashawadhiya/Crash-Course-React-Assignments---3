// src/components/Navbar.jsx

import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/users",
    label: "USERS",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/courses", // Add link for Courses page
    label: "COURSES",
  },
  {
    to: "/learn", // Add link for Learn page
    label: "LEARN",
  },
  {
    to: "/fees", // Add link for Fees page
    label: "FEES",
  },
];

export default function Navbar() {
  return (
    <div className="navbar">
      {links?.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
