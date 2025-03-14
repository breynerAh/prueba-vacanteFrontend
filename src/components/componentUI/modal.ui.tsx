import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  title: string;
  subtitle: string;
  setNewComment: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function ModalUI({
  title,
  subtitle,
  setNewComment,
  handleSubmit,
  open,
  setOpen,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Textarea
              placeholder="Escribir"
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
