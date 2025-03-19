import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/departments", label: "Departments" },
    { href: "/news", label: "News" },
    { href: "/documents", label: "Documents" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="text-xl font-bold">Town of Riverside</a>
            </Link>
            <div className="hidden md:flex space-x-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={cn(
                      "hover:text-accent-foreground transition-colors",
                      location === link.href && "text-accent-foreground font-medium"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
