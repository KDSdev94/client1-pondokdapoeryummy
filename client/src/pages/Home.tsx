import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useProducts } from "@/hooks/use-products";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Award, Heart } from "lucide-react";

// Fallback images if picsum is slow/down
// Using unplash for high quality food images
const HERO_BG =
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=2560&auto=format&fit=crop";
// Rustic wooden table with food

export default function Home() {
  const { data: products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Telur Asin", "Sambel", "Bandeng Presto"];

  const filteredProducts = products?.filter((product) => {
    if (selectedCategory === "Semua") return true;
    return product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG}
            alt="Delicious food background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-bold mb-6 backdrop-blur-sm shadow-lg">
                Sejak 2015
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Cita Rasa <span className="text-primary italic">Otentik</span>{" "}
                <br />
                Di Setiap Gigitan
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light">
                Nikmati kelezatan Telur Asin Masir, Sambel Rumahan, dan Bandeng
                Presto yang dibuat dengan resep warisan keluarga.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Lihat Menu Kami
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                >
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Stats Section */}
      <section
        id="about"
        className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {/* Culinary prep scene */}
                <img
                  src="https://pixabay.com/get/gb260e920d55cd6a4dc72c13e02e8fda70d3d4815c7165bb4cf5aa81a214099ec8a33a399773ac728c9dfebf3ad62169acd81b217f0053e76657532d97722fa4e_1280.jpg"
                  alt="Cooking process"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover -mt-12"
                />
                {/* Fresh ingredients */}
                <img
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80"
                  alt="Fresh ingredients"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-12"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Tentang Kami
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
                Warisan Rasa yang Terjaga Kualitasnya
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Pondok Dapoer Yummy bermula dari dapur rumah sederhana di tahun
                2015. Kami percaya bahwa makanan yang lezat berasal dari
                bahan-bahan terbaik and ketulusan dalam mengolahnya. Setiap
                produk kami dibuat fresh, tanpa pengawet buatan, and dijamin
                100% Halal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: ChefHat, label: "Produk Unggulan", value: "3+" },
                  { icon: Heart, label: "Pelanggan Puas", value: "1k+" },
                  { icon: Award, label: "Jaminan Mutu", value: "100%" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-amber-50 p-6 rounded-2xl text-center hover:bg-primary/10 transition-colors"
                  >
                    <stat.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                    <div className="text-3xl font-bold text-secondary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="products" className="py-24 bg-amber-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Katalog Menu
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
              Pilihan Favorit Keluarga
            </h2>
            <p className="text-lg text-muted-foreground">
              Jelajahi berbagai pilihan menu otentik kami yang siap memanjakan
              lidah Anda.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-white text-secondary hover:bg-primary/10 border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-white rounded-3xl h-[500px] animate-pulse shadow-sm border border-border/50"
                />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-destructive/20">
              <p className="text-destructive font-semibold">
                Gagal memuat produk. Silakan coba lagi nanti.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredProducts?.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
