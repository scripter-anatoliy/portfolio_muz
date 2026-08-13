import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './ChatAdminPanel.css';

interface Message {
  id: string;
  text: string;
  timestamp: string;
  sender: 'user' | 'assistant';
}

const fetchMessages = async (): Promise<Message[]> => {
  const response = await fetch('/api/chat/admin/messages');
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();
};

const sendAssistantReply = async (text: string): Promise<Message> => {
  const response = await fetch('/api/chat/assistant/reply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to send reply');
  }

  return response.json();
};

export const ChatAdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [replyText, setReplyText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: messages, isLoading } = useQuery({
    queryKey: ['admin', 'messages'],
    queryFn: fetchMessages,
    enabled: isOpen,
    refetchInterval: isOpen ? 2000 : false,
  });

  const sendReplyMutation = useMutation({
    mutationFn: sendAssistantReply,
    onSuccess: () => {
      setReplyText('');
      queryClient.invalidateQueries({ queryKey: ['admin', 'messages'] });
      queryClient.invalidateQueries({ queryKey: ['chat', 'messages'] });
    },
  });

  useEffect(() => {
    if (messages && messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendReply = () => {
    const trimmed = replyText.trim();
    if (trimmed && !sendReplyMutation.isPending) {
      sendReplyMutation.mutate(trimmed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  if (!isOpen) {
    return (
      <button
        className="chat-admin-toggle"
        onClick={() => setIsOpen(true)}
        title="Открыть админ-панель чата"
      >
        ⚙️
      </button>
    );
  }

  return (
    <div className="chat-admin-panel">
      <div className="chat-admin-header">
        <h3>Админ-панель чата</h3>
        <button className="chat-admin-close" onClick={() => setIsOpen(false)}>
          ×
        </button>
      </div>

      <div className="chat-admin-messages">
        {isLoading ? (
          <div className="chat-admin-loading">Загрузка...</div>
        ) : (
          <>
            {messages && messages.length > 0 ? (
              messages
                .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
                .map((message) => (
                  <div
                    key={message.id}
                    className={`chat-admin-message chat-admin-message--${message.sender}`}
                  >
                    <div className="chat-admin-message-sender">
                      {message.sender === 'user' ? '👤 Пользователь' : '🤖 Ассистент'}
                    </div>
                    <div className="chat-admin-message-text">{message.text}</div>
                    <div className="chat-admin-message-time">
                      {new Date(message.timestamp).toLocaleTimeString('ru-RU')}
                    </div>
                  </div>
                ))
            ) : (
              <div className="chat-admin-loading">Нет сообщений</div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="chat-admin-input-container">
        <textarea
          className="chat-admin-input"
          placeholder="Введите ответ от ассистента..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={sendReplyMutation.isPending}
          rows={3}
        />
        <button
          className="chat-admin-send"
          onClick={handleSendReply}
          disabled={!replyText.trim() || sendReplyMutation.isPending}
        >
          Отправить ответ
        </button>
      </div>
    </div>
  );
};
