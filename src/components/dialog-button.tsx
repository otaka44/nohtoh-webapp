import React from "react";
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
  open?: boolean;
  handleOpen?: (open: boolean) => void;
}

export default function DialogButton({
  children,
  ...props
}: DialogButtonProps) {
  return (
    <Dialog open={props.open} onOpenChange={props.handleOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-rose-500 hover:bg-rose-700 text-white">
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
