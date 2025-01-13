import React from "react";
import { Ghost, HomeIcon, ArrowLeft } from "lucide-react";

const Page404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Ghost Icon */}
        <div className="mb-8 animate-float">
          <Ghost size={120} className="mx-auto text-indigo-500 animate-pulse" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Non Trouvée !
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! La page que vous recherchez semble ne pas être
          disponible.Revenir en arrière ?
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            Retour en arrière
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200 group"
          >
            <HomeIcon className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" />
            Page d'accueil
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-purple-100 blur-3xl opacity-30"></div>
          <div className="absolute right-[15%] bottom-[20%] h-40 w-40 rounded-full bg-indigo-100 blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
