'use client'
import React from 'react'

function Error() {
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
            style={{ fontSize: 20, marginTop: 8, fontWeight: "bold", border: "2px solid red", padding: 8, borderRadius: 8, backgroundColor: "red", color: "white" }}
          >
            Go home
          </Link>
        </div>
      );
}

export default Error;