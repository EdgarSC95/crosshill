import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail, Phone } from "lucide-react";
import type { Department } from "@shared/schema";

export default function Departments() {
  const { data: departments, isLoading } = useQuery<Department[]>({
    queryKey: ["/api/departments"],
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Town Departments</h1>
        <p className="text-lg text-muted-foreground">
          Our municipal departments work together to serve the community and maintain the high quality of life in Riverside.
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573181759662-1c146525b21f"
          alt="Riverside Government Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          // Loading skeletons
          Array(4).fill(0).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-8 w-48" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-36" />
                  <Skeleton className="h-6 w-48" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : departments?.map((dept) => (
          <Card key={dept.id}>
            <CardHeader>
              <CardTitle>{dept.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{dept.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{dept.contactInfo}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{`${dept.name.toLowerCase().replace(/\s+/g, '.')}@riverside.gov`}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
