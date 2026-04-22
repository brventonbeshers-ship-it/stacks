import type { Metadata } from "next";
import "./globals.css";
import { StacksProvider } from "@/hooks/useStacks";

export const metadata: Metadata = {
  metadataBase: new URL("https://vote-battle.vercel.app"),
  title: "Vote Battle - A vs B on Stacks",
  description: "Vote in 20 head-to-head battles. Every vote stored on Stacks blockchain.",
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

// marker-layout: 1776246023769

// marker-layout: 1776267778378

// marker-layout: 1776313561514

// marker-layout: 1776347813881

// marker-layout: 1776371079701

// marker-layout: 1776430112556

// marker-layout: 1776457745940

// marker-layout: 1776491296876

// marker-layout: 1776515773657

// marker-layout: 1776583088192

// marker-layout: 1776616785581

// marker-layout: 1776669956064

// marker-layout: 1776677164589

// marker-layout: 1776699167906

// marker-layout: 1776749195643

// marker-layout: 1776778805270

// marker-layout: 1776802107528

// marker-layout: 1776815230495

// marker-layout: 1776831855739
