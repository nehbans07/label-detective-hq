import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CheatSheet = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const foodGroups = [
    {
      emoji: "🎨",
      title: "Additives",
      subtitle: "Looks & Taste Makers",
      pronunciation: "Say: Add-it-tives",
      description: "They make food colorful, tasty, or fragrant.",
      back: {
        howToSpot: "Words starting with 'E' (E102, E110…), long chemical names.",
        foundIn: "Bright candies, fizzy drinks, flavored chips.",
        bodyRole: "Mostly for taste/look; not needed by the body.",
        tooMuch: "Can cause allergies or hyperactivity.",
        tooLittle: "Nothing happens."
      }
    },
    {
      emoji: "⏳",
      title: "Preservatives",
      subtitle: "The Time Keepers",
      pronunciation: "Say: Pre-ser-va-tivs",
      description: "As the name suggests, preservatives are used to keep food fresh for weeks or even months. Naturally, however, all food will eventually decay.",
      back: {
        howToSpot: '"Keeps fresh," "long shelf life," chemicals like Sodium Benzoate.',
        foundIn: "Almost all foods that come in packets like namkeen, Maggi, chips etc.",
        bodyRole: "Protects food, not your body.",
        tooMuch: "Stomach upset if eaten often.",
        tooLittle: "Our body does not need it, only packaged food as it will spoil faster."
      }
    },
    {
      emoji: "🍬",
      title: "Sugar",
      subtitle: "The Sweet Trickster",
      pronunciation: "Say: Shu-gar",
      description: "Sugar is a component that makes your food sweet. Natural sweeteners are - Jaggery, honey, dates, fruits. Artificial forms - White sugar, syrup etc.",
      back: {
        howToSpot: "Many times it is hidden in our products in the form of malt, molasses or words ending with (-ose) like fructose, glucose.",
        foundIn: "Sweets, soft drinks, biscuits etc.",
        bodyRole: "Quick energy for play/study.",
        tooMuch: "Weight gain, diabetes, cavities.",
        tooLittle: "Low energy, sleepy.",
        extra: "WHO Tip: Adults should not consume more than 25 grams in a day (which is equal to 6 tsp)."
      }
    },
    {
      emoji: "🛢️",
      title: "Fats & Oils",
      subtitle: "The Smooth Operators",
      description: "Fats makes food creamy, crunchy, or fried.",
      back: {
        howToSpot: "Good oils = sunflower, mustard, peanut; Bad oils = hydrogenated, shortening.",
        foundIn: "Potato chips, cookies, ice creams etc.",
        bodyRole: "Energy, absorbs vitamins, keeps skin & brain healthy.",
        tooMuch: "Weight gain, serious health conditions like heart problems.",
        tooLittle: "Dry skin, low energy."
      }
    },
    {
      emoji: "🍞",
      title: "Carbs",
      subtitle: "Energy Fuel",
      pronunciation: "Say: car 🚘- bzzzz",
      description: "The body's main source of energy.",
      back: {
        howToSpot: "Wheat (roti, paratha), rice (bhaat), poha, idli, dosa, oats.",
        bodyRole: "Fuel for running, studying, sports.",
        tooMuch: "Weight gain, sugar spikes.",
        tooLittle: "Tired, weak, sleepy."
      }
    },
    {
      emoji: "💪",
      title: "Protein",
      subtitle: "The Body Builders",
      pronunciation: "Say: pro-teen",
      description: "Builds & repairs muscles and tissues.",
      back: {
        howToSpot: "Dal, chickpeas, rajma, peanuts, milk, eggs, fish, chicken.",
        bodyRole: "Strong muscles for cricket, kabaddi, dance.",
        tooMuch: "Rare, may stress kidneys (supplements).",
        tooLittle: "Weak muscles, slow growth."
      }
    },
    {
      emoji: "🥦",
      title: "Vitamins",
      subtitle: "The Tiny Helpers",
      pronunciation: "Say: vit-aaa-mins",
      description: "Helps body functions: vision, immunity, skin, energy.",
      back: {
        howToSpot: "Vitamin A, C, D, E, K, B12… from mango, guava, orange, spinach, carrot, tomato, milk, eggs.",
        tooMuch: "Rare, mostly supplements.",
        tooLittle: "Weak immunity, tiredness, slow growth."
      }
    },
    {
      emoji: "🥬",
      title: "Minerals",
      subtitle: "Body Builders",
      pronunciation: "Say: Min-rals",
      description: "Tiny nutrients needed for bones, blood, nerves, muscles.",
      back: {
        sources: "Calcium → milk, paneer, yogurt, ragi, sesame seeds\nIron → spinach, beans, jaggery, meat\nZinc → pumpkin seeds, nuts, chickpeas\nMagnesium → almonds, peanuts, spinach, whole grains\nPotassium → banana, potato, tomato, coconut water",
        bodyRole: "Help in bones, teeth, blood, nerves, muscles health.",
        tooMuch: "Rare, may cause stomach upset or kidney stones.",
        tooLittle: "Weak bones, anemia, cramps, tiredness, poor growth."
      }
    },
    {
      emoji: "🧂",
      title: "Salt",
      subtitle: "The Flavor Friend",
      description: "Adds flavor to food, helps your body stay hydrated, and supports brain function.",
      back: {
        howToSpot: "Sodium or table salt in ingredients.",
        foundIn: "Dal, sabzi, pickles, namkeen.",
        bodyRole: "Helps nerves, muscles, hydration.",
        tooMuch: "High blood pressure, water retention.",
        tooLittle: "Weakness, cramps, low energy."
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-detective bg-clip-text text-transparent">
          🕵️‍♀️ Food Detective's Secret Code
        </h2>
        <p className="text-muted-foreground text-lg">
          Click on any card to reveal its secrets!
        </p>
      </div>

      {/* Flip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodGroups.map((group, index) => (
          <div
            key={index}
            className="flip-card h-[380px] cursor-pointer"
            onClick={() => toggleFlip(index)}
          >
            <div className={`flip-card-inner ${flippedCards.has(index) ? 'flipped' : ''}`}>
              {/* Front */}
              <Card className="flip-card-front absolute w-full h-full backface-hidden shadow-card hover:shadow-card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-center mb-4">
                    <span className="text-5xl mb-3 block">{group.emoji}</span>
                    <h3 className="text-2xl font-bold mb-1">{group.title}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">"{group.subtitle}"</p>
                    {group.pronunciation && (
                      <p className="text-xs text-muted-foreground">{group.pronunciation}</p>
                    )}
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-base leading-relaxed">{group.description}</p>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-4">Click to flip →</p>
                </CardContent>
              </Card>

              {/* Back */}
              <Card className="flip-card-back absolute w-full h-full backface-hidden shadow-card bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-5 h-full overflow-y-auto text-sm space-y-2.5">
                  {group.back.howToSpot && (
                    <div>
                      <p className="font-semibold text-primary text-xs">How to spot:</p>
                      <p className="leading-snug text-xs">{group.back.howToSpot}</p>
                    </div>
                  )}
                  {group.back.foundIn && (
                    <div>
                      <p className="font-semibold text-primary text-xs">Found in:</p>
                      <p className="leading-snug text-xs">{group.back.foundIn}</p>
                    </div>
                  )}
                  {group.back.sources && (
                    <div>
                      <p className="font-semibold text-primary text-xs">Sources:</p>
                      <p className="leading-snug whitespace-pre-line text-xs">{group.back.sources}</p>
                    </div>
                  )}
                  {group.back.bodyRole && (
                    <div>
                      <p className="font-semibold text-primary text-xs">Role in body:</p>
                      <p className="leading-snug text-xs">{group.back.bodyRole}</p>
                    </div>
                  )}
                  {group.back.tooMuch && (
                    <div>
                      <p className="font-semibold text-destructive text-xs">If too much:</p>
                      <p className="leading-snug text-xs">{group.back.tooMuch}</p>
                    </div>
                  )}
                  {group.back.tooLittle && (
                    <div>
                      <p className="font-semibold text-warning text-xs">If too little:</p>
                      <p className="leading-snug text-xs">{group.back.tooLittle}</p>
                    </div>
                  )}
                  {group.back.extra && (
                    <div className="pt-2 border-t mt-2">
                      <p className="leading-snug font-medium text-xs">{group.back.extra}</p>
                    </div>
                  )}
                  <p className="text-[10px] text-center text-muted-foreground pt-2">Click to flip back →</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Label Reading Tip */}
      <Card className="shadow-card-hover bg-gradient-to-br from-accent/20 to-primary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            🔎 Label Reading Tip
          </h3>
          <p className="mb-4 leading-relaxed">
            <strong>Tip:</strong> The first few (2–3) ingredients listed on your product label are present in maximum quantity in your food.
          </p>
          <div className="bg-background/80 p-4 rounded-lg">
            <p className="font-semibold mb-2">Example – Biscuit Pack:</p>
            <p className="text-sm mb-2"><strong>Ingredients on the pack:</strong></p>
            <p className="text-sm text-muted-foreground mb-3">
              Wheat flour (atta), Sugar, Vegetable oil, Milk solids, Baking powder, Salt, Emulsifier (E471)
            </p>
            <p className="text-sm">
              <strong>What this tells you:</strong> Items present in maximum quantity in biscuits: <span className="text-primary font-semibold">Wheat flour, sugar, vegetable oil.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* WHO Daily Limits */}
      <Card className="bg-gradient-detective text-primary-foreground shadow-card-hover">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4">📊 World Health Organisation (WHO) Daily Limits</h3>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Sugar: 25 g/day = 🥄🥄🥄🥄🥄🥄 (6 tsp)</p>
            <p className="font-semibold text-lg">Salt: 5 g/day = 1 tsp 🧂</p>
            <p className="font-semibold text-lg">Fat: 60 g/day = ~4–5 tbsp 🧈</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheatSheet;
