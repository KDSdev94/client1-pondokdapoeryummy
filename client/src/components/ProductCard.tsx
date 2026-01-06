import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  // Format price to IDR
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-amber-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm border border-white/50">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center text-amber-400 text-xs font-bold bg-amber-50 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current mr-1" />
            4.9
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed border-border">
          <div>
            <span className="text-xs text-muted-foreground font-medium block mb-0.5">Harga</span>
            <div className="text-lg font-bold text-primary">
              {formattedPrice} <span className="text-xs font-normal text-muted-foreground">/ {product.unit}</span>
            </div>
          </div>
          
          <button 
            className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg shadow-secondary/20"
            aria-label={`Order ${product.name}`}
            onClick={() => window.open(`https://wa.me/6281234567890?text=Halo, saya ingin pesan ${product.name}`, '_blank')}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
