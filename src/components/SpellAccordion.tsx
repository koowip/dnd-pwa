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
import RenderClasses from "./RenderClasses";
import useClassStore from "@/lib/services/StoreService";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmark3Line } from "react-icons/ri";

const SpellAccordion = (props: any) => {
  const { setBookSpellList, bookSpellList, addFavorite, removeFavorite } = useClassStore();

  const sp = props.sp;
  const [hideContent, setHideContent] = useState(true);

  const spSchool = sp.school as keyof typeof spellSchools;

  const addFav = (e: any , sp: { name: any; favorited: any }) => {
    e.stopPropagation();
    addFavorite(sp);
  };

  const removeFav = (e: any , sp: { name: any; favorited: any }) => {
    e.stopPropagation();
    removeFavorite(sp);
  };

  return (
    <>
      <Card className="w-[350px] m-1">
        <div
          id="cardHeaderTrigger"
          onClick={() => setHideContent(!hideContent)}
        >
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>{sp.name}</CardTitle>
              {sp.favorited ? (
                <RiBookmark3Line onClick={(e) => removeFav(e, sp)} />
              ) : (
                <RiBookmarkLine onClick={(e) => addFav(e, sp)} />
              )}
            </div>
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
              <ChevronDownIcon
                className={
                  hideContent
                    ? "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                    : "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-180"
                }
              />
            </CardDescription>
          </CardHeader>
        </div>
        <div
          id="cardContent"
          className={cn(
            hideContent
              ? "hidden animate-accordion-up"
              : "animate-accordion-down"
          )}
        >
          <Separator className="mb-2 -mt-2" />
          <CardContent className="flex flex-col justify-end">
            <RenderEntries entries={sp.entries} />
            <RenderClasses availableTo={sp.availableTo} />
          </CardContent>
          {/* This is a trash idea, make own component for range and components */}
          <CardFooter>
            components: {Object.keys(sp.components).map((x: string) => (<p className="px-1" key={x}>{x}</p>))}

          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default SpellAccordion;
