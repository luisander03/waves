import React from "react";
import Player from "./components/Player";
import YouTubeSearch from "./components/YouTubeSearch";

export default function App() {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        gap: 24,
        padding: 24,
        flexWrap: "wrap",
        background: "#0f1724",
        minHeight: "100vh",
      }}
    >
      {/* Panel de reproductor local */}
      <div style={{ minWidth: 320, flex: "1 1 360px" }}>
        <Player />
      </div>

      {/* Panel de búsqueda de YouTube */}
      <div style={{ flex: "2 1 600px" }}>
        <YouTubeSearch />
      </div>
    </div>
  );
}
