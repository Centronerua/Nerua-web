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
  title: "Centro NERÚA | Rincón de la Victoria, Málaga",
  description:
    "Centro NERÚA en Rincón de la Victoria, Málaga. Psicología, regulación del sistema nervioso con enfoque neurofuncional y nutrición digestiva integrativa. Atención presencial y online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
