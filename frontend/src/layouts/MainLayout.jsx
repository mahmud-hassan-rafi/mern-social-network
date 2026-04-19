import React, { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { errorNotify } from "../utils/toast/ToastNotify";

const MainLayout = () => {
  const navigate = useNavigate();
  const called = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const checkAuth = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}`, {
          credentials: "include",
          method: "GET",
        });

        const data = await res.json();
        const { success } = data;

        if (!success) {
          if (res.status === 401) {
            navigate("/login", { replace: true });
            errorNotify("Please login to continue");
            return;
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Auth check error:", error);
        navigate("/login", { replace: true });
        errorNotify("Authentication error");
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default MainLayout;
