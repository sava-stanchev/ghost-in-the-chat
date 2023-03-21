"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // useSWR to get model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Toast notification to say loading!

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notification to say successful!
    });
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={sendMessage} className="chat-input-form">
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
