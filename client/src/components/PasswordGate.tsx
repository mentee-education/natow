import { useState } from "react";

const SITE_PASSWORD = "NATOW!";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("natow-auth") === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("natow-auth", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      fontFamily: "system-ui, sans-serif",
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "360px",
        width: "100%",
      }}>
        <h1 style={{ margin: "0 0 0.5rem", fontSize: "1.5rem", color: "#111" }}>
          NATOW
        </h1>
        <p style={{ margin: "0 0 1.5rem", color: "#666", fontSize: "0.9rem" }}>
          Enter password to continue
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Password"
          autoFocus
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            border: `2px solid ${error ? "#e53e3e" : "#ddd"}`,
            borderRadius: "8px",
            outline: "none",
            boxSizing: "border-box",
            marginBottom: "1rem",
          }}
        />
        {error && (
          <p style={{ color: "#e53e3e", fontSize: "0.85rem", margin: "-0.5rem 0 1rem" }}>
            Incorrect password
          </p>
        )}
        <button type="submit" style={{
          width: "100%",
          padding: "0.75rem",
          fontSize: "1rem",
          fontWeight: 600,
          color: "white",
          background: "#111",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}>
          Enter
        </button>
      </form>
    </div>
  );
}
