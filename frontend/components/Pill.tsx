import React from 'react';

type PillVariant = 'default' | 'success' | 'warning' | 'error';

const styles: Record<PillVariant, string> = {
  default: 'bg-purple-500/20 text-purple-300',
  success: 'bg-green-500/20 text-green-400',
  warning: 'bg-yellow-500/20 text-yellow-400',
  error:   'bg-red-500/20 text-red-400',
};

export default function Pill({ label, variant = 'default' }: { label: string; variant?: PillVariant }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
      {label}
    </span>
  );
}
