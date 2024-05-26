import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const FileDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <BsThreeDotsVertical />
      </DialogTrigger>
      <DialogContent className="rounded-md size-80">
        <DialogHeader>
          <DialogTitle>Export / Import Spells</DialogTitle>
          <DialogDescription className="py-2">
            SpellBook will be deleted if cache is cleared, backup your spellbook
            via downloading it locally.
          </DialogDescription>
        </DialogHeader>
        <Button>Download Book</Button>
        <Button>Upload Book</Button>
        <DialogFooter className="text-slate-400 inline">Your DM <span className="text-red-500">&hearts;'s</span> you.</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FileDialog;
