import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Taste",
      description: "We preserve traditional recipes while adding modern twists to create unforgettable flavors.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service ensuring your food arrives fresh and hot.",
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      description: "Only the finest spices and ingredients sourced directly from trusted suppliers.",
    },
    {
      icon: Users,
      title: "Community Love",
      description: "Building connections through food, bringing families and friends together.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              About Swadishtum
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-up">
              Where tradition meets innovation to bring you the most authentic
              and delicious Indian cuisine
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-gradient">
                  Our Story
                </h2>
                <p className="text-lg leading-relaxed">
                  Swadishtum was born from a passion for sharing the incredible
                  diversity and richness of Indian flavors with the world. Our
                  journey began in the kitchens of Pune, where traditional
                  recipes passed down through generations met innovative
                  culinary techniques.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that food is more than just sustenance—it's a
                  bridge between cultures, a celebration of heritage, and a way
                  to create lasting memories. Every dish we prepare tells a
                  story of tradition, craftsmanship, and love.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Swadishtum continues to honor these traditions while
                  embracing modern conveniences, bringing you restaurant-quality
                  meals with the speed and convenience of quick delivery.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-6 text-center shadow-warm">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-ivory font-bold text-xl">5+</span>
                      </div>
                      <p className="font-semibold">Years Experience</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center shadow-warm">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-ivory font-bold text-xl">50+</span>
                      </div>
                      <p className="font-semibold">Signature Dishes</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="p-6 text-center shadow-warm">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-ivory font-bold text-xl">10k+</span>
                      </div>
                      <p className="font-semibold">Happy Customers</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center shadow-warm">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-ivory font-bold text-xl">30</span>
                      </div>
                      <p className="font-semibold">Minutes Delivery</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Our Mission & Values
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                We're committed to bringing you the finest Indian cuisine while
                maintaining the highest standards of quality, service, and
                authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center p-6 shadow-warm bg-card">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-ivory" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-4 text-primary">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Course Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12 text-gradient">
              Main Course
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ghee Phulka Roti (Pack of 3) */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Ghee Phulka Roti (Pack of 3)</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹79</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Garma Garam Soft Whole Wheat Phulka Rotis Made With Desi Ghee.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Ghee Phulka Roti (Pack of 9) */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Ghee Phulka Roti (Pack of 9)</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹199</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Garma Garam Soft Whole Wheat Phulka Rotis Made With Desi Ghee.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Masala Basmati Rice (400 Gm- Family Pack) */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Masala Basmati Rice (400 Gm- Family Pack)</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹169</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Extra Long Grain Basmati Rice Dum Cooked With Whole Spices And Desi Ghee.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Steamed Basmati Rice (400 Gm- Family Pack) */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Steamed Basmati Rice (400 Gm- Family Pack)</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹149</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Extra Long Grain Basmati Rice Flavoured With Mild And Aromatic Desi Ghee.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Masala Raita (100 Gm) */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Masala Raita (100 Gm)</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹35</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Perfect Way To Complement Your Feast. Thick Masala Raita With Notes Of Cumin And Fresh Mint.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Desi Dal Tadka */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Desi Dal Tadka</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹139</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Toor Dal Is Cooked In Ghee Tadka With Desi Spices And Garlic.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Punjabi Kadhi Pakoda */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Punjabi Kadhi Pakoda</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹139</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Tangi, Creamy Savoury Kadhi With Onion Pakodas, Richly Flavoured With Spices And Cooked In Traditional Punjabi Style.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Delhi Wale Rajma */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Delhi Wale Rajma</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹139</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Inspired From The Streets Of Delhi. Its Slow Cooked To Perfection. <i>One of The Best Rajmas You Would Have!</i></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Amritsari Chole */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Amritsari Chole</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹139</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">A Recipe Borrowed From Legendary Chefs Of Amritsar. <i>A Truly Authentic Experience!</i></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Dal Makhani */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Dal Makhani</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹149</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Our Dal Makhani Is Slow Cooked Overnight With Whole Spices And Fresh Cream. <i>As Traditional As It Gets!</i></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Aloo Matar */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Aloo Matar</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹139</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Smoky Tandoori Aloo And Fresh Green Peas Simmered In A Flavourful Masala Curry Of Onion, Tomato. <i>A Classic Blend Of Flavours!</i></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Aloo Palak */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Aloo Palak</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹139</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Tandoori Smoked Aloo In A Curry Of Spinach, Cashew, Butter And Masalas. <i>Simple Yet So Flavorful!</i></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Banarasi Dum Aloo */}
              <Card className="food-card group relative overflow-hidden border-0 shadow-warm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">Banarasi Dum Aloo</h3>
                    <span className="font-display text-2xl font-bold text-primary">₹169</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Authentic Banarasi Dum Aloo Cooked In A Delicious Tomato Curry Made Of Aromatic Spices. <i>Taste Dum-daar!</i></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-cardamom-green border-cardamom-green">Vegetarian</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;