import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage"; 

export const useDarkMode = key => {
  const [mode, setMode] = useLocalStorage("dark-mode");

  const appBody = document.querySelectorAll("body");

  useEffect(() => {
    if (mode) {
      appBody.classList.add("dark-mode");
    } else {
      appBody.classList.remove("dark-mode")
    }
  }, [mode]);
  
  return [mode, setMode ];
}