import React, { useState, useEffect } from "react";
import MoonIcon from "./icons/moon";
import SunIcon from "./icons/sun";
import { useSelector, useDispatch } from "react-redux";

import { changeDarkMode } from "./redux/reducers/darkMode";

const Toggle = () => {
  const [darkmode, setDarkmode] = useState<boolean>();

  const dispatch = useDispatch();

  const ToggleNow = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    if (darkmode === true) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      dispatch(changeDarkMode(localStorage.theme));
    }
    if (darkmode === false) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      dispatch(changeDarkMode(localStorage.theme));
    }
  }, [darkmode, dispatch]);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkmode(true);
    }
  }, []);

  return (
    <>
      <button>
        {darkmode === true ? (
          <MoonIcon callfunc={ToggleNow} />
        ) : (
          <SunIcon callfunc={ToggleNow} />
        )}
      </button>
    </>
  );
};

export default Toggle;
