import "./globals.css";

export const metadata = {
  title: "Creative 360 Pro | Digital Marketing Agency",
  description:
    "Creative 360 Pro is a full-service digital marketing agency focused on SEO, web design, paid media, and measurable growth.",
  openGraph: {
    title: "Creative 360 Pro | Digital Marketing Agency",
    description:
      "Revenue-focused SEO, web design, and digital marketing for ambitious brands.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
