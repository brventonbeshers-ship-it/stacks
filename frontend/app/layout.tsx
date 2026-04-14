import type { Metadata } from "next";
import "./globals.css";
import { StacksProvider } from "@/hooks/useStacks";

export const metadata: Metadata = {
  metadataBase: new URL("https://vote-battle.vercel.app"),
  title: "Vote Battle - A vs B on Stacks",
  description: "20 A-vs-B battles on Stacks. Cast your vote on-chain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="talentapp:project_verification"
          content="52efd82ddf98a10c3ee30cfc6eb60d8ca1b675c458f09124c257a2d2a39973321130d87df903873fc2b4fe7fa437e4b154ab9d07155bb0ed0cb2f05829203eee"
        />
      </head>
      <body className="min-h-screen text-white antialiased relative">
        <StacksProvider>{children}</StacksProvider>
      </body>
    </html>
  );
}

// marker-layout: 1775918520510

// marker-layout: 1775931788642

// marker-layout: 1775965089740

// marker-layout: 1776007565380

// marker-layout: 1776061074046

// marker-layout: 1776082102380

// marker-layout: 1776142174036

// marker-layout: 1776168836732

// marker-layout: 1776184281409
