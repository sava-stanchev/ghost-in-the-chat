"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div>
          <NewChat />

          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatRows */}
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
