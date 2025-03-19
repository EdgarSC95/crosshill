import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import type { News } from "@shared/schema";

export default function EmergencyAlert() {
  const { data: alerts } = useQuery<News[]>({
    queryKey: ["/api/news/emergency"],
  });

  if (!alerts?.length) return null;

  return (
    <div className="bg-destructive">
      <div className="container mx-auto px-4 py-2">
        {alerts.map((alert) => (
          <Alert key={alert.id} variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{alert.title}</AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
}
