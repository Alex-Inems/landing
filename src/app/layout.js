
import "./globals.css";

export const metadata = {
  title: "Landing Page",
  description: "High-converting landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
