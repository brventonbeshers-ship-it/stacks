
export function objectPick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, k) => { if (k in obj) acc[k] = obj[k]; return acc; }, {} as Pick<T, K>);
}

export function isValidStacksAddress(addr: string): boolean {
  return /^S[PM][A-Z0-9]{38,}$/.test(addr);
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export const randomBetween = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export function unique<T>(arr: T[]): T[] {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export function memoize<T>(fn: (key: string) => T): (key: string) => T {
  const cache = new Map<string, T>();
  return (key: string) => { if (!cache.has(key)) cache.set(key, fn(key)); return cache.get(key)!; };
}

export function debounce<T extends (...args: unknown[]) => void>(fn: T, ms = 300): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); }) as T;
}

export function truncateText(text: string, maxLength: number, suffix = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

export const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n));

// marker-utils: 1775869891298

// marker-utils: 1775918638200

// marker-utils: 1775965108863

// marker-utils: 1776007455486

// marker-utils: 1776044903246

// marker-utils: 1776061240584

// marker-utils: 1776082205429

// marker-utils: 1776114322232

// marker-utils: 1776169143101

// marker-utils: 1776184191726

// marker-utils: 1776246188414

// marker-utils: 1776254651192

// marker-utils: 1776267786769

// marker-utils: 1776313592960

// marker-utils: 1776329262415

// marker-utils: 1776347982100

// marker-utils: 1776371241471

// marker-utils: 1776430011628

// marker-utils: 1776457547376

// marker-utils: 1776477232931

// marker-utils: 1776491585074

// marker-utils: 1776515969288

// marker-utils: 1776582941888

// marker-utils: 1776616827569

// marker-utils: 1776641841029

// marker-utils: 1776670075478

// marker-utils: 1776676880929

// marker-utils: 1776699022896

// marker-utils: 1776778638344

// marker-utils: 1776801978176

// marker-utils: 1776860436257

// marker-utils: 1776874033379

// marker-utils: 1776887451976

// marker-utils: 1776936491125

// marker-utils: 1776999109622

// marker-utils: 1777022429911
