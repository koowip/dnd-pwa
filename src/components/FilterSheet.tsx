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

  const { selectedLevel, selectedClass, selectedSubClass, toggleClass, toggleSubClass, changeLevelSelection } =
    useClassStore();

  //Handler for when input is selected for level change, need to implement selector in tsx  
  const handleLevelChange = (e) => {
    console.log(e.target.value)
    const newlvl = Number(e.target.value)
    changeLevelSelection(newlvl);
    console.log(selectedLevel)
  }

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>make your selections</SheetDescription>
          <div>
            {Object.entries(selectedClass).map(([classLabel, isSelected]) => (
              <button key={classLabel} onClick={() => toggleClass(classLabel)}>
                {classLabel} {isSelected ? "Selected" : "Not Selected"}
              </button>
            ))}
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
        </SheetHeader>
        <SheetFooter>
          <SheetClose>
            <div className="pt-40">Close</div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default FilterSheet;
