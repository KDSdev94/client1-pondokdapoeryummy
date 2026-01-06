import { Phone, Mail, Instagram, Egg } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-12 space-y-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* 1. Logo (Desktop: Col 1, Row 1) */}
          <div className="md:col-start-1 md:row-start-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 md:mb-5 flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Egg className="w-8 h-8 text-white" />
              </div>
              <span className="font-display text-2xl font-bold">
                Pondok Dapoer Yummy
              </span>
            </div>
          </div>

          {/* 2. Deskripsi (Desktop: Col 1, Row 2) */}
          <div className="md:col-start-1 md:row-start-2 text-white leading-relaxed text-xs md:text-sm max-w-sm text-center md:text-left mx-auto md:mx-0">
            Pondok Dapoer Yummy adalah penyedia kuliner otentik yang menyajikan
            Telur Asin Masir, Sambel Rumahan, dan Bandeng Presto berkualitas
            tinggi sejak 2015.
          </div>

          {/* Wrapper for Contact & Social (Mobile: grid-cols-2, Desktop: contents) */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {/* 3. Kontak (Desktop: Col 2, Row 1) */}
            <div className="md:col-start-2 md:row-start-1">
              <h3 className="text-white md:text-lg font-semibold mb-3 md:mb-4">
                Kontak
              </h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="tel:+6281234567890"
                  className="flex items-center text-white hover:text-white transition-colors"
                >
                  <Phone size={16} className="mr-2 md:mr-3" />
                  <span className="text-xs md:text-sm">+62 812-3456-7890</span>
                </a>
                <a
                  href="mailto:info@dapoeryummy.com"
                  className="flex items-center text-white hover:text-white transition-colors"
                >
                  <Mail size={16} className="mr-2 md:mr-3" />
                  <span className="text-xs md:text-sm break-all">
                    info@dapoeryummy.com
                  </span>
                </a>
              </div>
            </div>

            {/* 4. Media Sosial (Desktop: Col 3, Row 1) */}
            <div className="md:col-start-3 md:row-start-1">
              <h3 className="text-white md:text-lg font-semibold mb-3 md:mb-4">
                Media Sosial
              </h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="https://www.instagram.com/pondokdapoeryummy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-white transition-colors"
                >
                  <Instagram size={16} className="mr-2 md:mr-3" />
                  <span className="text-xs md:text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span className="text-xs md:text-sm">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* 5. Alamat (Desktop: Col 1, Row 3) */}
          <div className="md:col-start-1 md:row-start-3 border-t border-white/20 pt-8 md:border-0 md:pt-0">
            <h3 className="text-white md:text-lg font-semibold mb-2">Alamat</h3>
            <p className="text-xs md:text-sm text-white leading-relaxed">
              Jl. Kuliner No. 123,
              <br />
              Jakarta Selatan – DKI Jakarta 12345
            </p>
          </div>

          {/* 6. Map (Desktop: Col 2, Row 2, Span 2 Rows, Span 2 Cols) */}
          <div className="md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2">
            <div className="w-full h-48 md:h-full md:min-h-[250px] rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Jakarta%20Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pondok Dapoer Yummy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center">
          <p className="text-sm md:text-lg font-semibold text-white">
            Copyright © {currentYear} Pondok Dapoer Yummy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
