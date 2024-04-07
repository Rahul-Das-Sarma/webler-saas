"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [themeName, setThemeName] = React.useState<"light" | "dark">("light");
  const handleToggle = (str: "light" | "dark") => {
    setTheme(str);
    setThemeName(str);
  };

  return (
    <>
      {themeName !== "light" ? (
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleToggle("light")}
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 z-10 text-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleToggle("dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </>
  );
}
