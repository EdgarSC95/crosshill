import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileDown, FileText } from "lucide-react";
import type { Document } from "@shared/schema";

export default function Documents() {
  const { data: documents, isLoading } = useQuery<Document[]>({
    queryKey: ["/api/documents"],
  });

  const categories = documents ? [...new Set(documents.map(doc => doc.category))] : [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Public Documents</h1>
        <p className="text-lg text-muted-foreground">
          Access important forms, permits, and public records for the Town of Riverside.
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1624417963912-8532660d9de8"
          alt="Town Records"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      {/* Documents by Category */}
      {isLoading ? (
        <div className="space-y-6">
          {Array(3).fill(0).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-8 w-48 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array(4).fill(0).map((_, j) => (
                  <Card key={j}>
                    <CardHeader>
                      <Skeleton className="h-6 w-36" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-16 mb-4" />
                      <Skeleton className="h-9 w-24" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        categories.map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents
                ?.filter((doc) => doc.category === category)
                .map((doc) => (
                  <Card key={doc.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        {doc.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{doc.description}</p>
                      <Button asChild>
                        <a href={doc.fileUrl} download>
                          <FileDown className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
