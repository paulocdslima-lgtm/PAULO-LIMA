const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number): string {
  return BRL.format(value);
}

export function formatCompactCurrency(value: number): string {
  if (Math.abs(value) >= 1000) {
    return `R$ ${(value / 1000).toLocaleString('pt-BR', {
      maximumFractionDigits: 1,
    })}k`;
  }
  return formatCurrency(value);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  });
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
