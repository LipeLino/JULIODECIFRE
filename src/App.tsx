import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import MessageDecoder from './components/MessageDecoder.tsx';
import { GraduationCap } from 'lucide-react';

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth,
    height: document.documentElement.scrollHeight 
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSuccess = () => {
    setShowConfetti(true);
    // Optional: Remove confetti after a few seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-bubble-pattern animate-bubble-slow" />
      <div className="absolute inset-0 bg-bubble-pattern animate-bubble-medium" style={{ animationDelay: '-2s' }} />
      <div className="absolute inset-0 bg-bubble-pattern animate-bubble-fast" style={{ animationDelay: '-4s' }} />
      {showConfetti && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50 }}>
          <ReactConfetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={false}
            numberOfPieces={500}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <GraduationCap className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Mensagem Especial</h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">Prezado Prof. Júlio,</p>
              <p className="mt-4 text-gray-700">
                Sua dedicação ao ensino e sua habilidade em nos guiar pelos labirintos do conhecimento 
                nos impactaram de forma profunda e inesquecível. Inspirados por sua brilhante mente 
                analítica, criamos um desafio especial que revelará algo muito importante para nós e, 
                acreditamos, que também para você.
              </p>
              
              <p className="mt-4 text-gray-700">
                A mensagem codificada está logo abaixo. Decifre-a utilizando sua lógica e intuição:
              </p>
            </div>
          </div>
          <div className="w-full">
            <MessageDecoder onSuccess={handleSuccess} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Ao desvendar o código, você encontrará uma mensagem muito especial que representa 
                nossa admiração e respeito.
              </p>
              
              <p className="mt-4 text-gray-700">
                Estamos ansiosos para sua resposta e, desde já, agradecemos por tudo o que tem feito 
                para inspirar e transformar nossas vidas acadêmicas.
              </p>
              
              <p className="mt-6 text-gray-700">
                Com carinho,<br />
                <em>Turma XVIII de
                Administração - UEMG Frutal</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}