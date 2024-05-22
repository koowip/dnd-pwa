import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { spellSchools } from "@/lib/types";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import RenderEntries from "./RenderEntries";
import RenderClasses from "./RenderClasses"
import useClassStore from "@/lib/services/StoreService";

const SpellAccordion = (props: any) => {

  const {
    setBookSpellList,
    bookSpellList
  } = useClassStore();

  const sp = props.sp;
  const [hideContent, setHideContent] = useState(true);
  
  const spSchool = sp.school as keyof typeof spellSchools;  


  const doStuff = (sp: { name: any; favorited: any; }) => {
    console.log(sp.name, sp.favorited)
    sp = { ...sp, favorited: !(sp.favorited)}
    console.log(sp.name, sp.favorited)
    setBookSpellList(sp)
    console.log(bookSpellList)
  }
  //console.log(sp.availableTo)

  return (
    <>
      <Card className="w-[350px] m-1">
        <div id="cardHeaderTrigger" onClick={() => setHideContent(!hideContent)}>
          <CardHeader>
            <CardTitle>{sp.name}</CardTitle>
            <CardDescription className="flex justify-between">
              {sp.level === 0 ? (
                <strong>{spellSchools[spSchool]} cantrip</strong>
              ) : (
                <strong>
                  {sp.level} level {spellSchools[spSchool]} spell
                </strong>
              )}
              <strong>
                {sp.time[0].number} {sp.time[0].unit}
              </strong>
              <ChevronDownIcon className={hideContent? "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" : "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-180"} />
            </CardDescription>
          </CardHeader>
        </div>
        <div id="cardContent" className={cn((hideContent ? "hidden animate-accordion-up" : "animate-accordion-down"))}>
            <Separator className="mb-2 -mt-2" />
          <CardContent>
            <RenderEntries entries={sp.entries} />
            <button className={cn((sp.favorited ? "p-3 bg-red-400" : "p-3 bg-teal-500"))} onClick={() => doStuff(sp)}>Known?</button>
          </CardContent>
          <CardFooter>
           
            <RenderClasses availableTo={sp.availableTo} />
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default SpellAccordion;
