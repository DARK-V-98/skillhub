import { Check, Upload, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Pricing = () => {
  const tiers = [
    {
      name: "Silver Sponsor",
      price: "$500",
      period: "/month",
      description: "Support emerging educators and students",
      features: [
        "Logo placement on website footer",
        "Monthly newsletter mention",
        "Access to sponsor community",
        "Tax-deductible donation receipt",
        "Quarterly impact reports",
      ],
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Gold Sponsor",
      price: "$1,500",
      period: "/month",
      description: "Empower thousands of learners worldwide",
      features: [
        "Logo placement on homepage",
        "Featured in monthly newsletter",
        "Exclusive sponsor events",
        "Direct communication with team",
        "Monthly impact reports",
        "Social media recognition",
      ],
      color: "from-yellow-400 to-yellow-600",
      popular: true,
    },
    {
      name: "Platinum Sponsor",
      price: "$5,000",
      period: "/month",
      description: "Transform the future of education",
      features: [
        "Premium logo placement",
        "Dedicated sponsor page",
        "Co-branded content opportunities",
        "Executive sponsor meetings",
        "Weekly impact reports",
        "Priority support and recognition",
        "Custom partnership benefits",
      ],
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Sponsor</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with SkillHub to make quality education accessible to everyone. Your support empowers learners and educators worldwide.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${
                  tier.popular ? "border-primary border-2 shadow-card-hover" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pt-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl`}>
                    {tier.name.charAt(0)}
                  </div>
                  <CardTitle className="text-2xl text-center">{tier.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <label className="text-sm font-medium mb-2 block">Upload Your Logo</label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-primary hover:opacity-90"
                        : ""
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Become {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Donation Widget */}
          <Card className="max-w-2xl mx-auto bg-gradient-hero">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Make a One-Time Donation
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Every contribution helps us provide scholarships and improve our platform
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  min="1"
                  className="flex-1"
                  aria-label="Donation amount"
                />
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity sm:w-auto">
                  Donate Now
                </Button>
              </div>
              <div className="flex gap-2 mt-4 justify-center flex-wrap">
                {[25, 50, 100, 250].map((amount) => (
                  <Button key={amount} variant="outline" size="sm">
                    ${amount}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Sponsor SkillHub?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Make an Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Help provide quality education to underserved communities
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Brand Visibility</h3>
                <p className="text-sm text-muted-foreground">
                  Reach millions of learners and educators worldwide
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Tax Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  All sponsorships are tax-deductible
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
