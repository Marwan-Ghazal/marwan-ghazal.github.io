import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggle: () => void;
}

export const ThemeToggle = ({ theme, toggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex items-center justify-center h-9 w-9 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
