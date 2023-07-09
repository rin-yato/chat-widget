import { useContext } from "react";

import { ChatOpenContext } from ".";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { Button } from "../button";
import { Atom } from "lucide-react";

export function ChatTrigger() {
  const { setIsChatOpen } = useContext(ChatOpenContext);
  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setIsChatOpen(true)}
            variant="outline"
            className="aspect-square h-fit w-fit rounded-full  p-3"
          >
            <Atom size="32" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat with helpful AI bot</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
