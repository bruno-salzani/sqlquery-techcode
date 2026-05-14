import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 52%, #2563eb 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
          padding: "56px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: "72%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            SQL Query
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ fontSize: 68, lineHeight: 1.03, fontWeight: 800, letterSpacing: -3.2 }}>
              Gerador SQL online para consultas simples
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.45, color: "rgba(248,250,252,0.82)" }}>
              Monte SELECTs com filtros, ordenação e limite em uma interface rápida, clara e pronta para copiar.
            </div>
          </div>

          <div style={{ display: "flex", gap: "14px", fontSize: 24, color: "rgba(248,250,252,0.82)" }}>
            <div style={{ padding: "12px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>Sem cadastro</div>
            <div style={{ padding: "12px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>Pronto para copiar</div>
            <div style={{ padding: "12px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>Mobile-first</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 320,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              borderRadius: 36,
              background: "rgba(15,23,42,0.82)",
              border: "1px solid rgba(148,163,184,0.28)",
              padding: 28,
              boxShadow: "0 24px 80px rgba(15,23,42,0.28)",
            }}
          >
            <div style={{ fontSize: 18, textTransform: "uppercase", letterSpacing: 2.6, color: "#94a3b8" }}>Preview</div>
            <div style={{ fontSize: 26, lineHeight: 1.45, whiteSpace: "pre-wrap", color: "#e2e8f0" }}>
              {`SELECT id, nome, email\nFROM clientes\nWHERE status = 'ativo'\nORDER BY nome ASC\nLIMIT 25;`}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
