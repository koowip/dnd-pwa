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

const FilterSheet = ({
  isSelectedClass,
  setIsSelectedClass,
  isSelectedSubClass,
  setIsSelectedSubClass,
}: any) => {
  const handleToggle = (className: any) => {
    setIsSelectedClass((prevState: { [x: string]: any }) => ({
      ...prevState,
      [className]: !prevState[className],
    }));
  };

  //This is here becuase of the stupid rendering when state changes being async,
  //This forces the state is be updated when button is clicked, not queued for later
  useEffect(() => {}, [isSelectedClass]);

  function getSelectedSubclasses(className = null) {
    //debugger
    console.log(isSelectedSubClass[className])
    return isSelectedSubClass[className] || [];
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
        <div>
          <strong>Subclasses</strong>
          <div className="flex flex-wrap">
            {Object.entries(getSelectedSubclasses("Bard")).map(
              ([subClassLabelIndex, isSelected]) => (
                <ToggleButton
                  key={isSelected[0]}
                  classLabel={isSelected[0]}
                  isSelected={isSelected}
                  onToggle={() => handleToggle(subClassLabelIndex)}
                />
              )
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default FilterSheet;
