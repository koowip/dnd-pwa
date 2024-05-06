import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ToggleButton from "./ToggleButton";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

const FilterSheet = ({ isSelectedClass, setIsSelectedClass }: any) => {

  const handleToggle = (className: any) => {
    setIsSelectedClass((prevState: { [x: string]: any; }) => ({
      ...prevState,
      [className]: !prevState[className]
    }))
  }

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>Header</SheetHeader>
        <div className="flex flex-wrap">
          {Object.entries(isSelectedClass).map(([classLabel, isSelected]) => (
            <ToggleButton
              key={classLabel}
              classLabel={classLabel}
              isSelected={isSelected}
              onToggle={() => handleToggle(classLabel)}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
