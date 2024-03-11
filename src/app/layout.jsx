import "./globals.css";
import SessionProvider from "./SessionProvider";

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
