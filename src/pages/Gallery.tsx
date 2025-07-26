import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-thali.jpg";
import biryanImage from "@/assets/biryani-special.jpg";
import appetizerImage from "@/assets/appetizer-platter.jpg";
import dessertImage from "@/assets/gulab-jamun.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: heroImage,
      alt: "Traditional Indian Thali",
      category: "Main Course",
      title: "Traditional Thali",
    },
    {
      id: 2,
      src: biryanImage,
      alt: "Swadishtum Special Biryani",
      category: "Biryani",
      title: "Special Biryani",
    },
    {
      id: 3,
      src: appetizerImage,
      alt: "Fusion Appetizer Platter",
      category: "Starters",
      title: "Appetizer Platter",
    },
    {
      id: 4,
      src: dessertImage,
      alt: "Traditional Gulab Jamun",
      category: "Desserts",
      title: "Gulab Jamun",
    },
    // Duplicate some images for a fuller gallery
    {
      id: 5,
      src: heroImage,
      alt: "Elegant Food Presentation",
      category: "Main Course",
      title: "Elegant Presentation",
    },
    {
      id: 6,
      src: biryanImage,
      alt: "Aromatic Biryani",
      category: "Biryani",
      title: "Aromatic Delight",
    },
    {
      id: 7,
      src: appetizerImage,
      alt: "Colorful Starters",
      category: "Starters",
      title: "Colorful Starters",
    },
    {
      id: 8,
      src: dessertImage,
      alt: "Sweet Treats",
      category: "Desserts",
      title: "Sweet Treats",
    },
  ];

  const categories = ["All", "Main Course", "Biryani", "Starters", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Food Gallery
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-up">
              A visual feast of our most popular dishes and culinary artistry
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-background/50 backdrop-blur-sm sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 bg-card rounded-full p-2 shadow-warm">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-gradient-hero text-ivory shadow-warm"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer overflow-hidden border-0 shadow-warm hover:shadow-elegant transition-all duration-300 food-card"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-sm font-medium opacity-80">{item.category}</p>
                      <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-elegant"
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Taste What You See
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Every dish in our gallery is available for order. Experience these
              visual delights as culinary masterpieces delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-elegant bg-gradient-hero hover:shadow-glow px-8 py-3 rounded-md text-ivory font-medium">
                View Menu
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-3 rounded-md font-medium">
                Order Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;