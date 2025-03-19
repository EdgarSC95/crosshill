import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").notNull(),
  isEmergency: boolean("is_emergency").default(false),
});

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  contactInfo: text("contact_info").notNull(),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  fileUrl: text("file_url").notNull(),
  category: text("category").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  department: text("department").notNull(),
});

// Insert schemas
export const insertNewsSchema = createInsertSchema(news).omit({ id: true });
export const insertDepartmentSchema = createInsertSchema(departments).omit({ id: true });
export const insertDocumentSchema = createInsertSchema(documents).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true });

// Types
export type News = typeof news.$inferSelect;
export type Department = typeof departments.$inferSelect;
export type Document = typeof documents.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type InsertDocument = z.infer<typeof insertDocumentSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
