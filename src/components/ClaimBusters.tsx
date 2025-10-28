import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Claim {
  id: number;
  title: string;
  emoji: string;
  story: string;
  claim: string;
  ingredients?: string;
  question: string;
  options: string[];
  correctAnswer: number;
  calculation?: string[];
  lesson: string;
}

const claims: Claim[] = [
  {
    id: 1,
    title: "Protein Bar Check",
    emoji: "💪",
    story: "You see a protein bar at the store with a big 'HIGH PROTEIN' label on the front.",
    claim: '"High Protein"',
    ingredients: "Milk protein, sugar, maltodextrin",
    question: "Total protein in bar: 5 g | Daily need: ~50 g. Does this justify the 'High Protein' claim?",
    options: ["✅ True - It's high protein", "❌ False - It's misleading"],
    correctAnswer: 1,
    lesson: "5 g is only 10% of daily need. Ads exaggerate. Protein is for muscle repair and growth, but amount matters!"
  },
  {
    id: 2,
    title: "FiberBot Cereal",
    emoji: "🥣",
    story: 'The "FiberBot Cereal" box claims: "High Fiber for super energy!"',
    claim: '"High Fiber"',
    ingredients: "Refined wheat (90g), oats (5g), sugar (5g) → per 100g of cereal. Fiber mainly comes from oats.",
    question: "If the cereal serving is 50g, how much oats (and fiber) do you get? Does this justify the 'High Fiber' claim when recommended daily fiber is ~25 g/day?",
    options: [
      "✅ Yes, Claim is true",
      "❌ Claim is misleading, It's very little fiber"
    ],
    correctAnswer: 1,
    lesson: "Step-by-Step Calculation:\n1️⃣ Total cereal = 100g\n2️⃣ Oats = 5% → 5g per 100g\n3️⃣ Serving = 50g → Oats per serving = ?\n4️⃣ 5g × (50 ÷ 100) = 2.5 g oats → that's your fiber!\n\n2.5 g fiber per serving is low compared to daily recommended limit of 25 g/day. Don't trust fancy packaging!"
  },
  {
    id: 3,
    title: "Zero Sugar Energy Drink",
    emoji: "⚡",
    story: 'An energy drink proudly displays "ZERO SUGAR" on its label.',
    claim: '"Zero Sugar"',
    ingredients: "Water, artificial sweeteners (aspartame, sucralose), caffeine, artificial flavors",
    question: "The drink has no sugar but contains artificial sweeteners. Is the 'Zero Sugar' claim misleading for health?",
    options: [
      "✅ Not misleading - zero sugar means healthy",
      "❌ Misleading - artificial sweeteners have their own concerns"
    ],
    correctAnswer: 1,
    lesson: "While technically true (no sugar), artificial sweeteners may have other health effects. 'Zero sugar' doesn't always mean 'healthy'!"
  },
  {
    id: 4,
    title: "Natural Juice",
    emoji: "🧃",
    story: 'A juice box says "100% Natural" and shows pictures of fresh fruits.',
    claim: '"100% Natural"',
    ingredients: "Water, sugar, fruit concentrate (10%), citric acid, nature-identical flavor",
    question: "The juice contains only 10% real fruit and has 'nature-identical flavor' (artificial). Is this truly '100% Natural'?",
    options: [
      "✅ Yes - it says natural on the label",
      "❌ No - it's mostly water, sugar, and artificial flavor"
    ],
    correctAnswer: 1,
    lesson: "Only 10% fruit content and artificial flavoring makes this claim very misleading. Always check ingredients!"
  },
  {
    id: 5,
    title: "Whole Grain Bread",
    emoji: "🍞",
    story: 'Bread packaging highlights "Made with Whole Grains" in large letters.',
    claim: '"Made with Whole Grains"',
    ingredients: "Refined flour (maida) 80%, whole wheat flour 15%, sugar, salt, preservatives",
    question: "With 80% refined flour and only 15% whole wheat, is this really a 'whole grain' bread?",
    options: [
      "✅ Yes - it contains some whole grains",
      "❌ No - it's mostly refined flour, minimal whole grains"
    ],
    correctAnswer: 1,
    lesson: "'Made with' doesn't mean 'made of'. It's mostly refined flour! Look for the percentage of whole grains."
  }
];

const ClaimBusters = () => {
  const [currentClaim, setCurrentClaim] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [bustedClaims, setBustedClaims] = useState<Set<number>>(new Set());

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === claims[currentClaim].correctAnswer;
    
    if (isCorrect && !bustedClaims.has(currentClaim)) {
      setScore(score + 1);
      setBustedClaims(new Set([...bustedClaims, currentClaim]));
      toast.success("Claim Busted! 🕵️‍♀️", {
        description: "Excellent detective work!"
      });
    } else if (!isCorrect) {
      toast.error("Not quite right", {
        description: "Check the explanation below!"
      });
    }
  };

  const nextClaim = () => {
    if (currentClaim < claims.length - 1) {
      setCurrentClaim(currentClaim + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      toast.success(`Investigation Complete! 🎊`, {
        description: `Claims busted: ${score}/${claims.length}`
      });
    }
  };

  const resetGame = () => {
    setCurrentClaim(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setBustedClaims(new Set());
  };

  const claim = claims[currentClaim];
  const isLastClaim = currentClaim === claims.length - 1;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-detective bg-clip-text text-transparent">
          🕵️‍♀️ Claim Busters
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Investigate the promises brands make. Are they really healthy, or just sounding fancy?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Case {currentClaim + 1}/{claims.length}
          </Badge>
          <Badge className="text-lg px-4 py-2 bg-accent text-accent-foreground">
            Busted: {score}/{claims.length}
          </Badge>
        </div>
      </div>

      <Card className="shadow-card-hover border-accent/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{claim.emoji}</span>
            <div>
              <CardTitle className="text-2xl">{claim.title}</CardTitle>
              <CardDescription className="text-base mt-1">
                Investigating: <span className="font-semibold text-accent">{claim.claim}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-base leading-relaxed">{claim.story}</p>
          </div>

          {claim.ingredients && (
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-sm font-semibold">📋 Ingredients:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{claim.ingredients}</p>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">🔍 Your Investigation:</h3>
            <p className="text-base leading-relaxed">{claim.question}</p>
          </div>


          <div className="grid gap-3">
            {claim.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === claim.correctAnswer;
              const showResultState = showResult;

              let buttonVariant: "default" | "outline" | "secondary" = "outline";
              let extraClasses = "";

              if (showResultState) {
                if (isCorrect) {
                  buttonVariant = "default";
                  extraClasses = "bg-success hover:bg-success text-success-foreground";
                } else if (isSelected && !isCorrect) {
                  buttonVariant = "default";
                  extraClasses = "bg-destructive hover:bg-destructive text-destructive-foreground";
                }
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={`w-full text-left h-auto py-4 px-6 text-base justify-start ${extraClasses}`}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </Button>
              );
            })}
          </div>

          {showResult && (
            <Card className="bg-warning/10 border-warning animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  🎓 Lesson Learned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed whitespace-pre-line">{claim.lesson}</p>
              </CardContent>
            </Card>
          )}

          {showResult && (
            <div className="flex justify-end gap-3">
              {!isLastClaim ? (
                <Button onClick={nextClaim} size="lg" className="bg-primary hover:bg-primary/90">
                  Next Case →
                </Button>
              ) : (
                <Button onClick={resetGame} size="lg" className="bg-secondary hover:bg-secondary/90">
                  Restart Investigation 🔄
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimBusters;
