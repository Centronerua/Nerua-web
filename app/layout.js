// app/layout.js
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "../styles/globals.css";

// Montserrat: tipografía sans del proyecto. Cormorant Garamond: solo titulares editoriales puntuales.
const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Centro Nerúa | Bienestar integral en Málaga",
  description:
    "Centro de bienestar integral en Málaga: psicología, trauma, terapia breve, hipnosis terapéutica, nutrición integrativa y síntomas persistentes (bruxismo, migrañas, malestar digestivo).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
