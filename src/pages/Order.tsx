import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, CreditCard, Truck } from "lucide-react";

const Order = () => {
  const deliveryOptions = [
    { id: "standard", name: "Standard Delivery", time: "45-60 mins", price: "₹29" },
    { id: "express", name: "Express Delivery", time: "25-35 mins", price: "₹59" },
    { id: "premium", name: "Premium Delivery", time: "15-25 mins", price: "₹99" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-ivory">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Place Your Order
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-up">
              Fresh, authentic flavors delivered right to your doorstep
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Delivery Address */}
                <Card className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Delivery Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Textarea id="address" placeholder="House/Flat number, Building name, Street" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Mumbai" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="bangalore">Karnataka</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input id="pincode" placeholder="400001" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Options */}
                <Card className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Delivery Options</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {deliveryOptions.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="delivery"
                              value={option.id}
                              className="text-primary"
                            />
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {option.time}
                              </p>
                            </div>
                          </div>
                          <span className="font-bold text-primary">{option.price}</span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span>Payment Method</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                        <input type="radio" name="payment" value="card" className="text-primary" />
                        <span>Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                        <input type="radio" name="payment" value="upi" className="text-primary" />
                        <span>UPI Payment</span>
                      </label>
                      <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                        <input type="radio" name="payment" value="cod" className="text-primary" />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="shadow-warm sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Cart Items */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <div>
                          <p className="font-medium">Swadishtum Special Biryani</p>
                          <p className="text-sm text-muted-foreground">Qty: 2</p>
                        </div>
                        <span className="font-bold">₹798</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <div>
                          <p className="font-medium">Paneer Tikka</p>
                          <p className="text-sm text-muted-foreground">Qty: 1</p>
                        </div>
                        <span className="font-bold">₹249</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <div>
                          <p className="font-medium">Gulab Jamun</p>
                          <p className="text-sm text-muted-foreground">Qty: 1</p>
                        </div>
                        <span className="font-bold">₹149</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹1,196</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>₹59</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (5%)</span>
                        <span>₹60</span>
                      </div>
                      <div className="border-t border-border pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-primary">₹1,315</span>
                        </div>
                      </div>
                    </div>

                    {/* Place Order Button */}
                    <Button
                      className="w-full btn-elegant bg-gradient-hero hover:shadow-glow text-lg py-6 mt-6"
                    >
                      Place Order - ₹1,315
                    </Button>

                    {/* Estimated Delivery */}
                    <div className="text-center text-sm text-muted-foreground mt-4">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Estimated delivery: 25-35 mins
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Order;