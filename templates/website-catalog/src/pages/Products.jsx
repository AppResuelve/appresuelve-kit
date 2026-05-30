import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { siteData, content } from "../data/siteData";
import { categories } from "../data/categories";
import { searchProducts } from "../data/products";
import { ProductGrid } from "../components/ProductGrid";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { SectionHeader } from "../components/ui/SectionHeader";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { title, subtitle, noResults, clearFilters } = content.products;

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = searchProducts(searchQuery, selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "Todos") {
      setSearchParams({});
    } else {
      setSearchParams({ cat: category });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "Todos";

  return (
    <section className="pt-20 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={content.products.badge}
          title={title}
          subtitle={subtitle}
          className="mb-8"
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {siteData.catalog.showSearch && (
                <div className="flex-1">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Buscar productos..."
                  />
                </div>
              )}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-primary)] font-medium"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filtros
              </button>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {filteredProducts.length} producto
                  {filteredProducts.length !== 1 ? "s" : ""} encontrado
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-cyan-400 hover:underline"
                >
                  {clearFilters}
                </button>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {noResults}
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-cyan-400 font-medium hover:underline"
                >
                  {clearFilters}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
