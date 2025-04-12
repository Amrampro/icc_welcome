import React from "react";
import { Clock, AlertCircle } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-lg shadow-xl text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <Clock className="w-20 h-20 text-white/90 animate-pulse" />
            <AlertCircle className="w-8 h-8 text-white absolute -top-2 -right-2 animate-bounce" />
          </div>

          <h1 className="text-4xl font-bold text-white mt-4">
            Bientôt disponible
          </h1>

          <div className="w-24 h-1 bg-white/30 rounded-full"></div>

          <p className="text-white/80 text-lg max-w-md">
            La ressource que vous recherchez est actuellement en cours de
            développement et sera bientôt disponible.
          </p>

          <div className="bg-white/20 rounded-2xl p-6 mt-8">
            <p className="text-white/90 text-sm">
              Nous travaillons dur pour vous apporter quelque chose
              d'incroyable. Merci pour votre patience !
            </p>
          </div>

          <button
            onClick={() => window.history.back()}
            className="mt-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 flex items-center space-x-2"
          >
            Retourner
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
