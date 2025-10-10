"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Eye, Type, Captions } from "lucide-react";

export default function AccessibilityPage() {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    dyslexiaFont: false,
    captionSize: "medium",
    captionPosition: "bottom",
  });

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Accessibility Settings</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Customize your learning experience to match your needs.
        </p>
      </div>

      <div className="grid max-w-4xl mx-auto gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Visual Settings
            </CardTitle>
            <CardDescription>Adjust display and visual preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="font-normal">High Contrast Mode</Label>
              <Switch
                id="high-contrast"
                checked={settings.highContrast}
                onCheckedChange={(checked) => setSettings({ ...settings, highContrast: checked })}
                aria-label="Toggle high contrast mode"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="large-text" className="font-normal">Large Text</Label>
              <Switch
                id="large-text"
                checked={settings.largeText}
                onCheckedChange={(checked) => setSettings({ ...settings, largeText: checked })}
                aria-label="Toggle large text mode"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dyslexia-font" className="font-normal">Dyslexia-Friendly Font</Label>
              <Switch
                id="dyslexia-font"
                checked={settings.dyslexiaFont}
                onCheckedChange={(checked) => setSettings({ ...settings, dyslexiaFont: checked })}
                aria-label="Toggle dyslexia-friendly font"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Captions className="h-5 w-5 text-primary" />
              Caption Settings
            </CardTitle>
            <CardDescription>Configure caption appearance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="caption-size">Caption Font Size</Label>
              <Select
                value={settings.captionSize}
                onValueChange={(value) => setSettings({ ...settings, captionSize: value })}
              >
                <SelectTrigger id="caption-size" aria-label="Select caption font size">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="caption-position">Caption Position</Label>
              <Select
                value={settings.captionPosition}
                onValueChange={(value) => setSettings({ ...settings, captionPosition: value })}
              >
                <SelectTrigger id="caption-position" aria-label="Select caption position">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top">Top</SelectItem>
                  <SelectItem value="bottom">Bottom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5 text-primary" />
              Preview
            </CardTitle>
            <CardDescription>See how your settings affect the content.</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`rounded-lg border p-6
                ${settings.highContrast ? "contrast-125" : ""}
                ${settings.largeText ? "text-lg" : ""}
                ${settings.dyslexiaFont ? "font-serif" : ""}
              `}
            >
              <h3 className="mb-2 font-semibold">Sample Course Title</h3>
              <p className="text-muted-foreground">
                This is how your course content will appear with the current settings. The quick brown fox jumps over the lazy dog.
              </p>
              <div
                className={`mt-4 rounded border bg-background/50 p-3 text-center
                  ${settings.captionSize === "small" && "text-xs"}
                  ${settings.captionSize === "medium" && "text-sm"}
                  ${settings.captionSize === "large" && "text-base"}
                  ${settings.captionPosition === "top" ? "order-first mb-4" : ""}
                `}
              >
                [Video caption example]
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg">Save Preferences</Button>
      </div>
    </div>
  );
}
