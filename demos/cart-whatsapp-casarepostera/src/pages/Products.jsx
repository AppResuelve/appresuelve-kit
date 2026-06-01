import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { content } from "../data/siteData";
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
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const { title, subtitle, noResults, clearFilters } = content.products;

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFilterOpen]);

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
    <section className="pt-10 md:pt-20 pb-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
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
            <div className="max-md:sticky max-md:top-[calc(4rem+12px)] max-md:z-30 mb-6">
              <div className="flex flex-row gap-3 items-center">
                <div className="flex-1">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Buscar productos..."
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden shrink-0 h-11 flex items-center gap-2 px-3 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-primary)]"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  {!isSearchFocused && (
                    <span className="text-sm font-medium">Filtros</span>
                  )}
                </button>
              </div>
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
                  className="text-sm text-[var(--color-primary)] hover:underline"
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
                  className="text-[var(--color-primary)] font-medium hover:underline"
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
