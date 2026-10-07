import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: "TRACE — Digital Footprint Intelligence",
  description: "Understand what the internet knows about you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}