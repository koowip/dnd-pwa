import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface AvailableToProps {
  availableTo: {
    [key: string]: string[];
  };
}

const RenderClasses: React.FC<AvailableToProps> = ({ availableTo }) => {
  const [hideContent, setHideContent] = useState(true);

  return (
    <div className="pt-4" onClick={() => setHideContent(!hideContent)}>
      <div className="flex">
        <p>Tap for availability </p>
        {/* <ChevronDownIcon
          className={
            hideContent
              ? "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
              : "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-180"
          }
        /> */}
      </div>
      <div
        className={cn(
          hideContent ? "hidden animate-accordion-up" : "animate-accordion-down"
        )}
      >
        {Object.entries(availableTo).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value.length > 0 ? value.join(', ') : 'All'}
        </div>
      ))}
      </div>
    </div>
    // <div>
    //   {Object.entries(availableTo).map(([key, value]) => (
    //     <div key={key}>
    //       <strong>{key}:</strong> {value.length > 0 ? value.join(', ') : 'All'}
    //     </div>
    //   ))}
    // </div>
  );
};

export default RenderClasses;
