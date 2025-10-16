
import { Check, Heart, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const tiers = [
  {
    name: "Silver Sponsor",
    price: "$500",
    period: "/month",
    description: "Support emerging educators and students.",
    features: [
      "Logo placement on website footer",
      "Monthly newsletter mention",
      "Access to sponsor community",
      "Tax-deductible donation receipt",
    ],
    color: "bg-slate-500"
  },
  {
    name: "Gold Sponsor",
    price: "$1,500",
    period: "/month",
    description: "Empower thousands of learners worldwide.",
    features: [
      "Logo placement on homepage",
      "Featured in monthly newsletter",
      "Exclusive sponsor events",
      "Social media recognition",
    ],
    popular: true,
    color: "bg-yellow-500"
  },
  {
    name: "Platinum Sponsor",
    price: "$5,000",
    period: "/month",
    description: "Transform the future of education.",
    features: [
      "Premium logo placement",
      "Dedicated sponsor page",
      "Co-branded content opportunities",
      "Executive sponsor meetings",
    ],
     color: "bg-primary"
  },
];

export default function SponsorPage() {
  return (
    <div className="container py-12 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl animate-fade-in-up">Become a Sponsor</h1>
        <p className="mx-auto mt-4 max-w-3xl text-md md:text-lg text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Partner with SkillHub to make quality education accessible to everyone. Your support empowers learners and educators worldwide.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <div key={tier.name} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.3}s`}}>
          <Card className={`flex flex-col ${tier.popular ? 'border-2 border-primary shadow-lg' : ''} h-full`}>
            {tier.popular && (
              <div className="py-1 px-3 text-sm font-semibold text-primary-foreground bg-primary text-center">Most Popular</div>
            )}
            <CardHeader className="items-center text-center">
              <div className={`w-16 h-16 rounded-full ${tier.color} mb-4 flex items-center justify-center text-white font-bold text-2xl`}>
                {tier.name.charAt(0)}
              </div>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground h-10">{tier.description}</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <label className="mb-2 block text-sm font-medium">Upload Your Logo</label>
                <div className="flex h-24 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed text-center hover:border-primary">
                    <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                        <p className="mt-1 text-sm text-muted-foreground">Click or drag to upload</p>
                    </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                Become {tier.name}
              </Button>
            </CardFooter>
          </Card>
          </div>
        ))}
      </div>
      
      <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <Card className="mx-auto mt-16 max-w-2xl bg-secondary/30">
          <CardHeader className="text-center">
              <div className="flex justify-center items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Make a One-Time Donation</CardTitle>
              </div>
            <p className="text-muted-foreground">
              Every contribution helps us provide scholarships and improve our platform.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input type="number" placeholder="Enter amount" min="1" aria-label="Donation amount" />
              <Button className="w-full sm:w-auto">Donate Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
