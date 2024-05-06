import { cn } from "@/lib/utils";

const ToggleButton = ({ classLabel, isSelected, onToggle }: any) => {
  //const buttonStyle = isSelected? 'bg-dark text-white' : 'bg-light text-black';

  return (

    <button
      type="button"
      className={cn("p-2 m-1", {
        "bg-dark text-red-700": isSelected,
        "bg-light text-black": !isSelected,
      })}
      onClick={onToggle}
    >
      
      {classLabel}
    </button>
  );
};

export default ToggleButton;

// className={cn(buttonVariants({ variant, size, className }))}
