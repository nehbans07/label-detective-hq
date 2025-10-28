import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Question {
  id: number;
  category: string;
  emoji: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    category: "Sugar & Sweetness",
    emoji: "🍬",
    question: "A 250 ml can of coke 🥤 contains 24 g of sugar. The WHO recommends a maximum of 25 g/day. How many teaspoons of sugar are in the can? (Tip: 1 teaspoon = 4 grams of sugar)",
    options: ["4 tsp", "6 tsp", "8 tsp", "12 tsp"],
    correctAnswer: 1,
    explanation: "24 ÷ 4 = 6 tsp. That's almost your entire daily sugar limit in one can!"
  },
  {
    id: 2,
    category: "Sugar & Sweetness",
    emoji: "🍬",
    question: 'A cereal lists "malt syrup" as the second ingredient. What does this indicate?',
    options: ["No sugar is present", "Hidden sugar is present", "Only natural flavor", "High protein content"],
    correctAnswer: 1,
    explanation: "Malt syrup is a sugar source! Remember, sugar hides under many names."
  },
  {
    id: 3,
    category: "Fats & Oils",
    emoji: "🧈",
    question: "Which of these oils is generally considered a 'good fat'?",
    options: ["Sunflower oil", "Hydrogenated vegetable oil", "Palm oil (processed)", "Shortening"],
    correctAnswer: 0,
    explanation: "Sunflower oil is liquid at room temperature and comes from seeds/nuts - it's a good fat!"
  },
  {
    id: 4,
    category: "Fats & Oils",
    emoji: "🧈",
    question: 'Your biscuit packet lists "hydrogenated vegetable fat" as the second ingredient. What does this mean?',
    options: ["Healthy fat", "Factory-processed solid fat", "Extra vitamins", "Zero trans fat"],
    correctAnswer: 1,
    explanation: "Hydrogenated oils are processed in factories to make them solid. Not the best choice!"
  },
  {
    id: 5,
    category: "Fats & Oils",
    emoji: "🧈",
    question: 'A product claims "Baked, not fried." Which statement is true?',
    options: ["It contains zero fat", "It may still be high in fat", "It contains no calories", "It's sugar-free"],
    correctAnswer: 1,
    explanation: "Baked items can still have high fat content. Always check the nutrition label!"
  },
  {
    id: 6,
    category: "Salt & Preservatives",
    emoji: "🧂",
    question: 'A pickle jar says "Shelf life: 12 months." What ingredient is likely helping it stay fresh for such a long period?',
    options: ["Sugar", "Preservatives", "Cocoa", "Natural flavor"],
    correctAnswer: 1,
    explanation: "Preservatives extend shelf life by preventing spoilage."
  },
  {
    id: 7,
    category: "Salt & Preservatives",
    emoji: "🧂",
    question: "🥣 The Salty Soup Mystery! Your soup packet has 800 mg of salt per serving. WHO says you should not eat more than 2000 mg in a whole day. What do you think?",
    options: ["🟢 Low — okay to eat often", "🟡 Medium — okay sometimes", "🔴 High — better eat rarely", "🤷 Ignore — salt doesn't matter"],
    correctAnswer: 2,
    explanation: "One bowl gives you 40% of your daily salt! That's quite high."
  },
  {
    id: 8,
    category: "Additives",
    emoji: "🌈",
    question: "Which of these is an additive that improves the color or taste of your food?",
    options: ["Sugar", "E110", "Salt", "Sunflower oil"],
    correctAnswer: 1,
    explanation: "E110 is a color additive. Those 'E' codes are your clue!"
  },
  {
    id: 9,
    category: "Additives",
    emoji: "🌈",
    question: 'You see "Nature-identical flavor" on a candy label. What does it mean?',
    options: ["It comes from real fruit", "It is made artificially to taste like natural flavor", "It is sugar-free", "It is high in protein"],
    correctAnswer: 1,
    explanation: "Nature-identical means artificially made to mimic natural flavor. You can see this on Frooti, Real juices etc. 🥤"
  },
  {
    id: 10,
    category: "Main Ingredients",
    emoji: "🥖",
    question: "The first ingredient on a biscuit label is Maida (Refined Wheat Flour). What does it mean?",
    options: ["The biscuit is mostly made of whole grains like oats", "It is mostly refined flour, low in nutrients", "High in protein", "Zero fat"],
    correctAnswer: 1,
    explanation: "First ingredient = most abundant. Maida is refined flour with fewer nutrients than whole grains."
  },
  {
    id: 11,
    category: "Main Ingredients",
    emoji: "🥖",
    question: "A chocolate drink 🥤 lists ingredients: water, sugar, milk solids, cocoa. Which is present the most?",
    options: ["Cocoa", "Water", "Sugar", "Milk solids"],
    correctAnswer: 1,
    explanation: "Ingredients are listed by quantity. Water is first = most abundant!"
  },
  {
    id: 12,
    category: "Main Ingredients",
    emoji: "🥖",
    question: "Peanut butter 🥜🧈 lists: Sugar, Peanuts, Oil. What is suspicious?",
    options: ["It has no sugar", "Sugar is more than peanuts in peanut butter", "It is healthy", "Contains additives only"],
    correctAnswer: 1,
    explanation: "Wait, what? Peanut butter with more sugar than peanuts? That's suspicious indeed!"
  },
  {
    id: 13,
    category: "Math & Application",
    emoji: "🔢",
    question: "🍟 Fat Alert! Your chips packet says 10 g fat per serving. WHO says adults should eat about 60 g fat/day. One serving of chips is...?",
    options: ["10% 🟢 Low", "17% 🟡 Medium", "25% 🟡 Medium", "60% 🔴 High"],
    correctAnswer: 1,
    explanation: "10 ÷ 60 × 100 ≈ 17% of your daily fat. That's medium range!"
  },
  {
    id: 14,
    category: "Math & Application",
    emoji: "🔢",
    question: "Two drinks 🥤🥤, each 12 g sugar. WHO daily sugar limit = 25 g. Did you exceed daily limit?",
    options: ["No", "Yes, slightly", "Yes, double", "Cannot tell"],
    correctAnswer: 1,
    explanation: "Total 24 g ≈ daily limit. You're right at the edge with just two drinks!"
  },
  {
    id: 15,
    category: "Math & Application",
    emoji: "🔢",
    question: "🕵️‍♀️ The Cola Mystery 🥤: India is now the diabetic capital of the world. Which ingredient in drinks and snacks is the main culprit?",
    options: ["Salt 🧂", "Sugar 🍬", "Fat 🧈", "Spice 🌶️"],
    correctAnswer: 1,
    explanation: "Sugar 🍬 is the main culprit! Excess sugar consumption is linked to diabetes."
  }
];

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect && !answeredQuestions.has(currentQuestion)) {
      setScore(score + 1);
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
      toast.success("Correct! 🎉", {
        description: "Great detective work!"
      });
    } else if (!isCorrect) {
      toast.error("Not quite right", {
        description: "Read the explanation and learn!"
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      toast.success(`Quiz Complete! 🎊`, {
        description: `Your final score: ${score}/${questions.length}`
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnsweredQuestions(new Set());
  };

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-detective bg-clip-text text-transparent">
          🎯 Label Padho, Sach Ka Pata Lagao
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Become a food detective! Look at food packets and uncover what's really inside.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Question {currentQuestion + 1}/{questions.length}
          </Badge>
          <Badge className="text-lg px-4 py-2 bg-success text-success-foreground">
            Score: {score}/{questions.length}
          </Badge>
        </div>
      </div>

      <Card className="shadow-card-hover">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{question.emoji}</span>
            <Badge className="bg-accent text-accent-foreground">{question.category}</Badge>
          </div>
          <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showResult = showExplanation;

              let buttonVariant: "default" | "outline" | "secondary" = "outline";
              let extraClasses = "";

              if (showResult) {
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
                  className={`w-full justify-start text-left h-auto py-4 px-6 text-base ${extraClasses}`}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              );
            })}
          </div>

          {showExplanation && (
            <Card className="bg-muted animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader>
                <CardTitle className="text-lg">💡 Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{question.explanation}</p>
              </CardContent>
            </Card>
          )}

          {showExplanation && (
            <div className="flex justify-end gap-3">
              {!isLastQuestion ? (
                <Button onClick={nextQuestion} size="lg" className="bg-primary hover:bg-primary/90">
                  Next Question →
                </Button>
              ) : (
                <Button onClick={resetQuiz} size="lg" className="bg-secondary hover:bg-secondary/90">
                  Restart Quiz 🔄
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizGame;
