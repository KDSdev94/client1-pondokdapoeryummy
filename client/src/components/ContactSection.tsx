import { useState } from "react";
import { Phone, Instagram, MapPin } from "lucide-react";
import { useProducts } from "@/hooks/use-products";

export function ContactSection() {
  const { data: products } = useProducts();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = "6282327361091";
    const productText = selectedProduct
      ? `Saya tertarik dengan produk: ${selectedProduct}.`
      : "";
    const text = `Halo Pondok Dapoer Yummy! %0A%0ANama: ${name} %0AWA: ${phone} %0A%0A${productText} %0A%0APesan: ${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Siap Untuk Mencoba?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-md">
              Hubungi kami untuk pemesanan atau pertanyaan seputar produk kami.
              Kami siap melayani pengiriman ke seluruh kota.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="tel:+6282327361091"
                className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">+62 823-2736-1091</span>
              </a>

              <a
                href="https://instagram.com/pondokdapoeryummy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">@pondokdapoeryummy</span>
              </a>
              <div className="flex items-center gap-4 text-white/90 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">
                  Jl. Kuliner No. 123, Jakarta Selatan
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 text-secondary shadow-2xl">
            <form className="space-y-6" onSubmit={handleWhatsAppOrder}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="08xx-xxxx-xxxx"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  Pilih Produk (Opsional)
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                >
                  <option value="">-- Pilih Produk --</option>
                  {products?.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Pesan</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  placeholder="Halo, saya ingin bertanya tentang..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Kirim Pesan ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
