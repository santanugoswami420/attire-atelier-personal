import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ClothingCard from "@/components/ClothingCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import clothing1 from "@/assets/clothing1.jpg";
import clothing2 from "@/assets/clothing2.jpg";
import clothing3 from "@/assets/clothing3.jpg";
import clothing4 from "@/assets/clothing4.jpg";

const clothingItems = [
  {
    id: 1,
    name: "Royal Maroon Blouse",
    price: "₹2,500",
    image: clothing1,
    description: "Exquisite maroon blouse with intricate golden embroidery and traditional patterns.",
    category: "Blouse"
  },
  {
    id: 2,
    name: "Classic Red Blouse",
    price: "₹2,200",
    image: clothing2,
    description: "Elegant red blouse with button details and beautiful traditional embroidery work.",
    category: "Blouse"
  },
  {
    id: 3,
    name: "Folk Art Blouse",
    price: "₹1,800",
    image: clothing3,
    description: "White blouse featuring colorful folk art patterns and hand block printed designs.",
    category: "Blouse"
  },
  {
    id: 4,
    name: "Emerald Silk Saree",
    price: "₹4,500",
    image: clothing4,
    description: "Luxurious turquoise saree with intricate paisley patterns and gold border work.",
    category: "Saree"
  },
  {
    id: 5,
    name: "Heritage Blouse",
    price: "₹2,800",
    image: clothing1,
    description: "Traditional heritage blouse with mirror work and authentic craftsmanship.",
    category: "Blouse"
  },
  {
    id: 6,
    name: "Designer Collection Blouse",
    price: "₹3,200",
    image: clothing2,
    description: "Contemporary designer piece blending modern aesthetics with traditional elements.",
    category: "Blouse"
  },
  {
    id: 7,
    name: "Traditional Punjabi Suit",
    price: "₹3,800",
    image: clothing3,
    description: "Beautiful Punjabi suit with vibrant colors and traditional embroidery work.",
    category: "Punjabi"
  },
  {
    id: 8,
    name: "Golden Border Saree",
    price: "₹5,200",
    image: clothing4,
    description: "Elegant saree with intricate golden border and traditional motifs.",
    category: "Saree"
  },
  {
    id: 9,
    name: "Modern Punjabi Dress",
    price: "₹2,900",
    image: clothing1,
    description: "Contemporary Punjabi dress with modern cuts and traditional patterns.",
    category: "Punjabi"
  },
  {
    id: 10,
    name: "Festive Blouse Collection",
    price: "₹3,500",
    image: clothing2,
    description: "Perfect for festivals and special occasions with rich embroidery work.",
    category: "Blouse"
  },
  {
    id: 11,
    name: "Bridal Saree Collection",
    price: "₹8,500",
    image: clothing3,
    description: "Luxurious bridal saree with heavy work and premium silk fabric.",
    category: "Saree"
  },
  {
    id: 12,
    name: "Casual Punjabi Wear",
    price: "₹2,200",
    image: clothing4,
    description: "Comfortable and stylish Punjabi wear for everyday occasions.",
    category: "Punjabi"
  }
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