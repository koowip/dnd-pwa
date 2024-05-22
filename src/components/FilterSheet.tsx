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
import {
  List,
  FilterClass,
  FilterClassNonOpinionated,
  FilterLevel,
  FilterVariant,
  FilterSubclass,
} from "@/lib/services/SpellService";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import useClassStore from "@/lib/services/StoreService";
import { useEffect } from "react";
import { Spell } from "@/lib/types";

const FilterSheet = () => {
  const {
    selectedLevel,
    selectedVariant,
    selectedClass,
    selectedSubClass,
    toggleClass,
    toggleSubClass,
    toggledSubClasses,
    changeLevelSelection,
    toggleVariant,
    toggleOffSubClasses,
    spellList,
    setSpellList,
  } = useClassStore();

  const searchWhenSheetClose = () => {
    let cur;
    cur = List("").filter(
      (x: Spell) =>
        FilterLevel(selectedLevel, x) &&
        FilterClassNonOpinionated(selectedClass, x) &&
        FilterSubclass(toggledSubClasses, x) &&
        FilterVariant(selectedVariant, x)
    );
    setSpellList(cur);
  };

  const classSubclassToggle = (e: string) => {
    toggleClass(e);

    if (selectedClass[e])
      //fucked up off by 1
      toggleOffSubClasses(e);
  };

  //Handler for when input is selected for level change, need to implement selector in tsx
  const handleLevelChange = (e) => {
    const newlvl = Number(e.target.value);
    changeLevelSelection(newlvl);
  };

  const handleTogglerVariant = () => {
    toggleVariant();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      </SheetTrigger>
      <div className="overflow-y-auto">
        <SheetContent onInteractOutside={() => searchWhenSheetClose()}>
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
            <SheetDescription>make your selections</SheetDescription>
          </SheetHeader>
          <div className="overflow-y-auto">
            <div className="flex justify-around">
              <select
                onChange={handleLevelChange}
                defaultValue={selectedLevel}
                className="focus:outline-none"
              >
                <option value="-1">All</option>
                <option value="0">Cantrip</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
              </select>
              <div className="focus:outline-none flex justify-center p-4">
                {/* <label>Variant?</label>
                <button
                  className="w-2 h-2 pr-12 focus:outline-none"
                  onClick={() => handleTogglerVariant()}
                >
                  {selectedVariant ? " yes" : " no"}
                </button> */}
              </div>
            </div>
            <div className="flex flex-col justify-evenly">
              <div className=" flex flex-wrap justify-between p-4">
                {Object.entries(selectedClass).map(
                  ([classLabel, isSelected]) => (
                    <button
                      className={
                        isSelected
                          ? " bg-green-200 m-1 p-1 outline rounded-md"
                          : "m-1 p-1 outline rounded-md"
                      }
                      key={classLabel}
                      onClick={() => classSubclassToggle(classLabel)}
                    >
                      {classLabel}
                    </button>
                  )
                )}
              </div>
              <div className="pt-8">
                {Object.entries(selectedClass)
                  .filter(([className, isSelected]) => isSelected)
                  .map(([className]) => (
                    <div key={className}>
                      <strong>{className} Subclasses:</strong>
                      <div>
                        {selectedSubClass[className].map((subclassObj) => {
                          const subClassName = Object.keys(subclassObj)[0];
                          return (
                            <button
                              className="m-1 p-1 outline rounded-md"
                              key={subClassName}
                              onClick={() =>
                                toggleSubClass(className, subClassName)
                              }
                            >
                              {subClassName}{" "}
                              {subclassObj[subClassName]
                                ? "Selected"
                                : "Not Selected"}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose onClick={() => searchWhenSheetClose()}>
              <div className="pt-2">Close</div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </div>
    </Sheet>
  );
};
export default FilterSheet;
