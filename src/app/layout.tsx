import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/src/components/ui/tooltip";

const archivo = Archivo({
  variable: "--font-Archivo",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Projeto Drone Total Maricá",
    template: "%s | Projeto Drone Total Maricá",
  },
  description: "Tecnologia a Serviço da Saúde Pública",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${montserrat.variable} antialiased`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
