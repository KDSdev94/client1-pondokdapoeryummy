import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  // Seed data if empty
  const existing = await storage.getProducts();
  if (existing.length === 0) {
    await storage.createProduct({
      name: "Telur Asin Premium",
      category: "Telur Asin",
      price: 3000,
      unit: "/ butir",
      description: "Telur asin pilihan dengan tekstur lembut, gurih, dan tidak amis. Cocok untuk lauk makan atau camilan.",
      imageUrl: "https://picsum.photos/seed/telurasin2/400/300"
    });
    await storage.createProduct({
      name: "Sambal Bawang Spesial",
      category: "Sambel",
      price: 15000,
      unit: "/ botol",
      description: "Sambal bawang dengan tingkat kepedasan yang 'nendang'. Terbuat dari cabai segar pilihan tanpa pengawet.",
      imageUrl: "https://picsum.photos/seed/sambalpedas/400/300"
    });
    await storage.createProduct({
      name: "Bandeng Presto Duri Lunak",
      category: "Bandeng Presto",
      price: 35000,
      unit: "/ pcs",
      description: "Ikan bandeng presto dengan daging tebal dan durinya lunak sempurna. Praktis, tinggal goreng atau bakar.",
      imageUrl: "https://picsum.photos/seed/bandengpresto/400/300"
    });
    await storage.createProduct({
      name: "Telur Asin Bakar",
      category: "Telur Asin",
      price: 4000,
      unit: "/ butir",
      description: "Varian telur asin yang dibakar dengan bumbu rempah rahasia, memberikan aroma smoky yang menggugah selera.",
      imageUrl: "https://picsum.photos/seed/telurbakar/400/300"
    });
    await storage.createProduct({
      name: "Sambal Terasi Medan",
      category: "Sambel",
      price: 12000,
      unit: "/ botol",
      description: "Sambal terasi klasik dengan rasa gurih dan pas dimakan dengan sayur segar atau ikan goreng.",
      imageUrl: "https://picsum.photos/seed/sambalterasi/400/300"
    });
    await storage.createProduct({
      name: "Bandeng Presto Vacuum",
      category: "Bandeng Presto",
      price: 60000,
      unit: "/ 2 pcs",
      description: "Kemasan vakum tahan lama, cocok untuk oleh-oleh ke luar kota. Kualitas rasa tetap terjaga.",
      imageUrl: "https://picsum.photos/seed/ikanbandeng/400/300"
    });
  }

  return httpServer;
}
