import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, toggle } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-foreground transition-transform" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-foreground transition-transform" />
      )}
    </Button>
  );
}
