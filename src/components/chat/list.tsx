import React from "react";

import { Message } from "./message";
import { useChat } from "ai/react";

export function ChatList() {
  const mainContainer = React.useRef<HTMLDivElement>(null);

  const { messages, isLoading } = useChat({
    id: "default",
    api: "https://ai.just-miracle.space/api/chat",
  });

  function scrollToBottom() {
    if (mainContainer.current) {
      mainContainer.current.scrollTop = mainContainer.current.scrollHeight;
    }
  }

  function shouldDisplayDate(index: number) {
    const nextMessage = messages[index + 1];
    const currentMessage = messages[index];

    if (!nextMessage) return true;

    if (nextMessage?.role !== currentMessage?.role) return true;
  }

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      ref={mainContainer}
      className="minimal-scrollbar h-[550px] max-h-[550px] overflow-y-auto pr-2"
    >
      <div className="flex flex-1 flex-col justify-end gap-2">
        {messages.map((message, index) => (
          <Message
            key={message.id}
            role={message.role}
            content={message.content}
            createdAt={message.createdAt}
            displayDate={shouldDisplayDate(index)}
          />
        ))}
        {isLoading && (
          <Message
            role={"assistant"}
            content={"typing..."}
            createdAt={new Date()}
            displayDate={false}
          />
        )}
      </div>
    </div>
  );
}
