import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Phone, Search, Send, Video } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Avatar } from '../components/Avatar';
import { conversations as initialConversations } from '../data/mock';
import { classNames, formatTime } from '../lib/format';
import type { ChatMessage, Conversation } from '../types';

const CHANNEL_LABEL: Record<Conversation['channel'], string> = {
  chat: 'Chat web',
  whatsapp: 'WhatsApp',
  email: 'E-mail',
  instagram: 'Instagram',
};

const AUTO_REPLIES = [
  'Perfeito, obrigado pelo retorno!',
  'Entendi. Vou verificar internamente e já te respondo.',
  'Pode me enviar mais detalhes sobre os prazos?',
  'Ótimo! Isso atende bem a nossa necessidade.',
  'Combinado. Aguardo a proposta atualizada.',
];

let messageSeq = 1000;
function nextId() {
  return `m-${messageSeq++}`;
}

export function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string>(initialConversations[0].id);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [mobileThread, setMobileThread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId)!;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [active.messages.length, typing]);

  function openConversation(id: string) {
    setActiveId(id);
    setMobileThread(true);
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)),
    );
  }

  function send() {
    const text = draft.trim();
    if (!text) return;
    const msg: ChatMessage = {
      id: nextId(),
      conversationId: active.id,
      author: 'me',
      authorName: 'Você',
      text,
      at: new Date().toISOString(),
    };
    setConversations((prev) =>
      prev.map((c) => (c.id === active.id ? { ...c, messages: [...c.messages, msg] } : c)),
    );
    setDraft('');

    if (active.id !== 'conv4') {
      setTyping(true);
      window.setTimeout(() => {
        const reply: ChatMessage = {
          id: nextId(),
          conversationId: active.id,
          author: 'them',
          authorName: active.name,
          text: AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)],
          at: new Date().toISOString(),
        };
        setConversations((prev) =>
          prev.map((c) =>
            c.id === active.id ? { ...c, messages: [...c.messages, reply] } : c,
          ),
        );
        setTyping(false);
      }, 1600);
    }
  }

  return (
    <div className="flex h-[calc(100vh-7rem)] flex-col">
      <PageHeader title="Chat" subtitle="Comunicação em tempo real — interna e omnichannel" />

      <div className="card flex flex-1 overflow-hidden">
        {/* Lista de conversas */}
        <div
          className={classNames(
            'w-full shrink-0 flex-col border-r border-slate-200 dark:border-slate-800 sm:flex sm:w-80',
            mobileThread ? 'hidden sm:flex' : 'flex',
          )}
        >
          <div className="border-b border-slate-200 p-3 dark:border-slate-800">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input className="input pl-9" placeholder="Buscar conversas…" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => openConversation(c.id)}
                className={classNames(
                  'flex w-full items-center gap-3 border-b border-slate-100 p-3 text-left transition hover:bg-slate-50 dark:border-slate-800/60 dark:hover:bg-slate-800/50',
                  c.id === activeId && 'bg-brand-50/60 dark:bg-brand-600/10',
                )}
              >
                <Avatar name={c.name} color={c.avatarColor} online={c.online} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{c.name}</p>
                    <span className="shrink-0 text-[11px] text-slate-400">
                      {formatTime(c.messages[c.messages.length - 1].at)}
                    </span>
                  </div>
                  <p className="truncate text-xs text-slate-400">
                    {c.messages[c.messages.length - 1].text}
                  </p>
                </div>
                {c.unread > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1.5 text-[11px] font-semibold text-white">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Thread */}
        <div className={classNames('flex flex-1 flex-col', mobileThread ? 'flex' : 'hidden sm:flex')}>
          <div className="flex items-center gap-3 border-b border-slate-200 p-3 dark:border-slate-800">
            <button
              className="btn-ghost p-2 sm:hidden"
              onClick={() => setMobileThread(false)}
              aria-label="Voltar"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <Avatar name={active.name} color={active.avatarColor} online={active.online} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{active.name}</p>
              <p className="text-xs text-slate-400">
                {active.company} · {CHANNEL_LABEL[active.channel]} ·{' '}
                {active.online ? 'online' : 'offline'}
              </p>
            </div>
            <button className="btn-ghost p-2" aria-label="Ligar">
              <Phone className="h-5 w-5" />
            </button>
            <button className="btn-ghost p-2" aria-label="Vídeo">
              <Video className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4 dark:bg-slate-950/40">
            {active.messages.map((m) => (
              <div
                key={m.id}
                className={classNames('flex', m.author === 'me' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={classNames(
                    'max-w-[78%] rounded-2xl px-3.5 py-2 text-sm shadow-sm',
                    m.author === 'me'
                      ? 'rounded-br-md bg-brand-600 text-white'
                      : 'rounded-bl-md bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-100',
                  )}
                >
                  <p>{m.text}</p>
                  <p
                    className={classNames(
                      'mt-1 text-right text-[10px]',
                      m.author === 'me' ? 'text-brand-100' : 'text-slate-400',
                    )}
                  >
                    {formatTime(m.at)}
                  </p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm dark:bg-slate-800">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-slate-800"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              className="input"
              placeholder="Escreva uma mensagem…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button type="submit" className="btn-primary px-3" aria-label="Enviar" disabled={!draft.trim()}>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
