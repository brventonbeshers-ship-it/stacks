"use client";

import ConnectWallet from "./ConnectWallet";

interface HeaderProps {
  onOpenLeaderboard: () => void;
}

export default function Header({ onOpenLeaderboard }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(15,5,25,0.75)] backdrop-blur-xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent drop-shadow-lg">
          Vote Battle
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLeaderboard}
            className="px-5 py-2 rounded-xl bg-white/5 border border-primary/20 text-sm font-medium text-gray-200 hover:bg-primary/15 hover:border-primary/40 hover:text-white hover:shadow-glow-sm transition-all duration-300"
          >
            Leaderboard
          </button>
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
