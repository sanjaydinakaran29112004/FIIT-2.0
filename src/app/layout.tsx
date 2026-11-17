import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIIT 2.0 Tech Education - Don't Just Learn A Skill. Build A Career.",
  description:
    "Formacion Institute of Information Technology offers industry-accredited technical training, enterprise engineering rigor, and active placement pipelines across Tamil Nadu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
