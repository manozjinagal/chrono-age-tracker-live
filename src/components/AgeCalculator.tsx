
import { useState } from "react";
import DateInputForm from "./DateInputForm";
import AgeDisplay from "./AgeDisplay";
import { Card, CardContent } from "@/components/ui/card";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  
  const handleDateSubmit = (date: Date) => {
    setBirthDate(date);
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-purple/20">
      <CardContent className="pt-6">
        {!birthDate ? (
          <div className="py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-purple">
              Chrono Age Tracker
            </h1>
            <p className="text-center text-muted-foreground mb-8 px-4">
              Enter your date of birth to see your exact age down to the second!
            </p>
            <DateInputForm onDateSubmit={handleDateSubmit} />
          </div>
        ) : (
          <div className="py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple">
              Your Real-Time Age
            </h1>
            <AgeDisplay birthDate={birthDate} />
            <div className="mt-8 text-center">
              <button 
                onClick={() => setBirthDate(null)}
                className="text-purple-dark/70 hover:text-purple transition-colors underline text-sm"
              >
                Calculate for a different date
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgeCalculator;
