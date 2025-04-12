
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { isValidDate } from "@/lib/ageUtils";

interface DateInputFormProps {
  onDateSubmit: (date: Date) => void;
}

const DateInputForm = ({ onDateSubmit }: DateInputFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select your date of birth",
        variant: "destructive",
      });
      return;
    }

    if (!isValidDate(date)) {
      toast({
        title: "Invalid date",
        description: "Please select a valid date of birth in the past",
        variant: "destructive",
      });
      return;
    }

    onDateSubmit(date);
    toast({
      title: "Date of birth submitted!",
      description: `Your date of birth is ${format(date, "PPP")}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <label htmlFor="dob" className="text-lg font-medium text-foreground block text-center">
          When were you born?
        </label>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-between text-left font-normal border-2",
                !date && "text-muted-foreground"
              )}
            >
              {date ? format(date, "PPP") : <span>Pick your date of birth</span>}
              <CalendarIcon className="h-5 w-5 opacity-70" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate);
                setIsOpen(false);
              }}
              disabled={(date) => date > new Date()}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gradient-purple hover:opacity-90 transition-opacity"
      >
        Calculate My Age
      </Button>
    </form>
  );
};

export default DateInputForm;
