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
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import useClassStore from "@/lib/services/StoreService";

const FilterSheet = ({}: any) => {
  //This is here becuase of the stupid rendering when state changes being async,
  //This forces the state is be updated when button is clicked, not queued for later
  //useEffect(() => {}, [isSelectedClass]);

  const {
    selectedLevel,
    selectedVariant,
    selectedClass,
    selectedSubClass,
    toggleClass,
    toggleSubClass,
    changeLevelSelection,
    toggleVariant,
    toggleOffSubClasses,
  } = useClassStore();

  const classSubclassToggle = (e: string) => {
    toggleClass(e);

    if(selectedClass[e])
      toggleOffSubClasses(e)
  }

  //Handler for when input is selected for level change, need to implement selector in tsx
  const handleLevelChange = (e) => {
    //console.log(e.target.value);
    const newlvl = Number(e.target.value);
    changeLevelSelection(newlvl);
    //console.log(selectedLevel);
  };

  const handleTogglerVariant = () => {
    toggleVariant();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>make your selections</SheetDescription>
          <div className="max-h-screen overflow-y-auto">
            <div className="flex justify-around">
              <select onChange={handleLevelChange} defaultValue={selectedLevel}>
                <option value ="-1">All</option>
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
              <div className="flex justify-center p-4">
                <label>Variant?</label>

                {/* This would be a great place for the small vertical seperator from shad */}
                <button
                  className="w-2 h-2 pr-12"
                  onClick={() => handleTogglerVariant()}
                >
                  {selectedVariant ? " yes" : " no"}
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="h-56 flex flex-wrap justify-between p-4">
                {Object.entries(selectedClass).map(
                  ([classLabel, isSelected]) => (
                    <button
                      className={
                        isSelected
                          ? " bg-green-200 m-1 p-4 outline rounded-md"
                          : "m-1 p-4 outline rounded-md"
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
                              className="m-1 p-4 outline rounded-md"
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
        </SheetHeader>
        <SheetFooter>
          <SheetClose>
            <div className="pt-2">Close</div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default FilterSheet;
