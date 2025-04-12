
import AgeCalculator from "@/components/AgeCalculator";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-soft-purple/30">
      <div className="w-full max-w-4xl py-8 md:py-12">
        <AgeCalculator />
      </div>
    </div>
  );
};

export default Index;
