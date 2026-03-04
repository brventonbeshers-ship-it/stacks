"use client";

import { useStacks } from "@/hooks/useStacks";
import { vote } from "@/lib/contracts";

interface VoteButtonProps {
  pollId: number;
  option: 1 | 2;
  label: string;
  side: "A" | "B";
}

export default function VoteButton({
  pollId,
  option,
  label,
  side,
}: VoteButtonProps) {
  const { connected, connect } = useStacks();

  const handleVote = async () => {
    if (!connected) {
      connect();
      return;
    }
    try {
      await vote(pollId, option);
    } catch (err) {
      console.error("Vote error:", err);
    }
  };

  return (
    <button
      onClick={handleVote}
      className={`vote-btn flex-1 py-2.5 px-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${
        side === "A"
          ? "bg-gradient-to-r from-primary/25 to-primary/10 hover:from-primary/40 hover:to-primary/20 text-primary border border-primary/25 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(108,92,231,0.3)]"
          : "bg-gradient-to-r from-accent/25 to-accent/10 hover:from-accent/40 hover:to-accent/20 text-accent border border-accent/25 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(253,121,168,0.3)]"
      }`}
    >
      {label}
    </button>
  );
}
