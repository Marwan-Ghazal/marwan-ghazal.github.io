import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const STORAGE_KEY = "theme";

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
};

export const Nav = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3 font-mono text-sm tracking-tight text-foreground">
          <img
            src={theme === "dark" ? "/Dark-Logo.png" : "/Light-Logo.png"}
            alt="Marwan Ghazal logo"
            className="h-9 w-9 object-contain"
          />
          <span className="text-base font-medium">
            marwan<span className="text-accent">.</span>ghazal
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};
