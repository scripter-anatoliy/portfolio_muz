import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { chatApi } from '../../../api/chat';
import type { Message } from '../../../types/chat';
import './ChatModal.css';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal = ({ isOpen, onClose }: ChatModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const {
    data: messages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['chat', 'messages'],
    queryFn: () => chatApi.getMessages(),
    enabled: isOpen,
    staleTime: 0,
    gcTime: 5 * 60 * 1000,
    // Периодически обновляем для получения новых сообщений от ассистента
    refetchInterval: isOpen ? 3000 : false,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (text: string) => chatApi.sendMessage(text),
    onMutate: async text => {
      // Отменяем исходящие запросы, чтобы не перезаписать оптимистичное обновление
      await queryClient.cancelQueries({ queryKey: ['chat', 'messages'] });

      // Сохраняем предыдущее значение для отката
      const previousMessages = queryClient.getQueryData<Message[]>([
        'chat',
        'messages',
      ]);

      // Оптимистичное обновление
      const optimisticMessage: Message = {
        id: `optimistic-${Date.now()}`,
        text,
        timestamp: new Date().toISOString(),
        sender: 'user',
      };

      queryClient.setQueryData<Message[]>(['chat', 'messages'], old => {
        return old ? [...old, optimisticMessage] : [optimisticMessage];
      });

      return { previousMessages };
    },
    onSuccess: async () => {
      // Инвалидируем запрос, чтобы перезагрузить данные из IndexedDB
      await queryClient.invalidateQueries({ queryKey: ['chat', 'messages'] });
      setInputValue('');
      inputRef.current?.focus();
    },
    onError: (err, text, context) => {
      // Откатываем при ошибке
      if (context?.previousMessages) {
        queryClient.setQueryData(
          ['chat', 'messages'],
          context.previousMessages
        );
      }
    },
  });
  const queryClient = useQueryClient();

  const {
    data: messages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['chat', 'messages'],
    queryFn: () => chatApi.getMessages(),
    enabled: isOpen,
    staleTime: 0,
    gcTime: 5 * 60 * 1000,
    // Периодически обновляем для получения новых сообщений от ассистента
    refetchInterval: isOpen ? 3000 : false,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (text: string) => chatApi.sendMessage(text),
    onMutate: async text => {
      // Отменяем исходящие запросы, чтобы не перезаписать оптимистичное обновление
      await queryClient.cancelQueries({ queryKey: ['chat', 'messages'] });

      // Сохраняем предыдущее значение для отката
      const previousMessages = queryClient.getQueryData<Message[]>([
        'chat',
        'messages',
      ]);

      // Оптимистичное обновление
      const optimisticMessage: Message = {
        id: `optimistic-${Date.now()}`,
        text,
        timestamp: new Date().toISOString(),
        sender: 'user',
      };

      queryClient.setQueryData<Message[]>(['chat', 'messages'], old => {
        return old ? [...old, optimisticMessage] : [optimisticMessage];
      });

      return { previousMessages };
    },
    onSuccess: async () => {
      // Инвалидируем запрос, чтобы перезагрузить данные из IndexedDB
      await queryClient.invalidateQueries({ queryKey: ['chat', 'messages'] });
      setInputValue('');
      inputRef.current?.focus();
    },
    onError: (err, text, context) => {
      // Откатываем при ошибке
      if (context?.previousMessages) {
        queryClient.setQueryData(
          ['chat', 'messages'],
          context.previousMessages
        );
      }
    },
  });

  const handleSendMessage = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !sendMessageMutation.isPending) {
      sendMessageMutation.mutate(trimmedValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal" onClick={e => e.stopPropagation()}>
        <div className="chat-modal-header">
          <h2 className="chat-modal-title">Чат поддержки</h2>
          <button
            className="chat-modal-close"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
        <div className="chat-modal-content">
          {isLoading ? (
            <div className="chat-loading">Загрузка...</div>
          ) : error ? (
            <div className="chat-loading" style={{ color: 'red' }}>
              Ошибка загрузки сообщений
            </div>
          ) : (
            <div className="chat-messages">
              {messages && messages.length > 0 ? (
                <>
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`chat-message chat-message--${message.sender}`}
                    >
                      <div className="chat-message-text">{message.text}</div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              ) : (
                <div className="chat-loading">Нет сообщений</div>
              )}
            </div>
          )}
        </div>
        <div className="chat-modal-input-container">
          <input
            ref={inputRef}
            type="text"
            className="chat-modal-input"
            placeholder="Напишите ваш вопрос..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyPress={handleKeyDown}
            disabled={sendMessageMutation.isPending}
          />
        </div>
      </div>
    </div>
  );
};
