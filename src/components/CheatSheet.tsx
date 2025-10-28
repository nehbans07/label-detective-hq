import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CheatSheet = () => {
  const sections = [
    {
      emoji: "🥖",
      title: "Main Ingredients",
      subtitle: "The Real Heroes",
      color: "bg-amber-100 dark:bg-amber-950",
      items: [
        { label: "Clue", text: "They are the base of your food; listed first, most abundant." },
        { label: "Examples", text: "Wheat, rice, oats, milk, peanuts, cocoa." },
        { label: "Memory Tip", text: "First ingredient = What your product is made up of the most. If oil comes first — your item is made up of oil then." },
        { label: "Whole Grains vs Refined Grains 🌾🥣", text: "Whole grains like wheat, oats, bran, and multigrain still have their husk and natural parts, so they are high in fiber 🌿, help in digestion, and give slow energy ⚡. Refined grains like maida have the husk removed in factories 🏭, so they lose fiber and nutrients ❌ and are not good for digestion." }
      ]
    },
    {
      emoji: "🌈",
      title: "Additives",
      subtitle: "Looks & Taste Makers",
      color: "bg-pink-100 dark:bg-pink-950",
      items: [
        { label: "Say it", text: "add-it-tives" },
        { label: "Clue", text: "Make food colorful, tasty, or fragrant." },
        { label: "Examples", text: "Artificial color, added flavor, nature-identical flavor." },
        { label: "Code Names", text: "Starting with E like - E102, E110, E124, E133" },
        { label: "Detective Trick", text: "If your label looks like a chemistry lab full of words which you can't speak, it's full of factory made additives." }
      ]
    },
    {
      emoji: "⏳",
      title: "Preservatives",
      subtitle: "The Time Keepers",
      color: "bg-purple-100 dark:bg-purple-950",
      items: [
        { label: "Say it", text: "Pre-ser-va-tivs" },
        { label: "Clue", text: "As their name says they preserve (Keep food fresh for months)." },
        { label: "Examples", text: "Salt, vinegar, citric acid, Sodium Benzoate (E211)" },
        { label: "Memory Tip", text: "Preserve = keep safe or save for later" },
        { label: "Detective Trick", text: 'Look for "keeps fresh", "long shelf life"' }
      ]
    },
    {
      emoji: "🍬",
      title: "Sugar",
      subtitle: "The Sweet Trickster",
      color: "bg-red-100 dark:bg-red-950",
      items: [
        { label: "Clue", text: "It can hide in your food even if not written directly as sugar." },
        { label: "Examples", text: "Sugar, honey, syrup, malt, molasses" },
        { label: "Secret Code", text: "Ends with -ose (glucose, sucrose, fructose)" },
        { label: "Memory Tip", text: "If it ends with -ose that means sweet dose!" },
        { label: "World Health Organisation (WHO) Tip", text: "An adult should not eat more than 25 g of added sugar per day — that's about 🥄🥄🥄🥄🥄🥄 (6 teaspoons)." }
      ]
    },
    {
      emoji: "🧈",
      title: "Fats & Oils",
      subtitle: "The Smooth Operators",
      color: "bg-yellow-100 dark:bg-yellow-950",
      items: [
        { label: "Clue", text: "Make food creamy, crunchy, fried." },
        { label: "Good Oils", text: "Oils that are obtained from seeds/nuts and remain liquid at room temp → sunflower, mustard, peanut" },
        { label: "Bad Oils", text: "Oils processed in factories at very high temperatures to make them hard, white, solid also known as hydrogenated oils. Companies process them in factories so that they increase the shelf life of the products and make them more crunchy." },
        { label: "Detective Trick", text: 'If it says "hydrogenated" or "shortening" → not-so-good fat' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-detective bg-clip-text text-transparent">
          🕵️‍♀️ Label Detective Cheat Sheet
        </h2>
        <p className="text-muted-foreground text-lg">
          Your guide to uncovering what's really in your food!
        </p>
      </div>

      <div className="grid gap-6">
        {sections.map((section, idx) => (
          <Card key={idx} className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{section.emoji}</span>
                <div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">
                    "{section.subtitle}"
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex gap-2">
                  <Badge className={`${section.color} text-black dark:text-white`}>{item.label}:</Badge>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-detective text-primary-foreground shadow-card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">📊 World Health Organisation (WHO) Daily Limits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="font-semibold">Sugar: 25 g/day = 🥄🥄🥄🥄🥄🥄 (6 tsp)</p>
            <p className="font-semibold">Salt: 5 g/day = 1 tsp 🧂</p>
            <p className="font-semibold">Fat: 60 g/day = ~4–5 tbsp 🧈</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheatSheet;
