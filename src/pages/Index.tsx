import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Clock, Truck, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-thali.jpg";
import biryanImage from "@/assets/biryani-special.jpg";
import appetizerImage from "@/assets/appetizer-platter.jpg";
import dessertImage from "@/assets/gulab-jamun.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredDishes = [
    {
      name: "Swadishtum Special Biryani",
      description: "Aromatic saffron rice with tender meat and traditional spices",
      price: "₹399",
      image: biryanImage,
      rating: 4.9,
      badge: "Bestseller",
    },
    {
      name: "Fusion Appetizer Platter",
      description: "Crispy samosas, tandoori skewers, and colorful chutneys",
      price: "₹299",
      image: appetizerImage,
      rating: 4.8,
      badge: "Chef's Special",
    },
    {
      name: "Traditional Gulab Jamun",
      description: "Golden dumplings in aromatic cardamom-scented syrup",
      price: "₹149",
      image: dessertImage,
      rating: 4.7,
      badge: "Traditional",
    },
  ];

  const testimonials = [
    {
      name: "Gitesh Deshmukh",
      location: "Pune",
      rating: 5,
      text: "Absolutely incredible flavors! The biryani reminds me of my grandmother's cooking. Swadishtum has truly mastered the art of authentic Indian cuisine.",
    },
    {
      name: "Mayur Pawar",
      location: "Hinjewadi",
      rating: 5,
      text: "Fast delivery and amazing taste! The fusion dishes are innovative yet respectful of traditional flavors. Highly recommended for food lovers.",
    },
    {
      name: "Aditya Mahajan",
      location: "Viman Nagar",
      rating: 5,
      text: "The quality is consistently excellent. Every dish tells a story of passion and authenticity. Swadishtum has become our family's favorite!",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "30-Min Delivery",
      description: "Fresh, hot meals delivered to your doorstep",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest ingredients and traditional recipes",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and care",
    },
    {
      icon: Truck,
      title: "Wide Coverage",
      description: "Serving across Mumbai and expanding",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 animate-fade-up">
                <span className="block">Swad ka</span>
                <span className="text-gradient">Asli Swad!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-up">
                Experience the authentic taste of India with our premium
                gourmet meals, fusion cuisine, and lightning-fast delivery
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
                <Link to="/order">
                  <Button
                    size="lg"
                    className="btn-elegant bg-gradient-hero hover:shadow-glow text-lg px-8 py-6"
                  >
                    Order Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-white text-primary hover:bg-white hover:text-black"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          {/* Removed scroll indicator mouse icon */}
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center p-6 shadow-warm food-card">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-ivory" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2 text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                Featured Dishes
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our most beloved creations, each dish crafted with
                passion and authentic flavors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDishes.map((dish, index) => (
                <Card key={index} className="group overflow-hidden shadow-elegant food-card">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {dish.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                        {dish.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{dish.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{dish.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-bold text-primary">
                        {dish.price}
                      </span>
                      <Button className="btn-elegant bg-gradient-hero">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Full Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-primary">
                What Our Customers Say
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have experienced the
                magic of Swadishtum
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 lg:p-12 shadow-elegant">
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience
              <br />
              Authentic Flavors?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Order now and taste the difference that passion, quality, and
              tradition make in every bite
            </p>
            <Link to="/order">
              <Button
                size="lg"
                className="bg-ivory text-secondary hover:bg-ivory/90 text-xl px-12 py-6 font-bold"
              >
                Start Your Order
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
