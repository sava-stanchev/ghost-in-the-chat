"use client";

import { useSession, signOut } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div>
          <NewChat />

          <div>
            <ModelSelection />
          </div>

          {/* Map through the ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div className="sign-out">
          <img
            onClick={() => signOut()}
            src={session.user?.image!}
            alt="profile pic"
            className="profile-pic"
          />
          <p>Sign Out</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
