import { useState } from "react";
import { Type, Eye, Captions, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Accessibility = () => {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    dyslexiaFont: false,
    captionSize: "medium",
    captionPosition: "bottom",
  });

  const handleSave = () => {
    console.log("Saving accessibility settings:", settings);
    // Save settings to localStorage or backend
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Accessibility Settings</h1>
            <p className="text-muted-foreground text-lg">
              Customize your learning experience to match your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Visual Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <CardTitle>Visual Settings</CardTitle>
                </div>
                <CardDescription>Adjust display and visual preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="high-contrast">High Contrast Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enhance contrast for better visibility
                    </p>
                  </div>
                  <Switch
                    id="high-contrast"
                    checked={settings.highContrast}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, highContrast: checked })
                    }
                    aria-label="Toggle high contrast mode"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="large-text">Large Text</Label>
                    <p className="text-sm text-muted-foreground">
                      Increase text size across the platform
                    </p>
                  </div>
                  <Switch
                    id="large-text"
                    checked={settings.largeText}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, largeText: checked })
                    }
                    aria-label="Toggle large text"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dyslexia-font">Dyslexia-Friendly Font</Label>
                    <p className="text-sm text-muted-foreground">
                      Use OpenDyslexic font for easier reading
                    </p>
                  </div>
                  <Switch
                    id="dyslexia-font"
                    checked={settings.dyslexiaFont}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, dyslexiaFont: checked })
                    }
                    aria-label="Toggle dyslexia-friendly font"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Caption Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Captions className="h-5 w-5 text-primary" />
                  <CardTitle>Caption Settings</CardTitle>
                </div>
                <CardDescription>Configure caption appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="caption-size">Caption Font Size</Label>
                  <Select
                    value={settings.captionSize}
                    onValueChange={(value) =>
                      setSettings({ ...settings, captionSize: value })
                    }
                  >
                    <SelectTrigger id="caption-size" aria-label="Select caption font size">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                      <SelectItem value="extra-large">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caption-position">Caption Position</Label>
                  <Select
                    value={settings.captionPosition}
                    onValueChange={(value) =>
                      setSettings({ ...settings, captionPosition: value })
                    }
                  >
                    <SelectTrigger id="caption-position" aria-label="Select caption position">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">Top</SelectItem>
                      <SelectItem value="bottom">Bottom</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Preview Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Type className="h-5 w-5 text-primary" />
                  <CardTitle>Preview</CardTitle>
                </div>
                <CardDescription>See how your settings affect the content</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`
                    p-6 rounded-lg border bg-card
                    ${settings.highContrast ? "contrast-125" : ""}
                    ${settings.largeText ? "text-lg" : "text-base"}
                    ${settings.dyslexiaFont ? "font-mono" : ""}
                  `}
                >
                  <h3 className="font-semibold mb-2">Sample Course Content</h3>
                  <p className="text-muted-foreground mb-4">
                    This is how your course content will appear with your current accessibility settings. 
                    The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div
                    className={`
                      bg-background/50 p-3 rounded text-center border
                      ${settings.captionSize === "small" ? "text-xs" : ""}
                      ${settings.captionSize === "medium" ? "text-sm" : ""}
                      ${settings.captionSize === "large" ? "text-base" : ""}
                      ${settings.captionSize === "extra-large" ? "text-lg" : ""}
                      ${settings.captionPosition === "top" ? "order-first" : ""}
                      ${settings.captionPosition === "center" ? "my-4" : ""}
                    `}
                  >
                    [Video caption example text]
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleSave}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Save Preferences
            </Button>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 bg-gradient-hero">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <CardTitle>Need More Help?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We're committed to making SkillHub accessible to everyone. If you need additional accessibility features or have suggestions, please contact our support team.
              </p>
              <Button variant="outline">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
