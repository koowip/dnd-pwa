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
          <DialogTitle>
          Place to download shit
          </DialogTitle>
          <DialogDescription>
            desc
          </DialogDescription>
        </DialogHeader>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </DialogContent>
    </Dialog>
  );
};

export default FileDialog;
