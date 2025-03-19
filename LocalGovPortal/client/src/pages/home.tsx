import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Riverside</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A vibrant community dedicated to serving our residents with excellence
          and fostering a high quality of life for all.
        </p>
      </section>

      {/* Featured Services */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Stay informed about community events and town meetings.
              </p>
              <Link href="/news">
                <Button>View Calendar</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access important forms, permits, and public records.
              </p>
              <Link href="/documents">
                <Button>Browse Documents</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Departments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with our various municipal departments.
              </p>
              <Link href="/departments">
                <Button>View Departments</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Images Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1478095062770-b2e8f2af3ed1"
            alt="Historic Town Hall"
            className="rounded-lg object-cover h-48 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1622112359064-04163bf6fb8f"
            alt="Town Square"
            className="rounded-lg object-cover h-48 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
            alt="Community Event"
            className="rounded-lg object-cover h-48 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
            alt="Local Festival"
            className="rounded-lg object-cover h-48 w-full"
          />
        </div>
      </section>
    </div>
  );
}
