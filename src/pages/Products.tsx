import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/products/SearchBar";
import ProductCard from "@/components/products/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      image: "/logo.jpeg",
      nameAr: "تونة المخطاف",
      nameEn: "Al Mkhtaf Tuna",
      descAr: "سكيب جاك فاخر 140 جرام",
      descEn: "Skipjack Tuna 140g",
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) => {
    const name = language === "ar" ? product.nameAr : product.nameEn;
    const desc = language === "ar" ? product.descAr : product.descEn;
    const query = searchQuery.toLowerCase();
    return (
      name.toLowerCase().includes(query) || desc.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-secondary/20">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-primary to-navy text-white pattern-overlay">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("products.title")}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={language === "ar" ? product.nameAr : product.nameEn}
              description={language === "ar" ? product.descAr : product.descEn}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              {language === "ar"
                ? "لم يتم العثور على منتجات"
                : "No products found"}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
