import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

interface DialogButtonProps {
  children?: React.ReactElement;
  title?: string;
}

export default function DialogButton({
  children,
  ...props
}: DialogButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-white hover:bg-gray-200">
          {props?.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>時間に向き合う</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
