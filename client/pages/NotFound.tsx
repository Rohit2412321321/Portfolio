import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
