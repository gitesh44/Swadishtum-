import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtitle: "Call us anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Kalas,Vishrantwadi"],
      subtitle: "Visit our kitchen",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Sun: 10:00 AM - 11:00 PM", "Kitchen closes at 10:30 PM"],
      subtitle: "We're here for you",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@swadishtum.com", "orders@swadishtum.com"],
      subtitle: "Drop us a line",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-up">
              We'd love to hear from you. Get in touch with any questions or
              feedback
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-4 text-gradient">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground">
                    Whether you have questions about our menu, want to place a
                    special order, or just want to share your experience, we're
                    here to help.
                  </p>
                </div>

                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="shadow-warm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-ivory" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {info.subtitle}
                            </p>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Social Media */}
                <Card className="shadow-warm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-ivory" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Follow Us</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Stay updated with our latest dishes
                        </p>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors">
                            Instagram
                          </button>
                          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors">
                            Facebook
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Your first name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Your last name" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What's this about?" />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us what's on your mind..."
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full btn-elegant bg-gradient-hero hover:shadow-glow"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-4 text-primary">
                Find Us Here
              </h2>
              <p className="text-secondary-foreground opacity-80">
                Located in the heart of Mumbai, easy to reach and even easier to love
              </p>
            </div>
            
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    123 Food Street, Bandra West<br />
                    Mumbai, Maharashtra 400050
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;