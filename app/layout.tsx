import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Porfolio Dinahasina Ralaivao",
  description: "Développeur avec plus de 6 ans d'expérience, je me spécialise dans la création de logiciels interactifs et cross-platform pour le web. Expert en React, Angular, et Next.js pour le front-end, ainsi qu'en Symfony et Django pour le back-end, je conçois des applications performantes et immersives. Mon expertise en Python et l'intégration de la 3D avec Blender me permet de développer des expériences 3D interactives innovantes. Mon objectif est de créer des solutions engageantes, alliant performance et optimisation pour une expérience utilisateur fluide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
