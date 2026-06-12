import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppLayout = lazy(() =>
  import('./components/layout/AppLayout').then((module) => ({ default: module.AppLayout })),
);
const EcosystemHomePage = lazy(() =>
  import('./pages/EcosystemHomePage').then((module) => ({ default: module.EcosystemHomePage })),
);
const EcosystemModulePage = lazy(() =>
  import('./pages/EcosystemModulePage').then((module) => ({
    default: module.EcosystemModulePage,
  })),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage').then((module) => ({ default: module.DashboardPage })),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage').then((module) => ({ default: module.ContactsPage })),
);
const PipelinePage = lazy(() =>
  import('./pages/PipelinePage').then((module) => ({ default: module.PipelinePage })),
);
const TasksPage = lazy(() =>
  import('./pages/TasksPage').then((module) => ({ default: module.TasksPage })),
);
const ChatPage = lazy(() =>
  import('./pages/ChatPage').then((module) => ({ default: module.ChatPage })),
);
const ReportsPage = lazy(() =>
  import('./pages/ReportsPage').then((module) => ({ default: module.ReportsPage })),
);
const SettingsPage = lazy(() =>
  import('./pages/SettingsPage').then((module) => ({ default: module.SettingsPage })),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
);

function PageLoader() {
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-bold shadow-2xl shadow-slate-950/40">
        Carregando Nexus Ecosystem...
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index element={<EcosystemHomePage />} />
        <Route path="crm" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="contatos" element={<ContactsPage />} />
          <Route path="pipeline" element={<PipelinePage />} />
          <Route path="tarefas" element={<TasksPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="relatorios" element={<ReportsPage />} />
          <Route path="configuracoes" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path=":moduleSlug" element={<EcosystemModulePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
