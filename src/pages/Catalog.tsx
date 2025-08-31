import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ClothingCard from "@/components/ClothingCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Helper to get images by category and filename
const getImage = (category: string, filename: string) => {
  switch (category) {
    case "Blouse":
      return `/src/assets/blouse/${filename}`;
    case "Saree":
      return `/src/assets/sarees/${filename}`;
    case "Punjabi":
      return `/src/assets/punjabi/${filename}`;
    default:
      return `/src/assets/${filename}`;
  }
};

// Images for each category
const blouseImages = [
  "photo_2025-08-04_10-04-38.jpg",
  "photo_2025-08-04_10-04-41.jpg",
  "photo_2025-08-04_10-04-42.jpg",
  "photo_2025-08-04_10-04-56.jpg",
  "photo_2025-08-04_10-05-04.jpg",
  "photo_2025-08-04_10-05-12.jpg",
  "photo_2025-08-04_10-06-17.jpg",
  "photo_2025-08-04_10-06-21.jpg",
  "photo_2025-08-04_10-06-43.jpg",
  "photo_2025-08-04_10-06-49.jpg",
];
const sareeImages = [
  "photo_2025-08-04_10-04-02.jpg",
  "photo_2025-08-04_10-04-26.jpg",
  "photo_2025-08-04_10-04-29.jpg",
  "photo_2025-08-04_10-04-34.jpg",
  "photo_2025-08-04_10-04-35.jpg",
  "photo_2025-08-04_10-04-49.jpg",
  "photo_2025-08-04_10-05-47.jpg",
  "photo_2025-08-04_10-05-51.jpg",
];
const punjabiImages = [
  "punjabi1.jpg",
  "punjabi2.jpg",
  "punjabi3.jpg",
];

// Example items for each category, mapped to images from folders
const clothingItems = [
  // Blouse
  ...blouseImages.map((img, idx) => ({
    id: idx + 1,
    name: `Blouse Design ${idx + 1}`,
    // price removed
    image: getImage("Blouse", img),
    description: "Handcrafted blouse with unique embroidery and traditional design.",
    category: "Blouse"
  })),
  // Saree
  ...sareeImages.map((img, idx) => ({
    id: 100 + idx + 1,
    name: `Saree Design ${idx + 1}`,
    // price removed
    image: getImage("Saree", img),
    description: "Elegant saree with premium fabric and intricate patterns.",
    category: "Saree"
  })),
  // Punjabi
  ...punjabiImages.map((img, idx) => ({
    id: 200 + idx + 1,
    name: `Punjabi Design ${idx + 1}`,
    // price removed
    image: getImage("Punjabi", img),
    description: "Traditional Punjabi wear with vibrant colors and embroidery.",
    category: "Punjabi"
  })),
];

const categories = ["All", "Saree", "Blouse", "Punjabi"];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? clothingItems 
    : clothingItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar 
        onAboutClick={() => window.location.href = '/#about'}
        onContactClick={() => window.location.href = '/#contact'}
      />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-8 bg-gradient-elegant">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-royal-maroon hover:bg-royal-maroon/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-royal-maroon">Our Complete</span>{" "}
                <span className="text-golden">Collection</span>
              </h1>
              <p className="text-lg text-muted-custom max-w-2xl mx-auto mb-8">
                Explore our entire range of traditional Indian garments crafted with precision and love
              </p>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 text-sm font-medium transition-elegant ${
                      selectedCategory === category
                        ? "bg-royal-maroon text-white hover:bg-royal-maroon/90"
                        : "text-royal-maroon border-royal-maroon hover:bg-royal-maroon hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-muted-custom">
                Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} 
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <ClothingCard key={item.id} item={item} />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-custom text-lg">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;