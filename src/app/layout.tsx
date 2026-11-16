import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subham Dey | Software Engineer & Robotics",
  description:
    "Portfolio of Subham Dey — Software Engineering Intern at Lam Research, B.Tech CSE at PES University. Specializing in Systems, Software Automation, Control Simulations, and Multimodal VLA Robotics.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
