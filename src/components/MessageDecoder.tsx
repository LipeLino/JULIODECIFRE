import React, { useState, FormEvent } from 'react';
import { AlertCircle, CheckCircle2, KeyRound } from 'lucide-react';
import { decodeMessage, secretCode } from '../utils/cipher';

interface MessageDecoderProps {
  onSuccess?: () => void;
}

export default function MessageDecoder({ onSuccess }: MessageDecoderProps) {
  const [attempt, setAttempt] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanAttempt = attempt.trim().toUpperCase();
    
    if (cleanAttempt === decodeMessage(secretCode)) {
      setIsCorrect(true);
      setShowError(false);
      if (onSuccess) {
        onSuccess();
      }
    } else {
      setShowError(true);
      setIsCorrect(false);
    }
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <div className="flex items-center space-x-2">
          <KeyRound className="text-blue-600" />
          <h2 className="text-xl font-semibold">Decodificador</h2>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-700 mb-2">Código:</p>
          <code className="block bg-gray-100 p-3 rounded text-sm font-mono">
            {secretCode}
          </code>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="attempt" className="block text-sm font-medium text-gray-700">
              Sua resposta:
            </label>
            <input
              type="text"
              id="attempt"
              value={attempt}
              onChange={(e) => setAttempt(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Digite sua resposta..."
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {showHint ? 'Ocultar dica' : 'Mostrar dica'}
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Verificar
            </button>
          </div>
        </form>

        {showHint && (
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="text-sm text-blue-800">
              Lembre-se: cada número representa a posição de uma letra no alfabeto.
              Por exemplo: 01 = A, 02 = B, ... 26 = Z
            </p>
          </div>
        )}

        {isCorrect && (
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-md animate-pop-out font-bold shadow-lg">
            <CheckCircle2 size={20} />
            <p className="text-lg bold">
              Você aceita ser nosso professor homenageado?
            </p>
          </div>
        )}

        {showError && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-md">
            <AlertCircle size={20} />
            <p>Ops! Tente novamente...</p>
          </div>
        )}
      </div>
    </div>
  );
}