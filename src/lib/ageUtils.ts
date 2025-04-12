
/**
 * Calculate the age from a given date of birth
 * @param birthDate The date of birth
 * @returns Object containing years, months, days, hours, minutes, and seconds
 */
export function calculateAge(birthDate: Date): {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date();
  
  // Calculate years
  let years = now.getFullYear() - birthDate.getFullYear();
  
  // Calculate months
  let months = now.getMonth() - birthDate.getMonth();
  
  // If the current month is earlier than birth month, adjust years and months
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Calculate days
  let days = now.getDate() - birthDate.getDate();
  
  // If current day is earlier than birth day, adjust months and days
  if (days < 0) {
    // Get days in the previous month
    const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonthDate.getDate();
    months--;
    
    // If months becomes negative, adjust years and months
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  // Calculate hours, minutes, seconds
  let hours = now.getHours() - birthDate.getHours();
  if (hours < 0) {
    hours += 24;
    days--;
  }
  
  let minutes = now.getMinutes() - birthDate.getMinutes();
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  
  let seconds = now.getSeconds() - birthDate.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  
  // Ensure all values are non-negative
  if (days < 0) {
    const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonthDate.getDate();
    months--;
  }
  
  if (hours < 0) {
    hours += 24;
    days--;
  }
  
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  
  // Final adjustment for negative values
  if (months < 0) {
    months += 12;
    years--;
  }
  
  // Ensure we don't have negative years (shouldn't happen, but just in case)
  if (years < 0) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

/**
 * Format a number to have two digits (padding with 0 if needed)
 * @param num The number to format
 * @returns Formatted string with two digits
 */
export function formatTwoDigits(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Check if a date is valid
 * @param date The date to validate
 * @returns True if valid, false otherwise
 */
export function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime()) && date < new Date();
}
