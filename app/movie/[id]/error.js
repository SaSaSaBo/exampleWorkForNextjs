"use client";
import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>You found an error. Don't worry we trying to fix!</h1>
      <Link
        href="/"
        style={{ border: "1px solid red", padding: 8, borderRadius: 8, backgroundColor: "red", fontSize: 20, marginTop: 8 }}
      >
        Go home
      </Link>
    </div>
  );
}

export default Movie404;