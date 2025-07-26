import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import biryanImage from "@/assets/biryani-special.jpg";
import appetizerImage from "@/assets/appetizer-platter.jpg";
import dessertImage from "@/assets/gulab-jamun.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Biryani: A Journey Through Flavors",
      excerpt: "Discover the secrets behind creating the perfect biryani, from selecting the finest basmati rice to mastering the art of dum cooking.",
      image: biryanImage,
      author: "Chef Raj Mehta",
      date: "December 15, 2024",
      category: "Recipes",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Fusion Cuisine: Where Tradition Meets Innovation",
      excerpt: "Explore how modern Indian cuisine is evolving while staying true to its roots, creating exciting new flavor combinations.",
      image: appetizerImage,
      author: "Priya Sharma",
      date: "December 10, 2024",
      category: "Culinary Arts",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Sweet Endings: The History of Indian Desserts",
      excerpt: "From ancient times to modern day, learn about the rich heritage and cultural significance of Indian sweets and desserts.",
      image: dessertImage,
      author: "Dr. Ravi Kumar",
      date: "December 5, 2024",
      category: "Culture",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Spice Guide: Understanding Indian Aromatics",
      excerpt: "A comprehensive guide to the essential spices that make Indian cuisine so distinctive and flavorful.",
      author: "Chef Raj Mehta",
      date: "November 28, 2024",
      category: "Ingredients",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Healthy Indian Cooking: Nutritious and Delicious",
      excerpt: "Learn how to prepare traditional Indian dishes with a healthy twist, without compromising on taste.",
      author: "Nutritionist Meera",
      date: "November 20, 2024",
      category: "Health",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Regional Flavors: A Tour of India's Culinary Diversity",
      excerpt: "Journey through different states of India and discover the unique flavors and cooking techniques of each region.",
      author: "Travel Chef Arjun",
      date: "November 15, 2024",
      category: "Travel",
      readTime: "10 min read",
    },
  ];

  const categories = ["All", "Recipes", "Culinary Arts", "Culture", "Ingredients", "Health", "Travel"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Food Stories & Recipes
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-up">
              Discover the stories behind our dishes, cooking tips, and the rich culture of Indian cuisine
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <Badge className="bg-primary text-primary-foreground mb-4">Featured Story</Badge>
                <h2 className="font-display text-3xl font-bold text-gradient">Latest Article</h2>
              </div>
              
              <Card className="overflow-hidden shadow-elegant max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <Badge variant="outline">{featuredPost.category}</Badge>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{featuredPost.author}</span>
                      </div>
                      <Button className="btn-elegant bg-gradient-hero">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-background/50 backdrop-blur-sm">
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

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-300 food-card">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Stay Updated
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest recipes, cooking tips,
              and food stories delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-background text-foreground border border-border"
              />
              <Button className="btn-elegant bg-gradient-hero hover:shadow-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;