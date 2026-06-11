import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">Página não encontrada</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        A página que você procura não existe ou foi movida.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Voltar ao Dashboard
      </Link>
    </div>
  );
}
