import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ClothingCard from "./ClothingCard";
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
    description: "Exquisite maroon blouse with intricate golden embroidery and traditional patterns."
  },
  {
    id: 2,
    name: "Classic Red Blouse",
    price: "₹2,200",
    image: clothing2,
    description: "Elegant red blouse with button details and beautiful traditional embroidery work."
  },
  {
    id: 3,
    name: "Folk Art Blouse",
    price: "₹1,800",
    image: clothing3,
    description: "White blouse featuring colorful folk art patterns and hand block printed designs."
  },
  {
    id: 4,
    name: "Emerald Silk Saree",
    price: "₹4,500",
    image: clothing4,
    description: "Luxurious turquoise saree with intricate paisley patterns and gold border work."
  },
  {
    id: 5,
    name: "Heritage Blouse",
    price: "₹2,800",
    image: clothing1,
    description: "Traditional heritage blouse with mirror work and authentic craftsmanship."
  },
  {
    id: 6,
    name: "Designer Collection",
    price: "₹3,200",
    image: clothing2,
    description: "Contemporary designer piece blending modern aesthetics with traditional elements."
  }
];

interface GalleryProps {
  showAll?: boolean;
}

const Gallery = ({ showAll = false }: GalleryProps) => {
  const [showAllItems] = useState(showAll);
  const navigate = useNavigate();
  const displayItems = showAllItems ? clothingItems : clothingItems.slice(0, 3);

  return (
    <section id="gallery" className="py-16 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-royal-maroon">Our</span>{" "}
            <span className="text-golden">Collection</span>
          </h2>
          <p className="text-lg text-muted-custom max-w-2xl mx-auto">
            Handpicked selection of traditional garments crafted with love and attention to detail
          </p>
        </div>

        {/* Clothing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayItems.map((item) => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>

        {/* See More Button */}
        {!showAllItems && (
          <div className="text-center">
            <Button
              onClick={() => navigate("/catalog")}
              size="lg"
              variant="outline"
              className="border-royal-maroon text-royal-maroon hover:bg-royal-maroon hover:text-white px-8 py-6 text-lg font-semibold transition-elegant"
            >
              See More Collections
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;