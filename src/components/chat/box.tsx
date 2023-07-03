import { ChatHeader } from "./header";
import { ChatInput } from "./input";
import { ChatList } from "./list";
import { Separator } from "../separator";

export function ChatBox() {
  return (
    <div className="z-50 flex max-h-[550px] w-96 flex-col rounded-xl border bg-white py-2 pl-2 pr-0.5">
      <ChatHeader />
      <Separator className="mt-2" />
      <ChatList />
      <ChatInput />
    </div>
  );
}
