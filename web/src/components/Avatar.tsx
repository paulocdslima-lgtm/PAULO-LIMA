import { classNames, initials } from '../lib/format';

interface AvatarProps {
  name: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  online?: boolean;
}

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
};

export function Avatar({ name, color = 'bg-brand-600', size = 'md', online }: AvatarProps) {
  return (
    <div className="relative shrink-0">
      <div
        className={classNames(
          'flex items-center justify-center rounded-full font-semibold text-white',
          color,
          sizes[size],
        )}
        aria-hidden
      >
        {initials(name)}
      </div>
      {online !== undefined && (
        <span
          className={classNames(
            'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900',
            online ? 'bg-emerald-500' : 'bg-slate-400',
          )}
          title={online ? 'Online' : 'Offline'}
        />
      )}
    </div>
  );
}
