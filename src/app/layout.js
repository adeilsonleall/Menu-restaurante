import "./globals.css";

export const metadata = {
  title: "Menu Restaurante",
  description: "Menu para restaurante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
