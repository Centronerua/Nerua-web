// app/layout.js
import "../styles/globals.css";

export const metadata = {
  title: "Centro Nerúa | Bienestar integral en Málaga",
  description:
    "Centro de bienestar integral en Málaga: psicología, trauma, terapia breve, hipnosis terapéutica, nutrición integrativa y síntomas persistentes (bruxismo, migrañas, malestar digestivo).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
