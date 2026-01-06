import { useQuery } from "@tanstack/react-query";
import { STATIC_PRODUCTS } from "@/lib/static-data";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // Simulate network delay for better UX feel
      await new Promise((resolve) => setTimeout(resolve, 500));
      return STATIC_PRODUCTS;
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return STATIC_PRODUCTS.find((p) => p.id === id) || null;
    },
  });
}
