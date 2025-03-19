import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/navbar";
import EmergencyAlert from "@/components/layout/emergency-alert";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Departments from "@/pages/departments";
import News from "@/pages/news";
import Documents from "@/pages/documents";
import Contact from "@/pages/contact";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EmergencyAlert />
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/departments" component={Departments} />
          <Route path="/news" component={News} />
          <Route path="/documents" component={Documents} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
