import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import type { News } from "@shared/schema";

export default function News() {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">News & Announcements</h1>
        <p className="text-lg text-muted-foreground">
          Stay informed about the latest updates, events, and important announcements from the Town of Riverside.
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472653816316-3ad6f10a6592"
          alt="Community Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          // Loading skeletons
          Array(3).fill(0).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24" />
              </CardContent>
            </Card>
          ))
        ) : news?.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>{item.title}</CardTitle>
                <Badge variant={item.isEmergency ? "destructive" : "secondary"}>
                  {format(new Date(item.date), "MMM d, yyyy")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-wrap">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
