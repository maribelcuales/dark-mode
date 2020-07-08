import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage"; 

export const useDarkMode = key => {
  const [mode, setMode] = useLocalStorage("dark-mode");
  
  return [mode, setMode ];
}