import { ChatHeader } from "./header";
import { ChatInput } from "./input";
import { ChatList } from "./list";
import { Separator } from "../separator";
import React from "react";

export function ChatBox() {
  const [config, setConfig] = React.useState<any>();
  const [apiKey, setApiKey] = React.useState<string>();

  React.useEffect(() => {
    const scriptTagElement = document.querySelector(
      "#just-miracle-ai-chat-widget"
    );

    if (!scriptTagElement) return;

    const apiKey = scriptTagElement.getAttribute("api-key");

    if (!apiKey) return;

    setApiKey(apiKey);

    fetch("https://ai.just-miracle.space/api/user-config/" + apiKey)
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  if (!apiKey) return null;

  return (
    <div className="z-50 flex max-h-[550px] w-96 flex-col rounded-xl border bg-white py-2 pl-2 pr-0.5">
      <ChatHeader />
      <Separator className="mt-2" />
      <ChatList />
      <ChatInput config={config} apiKey={apiKey} />
    </div>
  );
}
