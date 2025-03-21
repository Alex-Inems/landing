
import "./globals.css";

export const metadata = {
  title: "Your Landing Page Name",
  description: "A short, compelling description of your service.",
  openGraph: {
    title: "Your Landing Page Name",
    description: "A short, compelling description of your service.",
    url: "https://your-live-url.com",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://your-live-url.com/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
