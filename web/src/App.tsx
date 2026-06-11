import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { ContactsPage } from './pages/ContactsPage';
import { PipelinePage } from './pages/PipelinePage';
import { TasksPage } from './pages/TasksPage';
import { ChatPage } from './pages/ChatPage';
import { ReportsPage } from './pages/ReportsPage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="contatos" element={<ContactsPage />} />
        <Route path="pipeline" element={<PipelinePage />} />
        <Route path="tarefas" element={<TasksPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="relatorios" element={<ReportsPage />} />
        <Route path="configuracoes" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
