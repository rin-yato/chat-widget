import { useContext } from "react";

import { ChatOpenContext } from ".";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

import { Minus } from "lucide-react";
import { Button } from "../button";

export function ChatHeader({ config }: any) {
  const { setIsChatOpen } = useContext(ChatOpenContext);

  return (
    <div className="flex items-center pr-2">
      <Avatar className="cursor-pointer">
        <AvatarImage src={config?.avatar || ""} alt="AI" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <h3 className="ml-3 mr-auto cursor-pointer font-semibold hover:underline">
        {config?.name || "Just Miracle AI"}
      </h3>
      <Button
        variant="ghost"
        className="aspect-square p-0"
        onClick={() => setIsChatOpen(false)}
      >
        <Minus />
      </Button>
    </div>
  );
}
