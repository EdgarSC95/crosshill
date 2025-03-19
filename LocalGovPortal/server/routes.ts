import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertNewsSchema, insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // News routes
  app.get("/api/news", async (_req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  app.get("/api/news/emergency", async (_req, res) => {
    const alerts = await storage.getEmergencyAlerts();
    res.json(alerts);
  });

  app.get("/api/news/:id", async (req, res) => {
    const news = await storage.getNewsById(Number(req.params.id));
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    res.json(news);
  });

  // Departments routes
  app.get("/api/departments", async (_req, res) => {
    const departments = await storage.getDepartments();
    res.json(departments);
  });

  app.get("/api/departments/:id", async (req, res) => {
    const department = await storage.getDepartmentById(Number(req.params.id));
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.json(department);
  });

  // Documents routes
  app.get("/api/documents", async (_req, res) => {
    const documents = await storage.getDocuments();
    res.json(documents);
  });

  app.get("/api/documents/:id", async (req, res) => {
    const document = await storage.getDocumentById(Number(req.params.id));
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json(document);
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const message = insertContactMessageSchema.parse(req.body);
      const result = await storage.createContactMessage(message);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  return httpServer;
}
