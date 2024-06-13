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
import { useEffect, useMemo } from "react";
import { Spell } from "@/lib/types";
import { Button } from "./ui/button";

const FilterSheet = () => {
  const {
    bookView,
    setBookView,
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
    setBookSpellList,
    searchCriteria,
  } = useClassStore();

  useMemo(() => {},[selectedClass, selectedLevel, selectedSubClass])

  const searchWhenSheetClose = () => {
    let cur;
    cur = List(searchCriteria, bookView).filter(
      (x: Spell) =>
        FilterLevel(selectedLevel, x) &&
        FilterClassNonOpinionated(selectedClass, x) &&
        FilterSubclass(toggledSubClasses, x)
    );
    bookView ? setBookSpellList(cur) : setSpellList(cur);
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

  // Am not worried about Variant as no players are currently variant
  // const handleTogglerVariant = () => {
  //   toggleVariant();
  // };

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
            <div className="flex justify-center p-4">
              <strong>Level Select: </strong>
              <div className="pl-7">
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
              </div>
              {/* <div className="focus:outline-none flex justify-center p-4">
                <label>Variant?</label>
                <button
                  className="w-2 h-2 pr-12 focus:outline-none"
                  onClick={() => handleTogglerVariant()}
                >
                  {selectedVariant ? " yes" : " no"}
                </button>
              </div> */}
            </div>
            <div className="flex flex-col justify-evenly p-1">
              <strong>Class Select: </strong>
              <div className="grid grid-cols-4 gap-4 p-3">
                {Object.entries(selectedClass).map(
                  ([classLabel, isSelected]) => (
                    <Button
                      className={isSelected ? "bg-accent p-2" : "p-2"}
                      key={classLabel}
                      onClick={() => classSubclassToggle(classLabel)}
                      variant="ghost"
                    >
                      {classLabel}
                    </Button>
                  )
                )}
              </div>
              <div className="">
                {Object.entries(selectedClass)
                  .filter(([className, isSelected]) => isSelected)
                  .map(([className]) => (
                    <div className="py-6" key={className}>
                      <strong className="">{className} Subclasses:</strong>
                      <div className="grid grid-cols-4 gap-4 p-2">
                        {selectedSubClass[className].map((subclassObj) => {
                          const subClassName = Object.keys(subclassObj)[0];
                          return (
                            <Button
                              className={
                                subclassObj[subClassName] ? "bg-accent p-2 text-wrap" : "p-2 text-wrap"
                              }
                              key={subClassName}
                              variant="ghost"
                              onClick={() =>
                                toggleSubClass(className, subClassName)
                              }
                            >
                              {subClassName}
                            </Button>
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
