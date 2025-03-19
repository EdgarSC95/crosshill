import {
  type News,
  type Department,
  type Document,
  type ContactMessage,
  type InsertNews,
  type InsertDepartment,
  type InsertDocument,
  type InsertContactMessage,
} from "@shared/schema";

export interface IStorage {
  // News
  getNews(): Promise<News[]>;
  getNewsById(id: number): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  getEmergencyAlerts(): Promise<News[]>;

  // Departments
  getDepartments(): Promise<Department[]>;
  getDepartmentById(id: number): Promise<Department | undefined>;
  createDepartment(department: InsertDepartment): Promise<Department>;

  // Documents
  getDocuments(): Promise<Document[]>;
  getDocumentById(id: number): Promise<Document | undefined>;
  createDocument(document: InsertDocument): Promise<Document>;

  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private news: Map<number, News> = new Map();
  private departments: Map<number, Department> = new Map();
  private documents: Map<number, Document> = new Map();
  private contactMessages: Map<number, ContactMessage> = new Map();
  private currentIds = {
    news: 1,
    departments: 1,
    documents: 1,
    contactMessages: 1,
  };

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async getNewsById(id: number): Promise<News | undefined> {
    return this.news.get(id);
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = this.currentIds.news++;
    const news = { ...insertNews, id };
    this.news.set(id, news);
    return news;
  }

  async getEmergencyAlerts(): Promise<News[]> {
    return Array.from(this.news.values()).filter((news) => news.isEmergency);
  }

  async getDepartments(): Promise<Department[]> {
    return Array.from(this.departments.values());
  }

  async getDepartmentById(id: number): Promise<Department | undefined> {
    return this.departments.get(id);
  }

  async createDepartment(insertDepartment: InsertDepartment): Promise<Department> {
    const id = this.currentIds.departments++;
    const department = { ...insertDepartment, id };
    this.departments.set(id, department);
    return department;
  }

  async getDocuments(): Promise<Document[]> {
    return Array.from(this.documents.values());
  }

  async getDocumentById(id: number): Promise<Document | undefined> {
    return this.documents.get(id);
  }

  async createDocument(insertDocument: InsertDocument): Promise<Document> {
    const id = this.currentIds.documents++;
    const document = { ...insertDocument, id };
    this.documents.set(id, document);
    return document;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentIds.contactMessages++;
    const message = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
