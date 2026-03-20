import "../styles/globals.css";

export const metadata = {
  title: "Centro Nerúa | Bienestar integral en Málaga",
  description: "Centro de bienestar integral en Málaga especializado en digestivo, tensión y regulación emocional."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}