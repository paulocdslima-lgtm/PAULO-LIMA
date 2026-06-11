export type ID = string;

export interface Contact {
  id: ID;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  status: 'lead' | 'qualificado' | 'cliente' | 'inativo';
  tags: string[];
  avatarColor: string;
  lastInteraction: string; // ISO date
  value: number; // valor potencial / LTV
}

export type DealStageId =
  | 'novo'
  | 'qualificacao'
  | 'proposta'
  | 'negociacao'
  | 'ganho'
  | 'perdido';

export interface Deal {
  id: ID;
  title: string;
  contactId: ID;
  company: string;
  value: number;
  probability: number;
  stage: DealStageId;
  owner: string;
  expectedClose: string; // ISO date
  createdAt: string;
}

export interface Task {
  id: ID;
  title: string;
  description?: string;
  due: string; // ISO date-time
  priority: 'baixa' | 'media' | 'alta';
  done: boolean;
  relatedTo?: string;
  type: 'ligacao' | 'email' | 'reuniao' | 'follow-up' | 'tarefa';
}

export interface Interaction {
  id: ID;
  contactId: ID;
  channel: 'email' | 'chat' | 'ligacao' | 'reuniao' | 'nota' | 'sistema';
  summary: string;
  at: string; // ISO date-time
  author: string;
}

export interface ChatMessage {
  id: ID;
  conversationId: ID;
  author: 'me' | 'them';
  authorName: string;
  text: string;
  at: string; // ISO date-time
}

export interface Conversation {
  id: ID;
  name: string;
  company: string;
  channel: 'chat' | 'whatsapp' | 'email' | 'instagram';
  avatarColor: string;
  online: boolean;
  unread: number;
  messages: ChatMessage[];
}
