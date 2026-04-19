import React, { useEffect, useRef } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { errorNotify } from "../utils/toast/ToastNotify";

const MainLayout = () => {
  const navigate = useNavigate();
  const called = useRef(false);
  useEffect(() => {
    if (called.current) return;
    called.current = true;
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}`, {
        credentials: "include",
      });
      const data = await res.json();
      const { message, success } = data;
      if (!success) {
        if (res.status === 401) {
          navigate("/login");
          errorNotify(message);
          return;
        }
      }
    })();
  }, [navigate]);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default MainLayout;
