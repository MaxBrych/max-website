"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiBrightness, BiMoon } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

// Do NOT use this! It will throw a hydration mismatch error.
const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      {currentTheme === "dark" ? (
        <BiMoon
          className="w-5 h-5 text-white"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiBrightness
          className="w-5 h-5 text-white"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};
export default ThemeSwitch;
