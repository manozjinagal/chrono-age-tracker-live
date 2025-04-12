
import { useState, useEffect } from "react";
import { calculateAge, formatTwoDigits } from "@/lib/ageUtils";

interface AgeDisplayProps {
  birthDate: Date;
}

const AgeDisplay = ({ birthDate }: AgeDisplayProps) => {
  const [age, setAge] = useState(calculateAge(birthDate));
  const [animateSeconds, setAnimateSeconds] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setAge(calculateAge(birthDate));
      setAnimateSeconds(true);
      setTimeout(() => setAnimateSeconds(false), 300);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [birthDate]);
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl text-center font-medium mb-6 text-gray-800">
        You have lived for exactly:
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-gray-100 to-gray-300">
            <span className="digit text-gray-900">{age.years}</span>
          </div>
          <p className="digit-label text-gray-700">Years</p>
        </div>
        
        <div className="separator text-gray-600">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-gray-100 to-gray-300">
            <span className="digit text-gray-900">{formatTwoDigits(age.months)}</span>
          </div>
          <p className="digit-label text-gray-700">Months</p>
        </div>
        
        <div className="separator text-gray-600">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-gray-100 to-gray-300">
            <span className="digit text-gray-900">{formatTwoDigits(age.days)}</span>
          </div>
          <p className="digit-label text-gray-700">Days</p>
        </div>
        
        <div className="separator text-gray-600">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-gray-100 to-gray-300">
            <span className="digit text-gray-900">{formatTwoDigits(age.hours)}</span>
          </div>
          <p className="digit-label text-gray-700">Hours</p>
        </div>
        
        <div className="separator text-gray-600">:</div>
        
        <div className="text-center">
          <div className="digit-card bg-gradient-to-b from-gray-100 to-gray-300">
            <span className="digit text-gray-900">{formatTwoDigits(age.minutes)}</span>
          </div>
          <p className="digit-label text-gray-700">Minutes</p>
        </div>
        
        <div className="separator text-gray-600">:</div>
        
        <div className="text-center">
          <div className={`digit-card bg-gradient-to-b from-gray-100 to-gray-300 ${animateSeconds ? 'animate-number-change' : ''}`}>
            <span className="digit text-gray-900">{formatTwoDigits(age.seconds)}</span>
          </div>
          <p className="digit-label text-gray-700">Seconds</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-700 text-sm md:text-base">
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
