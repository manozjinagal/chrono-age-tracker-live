
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
      
      <div className="flex justify-center items-center space-x-2 bg-gray-100 rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-1">
          <span className="text-xl md:text-2xl font-bold text-gray-900">{age.years}</span>
          <span className="text-sm text-gray-600">Y</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center space-x-1">
          <span className="text-xl md:text-2xl font-bold text-gray-900">{formatTwoDigits(age.months)}</span>
          <span className="text-sm text-gray-600">M</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center space-x-1">
          <span className="text-xl md:text-2xl font-bold text-gray-900">{formatTwoDigits(age.days)}</span>
          <span className="text-sm text-gray-600">D</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center space-x-1">
          <span className="text-xl md:text-2xl font-bold text-gray-900">{formatTwoDigits(age.hours)}</span>
          <span className="text-sm text-gray-600">H</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center space-x-1">
          <span className="text-xl md:text-2xl font-bold text-gray-900">{formatTwoDigits(age.minutes)}</span>
          <span className="text-sm text-gray-600">M</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center space-x-1">
          <span className={`text-xl md:text-2xl font-bold text-gray-900 ${animateSeconds ? 'animate-pulse' : ''}`}>
            {formatTwoDigits(age.seconds)}
          </span>
          <span className="text-sm text-gray-600">S</span>
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
