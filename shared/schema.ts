import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: integer("price").notNull(),
  unit: text("unit").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
