import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import biryanImage from "@/assets/biryani-special.jpg";
import appetizerImage from "@/assets/appetizer-platter.jpg";
import dessertImage from "@/assets/gulab-jamun.jpg";

const Menu = () => {
  const menuCategories = [
    {
      title: "Main Course",
      items: [
        {
          name: "Ghee Phulka Roti (Pack of 3)",
          description: "Garma Garam Soft Whole Wheat Phulka Rotis Made With Desi Ghee.",
          price: "₹79",
          vegetarian: true,
        },
        {
          name: "Ghee Phulka Roti (Pack of 9)",
          description: "Garma Garam Soft Whole Wheat Phulka Rotis Made With Desi Ghee.",
          price: "₹199",
          vegetarian: true,
        },
        {
          name: "Masala Basmati Rice (400 Gm- Family Pack)",
          description: "Extra Long Grain Basmati Rice Dum Cooked With Whole Spices And Desi Ghee.",
          price: "₹169",
          vegetarian: true,
        },
        {
          name: "Steamed Basmati Rice (400 Gm- Family Pack)",
          description: "Extra Long Grain Basmati Rice Flavoured With Mild And Aromatic Desi Ghee.",
          price: "₹149",
          vegetarian: true,
        },
        {
          name: "Masala Raita (100 Gm)",
          description: "Perfect Way To Complement Your Feast. Thick Masala Raita With Notes Of Cumin And Fresh Mint.",
          price: "₹35",
          vegetarian: true,
        },
        {
          name: "Desi Dal Tadka",
          description: "Toor Dal Is Cooked In Ghee Tadka With Desi Spices And Garlic.",
          price: "₹139",
          vegetarian: true,
        },
        {
          name: "Punjabi Kadhi Pakoda",
          description: "Tangi, Creamy Savoury Kadhi With Onion Pakodas, Richly Flavoured With Spices And Cooked In Traditional Punjabi Style.",
          price: "₹139",
          vegetarian: true,
        },
        {
          name: "Delhi Wale Rajma",
          description: "Inspired From The Streets Of Delhi. Its Slow Cooked To Perfection. One of The Best Rajmas You Would Have!",
          price: "₹139",
          vegetarian: true,
          bestseller: true,
        },
        {
          name: "Amritsari Chole",
          description: "A Recipe Borrowed From Legendary Chefs Of Amritsar. A Truly Authentic Experience!",
          price: "₹139",
          vegetarian: true,
        },
        {
          name: "Dal Makhani",
          description: "Our Dal Makhani Is Slow Cooked Overnight With Whole Spices And Fresh Cream. As Traditional As It Gets!",
          price: "₹149",
          vegetarian: true,
        },
        {
          name: "Aloo Matar",
          description: "Smoky Tandoori Aloo And Fresh Green Peas Simmered In A Flavourful Masala Curry Of Onion, Tomato. A Classic Blend Of Flavours!",
          price: "₹139",
          vegetarian: true,
        },
        {
          name: "Aloo Palak",
          description: "Tandoori Smoked Aloo In A Curry Of Spinach, Cashew, Butter And Masalas. Simple Yet So Flavorful!",
          price: "₹139",
          vegetarian: true,
        },
        {
          name: "Banarasi Dum Aloo",
          description: "Authentic Banarasi Dum Aloo Cooked In A Delicious Tomato Curry Made Of Aromatic Spices. Taste Dum-daar!",
          price: "₹169",
          vegetarian: true,
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Our Menu
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-up">
              Explore our carefully crafted dishes that celebrate the rich
              flavors of India
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {menuCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-16">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12 text-gradient">
                  {category.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={item.name}
                      className="food-card group relative overflow-hidden border-0 shadow-warm"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-display text-xl font-semibold">
                            {item.name}
                          </h3>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.bestseller && (
                            <Badge className="bg-primary text-primary-foreground">
                              Bestseller
                            </Badge>
                          )}
                          {item.vegetarian && (
                            <Badge variant="outline" className="text-cardamom-green border-cardamom-green">
                              Vegetarian
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-display text-2xl font-bold text-primary">
                            {item.price}
                          </span>
                          <Button size="sm" className="btn-elegant bg-gradient-hero">
                            <Plus className="w-4 h-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Ready to Order?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Experience the authentic taste of Swadishtum delivered fresh to
              your doorstep
            </p>
            <Button
              size="lg"
              className="btn-elegant bg-gradient-hero hover:shadow-glow text-lg px-8 py-6"
            >
              Start Your Order
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Menu;