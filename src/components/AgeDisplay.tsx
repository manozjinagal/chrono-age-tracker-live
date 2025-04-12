
import { useState, useEffect } from "react";
import { calculateAge, formatTwoDigits } from "@/lib/ageUtils";

interface AgeDisplayProps {
  birthDate: Date;
}

const AgeDisplay = ({ birthDate }: AgeDisplayProps) => {
  const [age, setAge] = useState(calculateAge(birthDate));
  const [animateSeconds, setAnimateSeconds] = useState(false);
  
  useEffect(() => {
    // Update age every second
    const timer = setInterval(() => {
      setAge(calculateAge(birthDate));
      setAnimateSeconds(true);
      setTimeout(() => setAnimateSeconds(false), 300);
    }, 1000);
    
    // Clean up on unmount
    return () => clearInterval(timer);
  }, [birthDate]);
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl text-center font-medium mb-6 text-purple-dark">
        You have lived for exactly:
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-white to-soft-purple">
            <span className="digit">{age.years}</span>
          </div>
          <p className="digit-label">Years</p>
        </div>
        
        <div className="separator">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-white to-soft-purple">
            <span className="digit">{formatTwoDigits(age.months)}</span>
          </div>
          <p className="digit-label">Months</p>
        </div>
        
        <div className="separator">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-white to-soft-purple">
            <span className="digit">{formatTwoDigits(age.days)}</span>
          </div>
          <p className="digit-label">Days</p>
        </div>
        
        <div className="separator">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-white to-soft-purple">
            <span className="digit">{formatTwoDigits(age.hours)}</span>
          </div>
          <p className="digit-label">Hours</p>
        </div>
        
        <div className="separator">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-white to-soft-purple">
            <span className="digit">{formatTwoDigits(age.minutes)}</span>
          </div>
          <p className="digit-label">Minutes</p>
        </div>
        
        <div className="separator">:</div>
        
        <div className="text-center">
          <div className={`digit-card bg-gradient-to-b from-white to-soft-purple ${animateSeconds ? 'animate-number-change' : ''}`}>
            <span className="digit">{formatTwoDigits(age.seconds)}</span>
          </div>
          <p className="digit-label">Seconds</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-purple-dark/70 text-sm md:text-base">
        <p>Born on: {birthDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>
      </div>
    </div>
  );
};

export default AgeDisplay;
