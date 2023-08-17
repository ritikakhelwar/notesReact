import React from "react";
import { Link } from "react-router-dom";

function Notes() {
  return (
    <div className="container">
      <h1>Notes</h1>
      <div
        onKeyPress={() => alert("hi")}
        style={{
          backgroundColor: "#ACEBF8",
          border: "2px solid",
          borderRadius: "8px",
          paddingTop: "10%",
          paddingBottom: "10%",
          width: "20%",
        }}
      >
        <Link className="link" to="/create">
          <h4 style={{ textAlign: "center" }}>+ add new note</h4>
        </Link>
      </div>
    </div>
  );
}

export default Notes;
