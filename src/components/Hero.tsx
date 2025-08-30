import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onSeeMoreClick: () => void;
}

const Hero = ({ onSeeMoreClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-elegant overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-royal-maroon">Exquisite</span>{" "}
            <span className="text-golden">Traditional</span>
            <br />
            <span className="text-foreground">Craftsmanship</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-custom mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our handcrafted collection of traditional Indian garments, 
            where timeless elegance meets contemporary style. Each piece tells 
            a story of heritage and artistry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={onSeeMoreClick}
              size="lg"
              className="bg-royal-maroon hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold transition-elegant shadow-elegant hover:shadow-glow"
            >
              Explore Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-royal-maroon text-royal-maroon hover:bg-royal-maroon hover:text-white px-8 py-6 text-lg font-semibold transition-elegant"
            >
              View Catalog
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-custom" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-golden/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-royal-maroon/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;