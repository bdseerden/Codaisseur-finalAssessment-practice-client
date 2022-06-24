import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarItem from "./NavbarItem";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarItem path="/myspace" linkText="My Space" />
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user?.email}</Nav.Item>
      <Button onClick={() => dispatch(logOut(), navigate("/"))}>Logout</Button>
    </>
  );
}
