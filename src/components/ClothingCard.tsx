import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ClothingItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ClothingCardProps {
  item: ClothingItem;
}

const ClothingCard = ({ item }: ClothingCardProps) => {
  const handleBuyNow = () => {
    const message = `Hi! I'm interested in the ${item.name} (Price: ${item.price}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group overflow-hidden bg-card shadow-card hover:shadow-elegant transition-elegant border-0 rounded-2xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {item.name}
        </h3>
        <p className="text-muted-custom mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-royal-maroon">
            {item.price}
          </span>
          <Button
            onClick={handleBuyNow}
            size="sm"
            className="bg-gradient-accent hover:bg-golden text-accent-foreground font-semibold transition-elegant shadow-card hover:shadow-glow"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;