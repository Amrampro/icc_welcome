// SinglePastor.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { corpsPastoralData } from "../../assets/others/corpsPastoralData";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SinglePastor = () => {
  const { id } = useParams();

  const pastor = corpsPastoralData.find((p) => p.id === parseInt(id));

  if (!pastor) {
    return (
      <div className="text-center py-20 text-3xl">Pasteur non trouvé.</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-xl">
        <div className="flex flex-col items-center text-center">
          <img
            src={pastor.image}
            alt={pastor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white/50 shadow-lg mb-6"
          />

          <h1 className="text-3xl font-bold text-white mb-2">{pastor.name}</h1>
          <p className="text-white/80 text-lg mb-4">{pastor.post}</p>
          <p className="text-white/70 mb-2">
            <strong>Profession :</strong> {pastor.life_occupation}
          </p>

          <div className="my-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              BIOGRAPHIE
            </h2>
            <p className="text-white/80">{pastor.bio}</p>
          </div>

          <div className="flex space-x-6 my-4">
            <a
              href={pastor.link_facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Facebook />
            </a>
            <a
              href={pastor.link_twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Twitter />
            </a>
            <a
              href={pastor.link_instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Instagram />
            </a>
            <a
              href={pastor.link_linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Linkedin />
            </a>
          </div>

          <Link
            to="/corp-pastoral"
            className="text-sm mt-6 text-white underline"
          >
            Retour au corps pastoral
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePastor;
