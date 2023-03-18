"use client";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="login">
      <button onClick={() => signIn("google")}>Sign In to use the chat</button>
    </div>
  );
}

export default Login;
