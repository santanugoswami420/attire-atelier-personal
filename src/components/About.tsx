import logo from "@/assets/logo.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo and Brand */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <img 
                  src={logo} 
                  alt="Attire Atelier Logo" 
                  className="h-32 w-auto shadow-elegant rounded-2xl p-4 bg-warm-white"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-royal-maroon">About</span>{" "}
                <span className="text-golden">Attire Atelier</span>
              </h2>
            </div>

            {/* Company Story */}
            <div className="space-y-6">
              <p className="text-lg text-muted-custom leading-relaxed">
                Welcome to <strong className="text-royal-maroon">Attire Atelier</strong>, 
                where tradition meets elegance. We are passionate about preserving and 
                celebrating the rich heritage of Indian craftsmanship through our 
                carefully curated collection of traditional garments.
              </p>
              
              <p className="text-lg text-muted-custom leading-relaxed">
                Each piece in our collection is a testament to the skilled artisans 
                who pour their heart and soul into creating these masterpieces. From 
                intricate embroidery to hand-woven fabrics, every garment tells a 
                story of cultural richness and timeless beauty.
              </p>
              
              <p className="text-lg text-muted-custom leading-relaxed">
                Our mission is to connect modern fashion enthusiasts with the 
                authentic essence of traditional Indian wear. Whether you're looking 
                for a special occasion outfit or adding cultural elegance to your 
                wardrobe, <strong className="text-golden">Attire Atelier</strong> is 
                your trusted destination for premium traditional clothing.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-cream p-4 rounded-lg shadow-card">
                  <h4 className="font-semibold text-royal-maroon mb-2">Handcrafted Quality</h4>
                  <p className="text-sm text-muted-custom">Every piece is carefully crafted by skilled artisans</p>
                </div>
                <div className="bg-cream p-4 rounded-lg shadow-card">
                  <h4 className="font-semibold text-golden mb-2">Authentic Designs</h4>
                  <p className="text-sm text-muted-custom">Traditional patterns with contemporary appeal</p>
                </div>
                <div className="bg-cream p-4 rounded-lg shadow-card">
                  <h4 className="font-semibold text-royal-maroon mb-2">Premium Materials</h4>
                  <p className="text-sm text-muted-custom">Finest fabrics sourced from trusted suppliers</p>
                </div>
                <div className="bg-cream p-4 rounded-lg shadow-card">
                  <h4 className="font-semibold text-golden mb-2">Custom Orders</h4>
                  <p className="text-sm text-muted-custom">Personalized designs to match your vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;