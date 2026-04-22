// updated: 2026-03-11



import { StacksMainnet } from "@stacks/network";

export const NETWORK = new StacksMainnet();

export const CONTRACT_ADDRESS = "SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM";
export const CONTRACT_NAME = "vote-dapp-stacks";

export const HIRO_API_BASE = "https://api.mainnet.hiro.so";


export function shortenAddress(addr: string, head = 6, tail = 4): string {
  if (!addr || addr.length < head + tail + 3) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}


export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'K';
  return n.toLocaleString();
}


export function calcVotePercent(votes: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((votes / total) * 100);
}


export function pluralize(n: number, word: string, plural?: string): string {
  return `${n} ${n === 1 ? word : (plural ?? word + 's')}`;
}


export function timeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (days  > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (mins  > 0) return `${mins}m ago`;
  return 'just now';
}


export function formatSTX(microStx: number): string {
  return (microStx / 1_000_000).toFixed(2) + ' STX';
}

// marker-stacks: 1775869882929

// marker-stacks: 1775918570308

// marker-stacks: 1776007726611

// marker-stacks: 1776044817252

// marker-stacks: 1776081971950

// marker-stacks: 1776114344154

// marker-stacks: 1776169037836

// marker-stacks: 1776184439825

// marker-stacks: 1776213558674

// marker-stacks: 1776246035305

// marker-stacks: 1776254643822

// marker-stacks: 1776313722842

// marker-stacks: 1776370950112

// marker-stacks: 1776430163563

// marker-stacks: 1776457607358

// marker-stacks: 1776515834423

// marker-stacks: 1776547473368

// marker-stacks: 1776582879397

// marker-stacks: 1776616757591

// marker-stacks: 1776641917140

// marker-stacks: 1776669934639

// marker-stacks: 1776677067682

// marker-stacks: 1776699162659

// marker-stacks: 1776778795780

// marker-stacks: 1776802094583

// marker-stacks: 1776831939608
