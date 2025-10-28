import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CheatSheet from "@/components/CheatSheet";
import QuizGame from "@/components/QuizGame";
import ClaimBusters from "@/components/ClaimBusters";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-gradient-detective text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            🔍 Label Padho, Sach Ka Pata Lagao
          </h1>
          <p className="text-center mt-2 text-sm md:text-base opacity-90">
            Become a food detective! Explore what's really inside your snacks and drinks.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="cheatsheet" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="cheatsheet" className="text-sm md:text-base py-3">
              📚 Cheat Sheet
            </TabsTrigger>
            <TabsTrigger value="quiz" className="text-sm md:text-base py-3">
              🎯 Quiz Game
            </TabsTrigger>
            <TabsTrigger value="claims" className="text-sm md:text-base py-3">
              🕵️‍♀️ Claim Busters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cheatsheet" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CheatSheet />
          </TabsContent>

          <TabsContent value="quiz" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <QuizGame />
          </TabsContent>

          <TabsContent value="claims" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ClaimBusters />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted/50 mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>🍀 Stay curious, read labels, and make healthier choices!</p>
          <p className="mt-2">Based on WHO guidelines for daily nutrition limits</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
