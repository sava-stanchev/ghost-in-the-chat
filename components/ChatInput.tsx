"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  return (
    <div className="chat-input-container">
      <form className="chat-input-form">
        <input
          value={prompt}
          className="chat-input"
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
          disabled={!session}
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="chat-input-button"
        >
          <PaperAirplaneIcon className="chat-input-button-icon" />
        </button>
      </form>
      <div>{/* ModelSelection */}</div>
    </div>
  );
}

export default ChatInput;
