import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Projet Todo List</h1>
        <p className="text-gray-700 mb-4">
          Ce projet est une application web développée en <strong>React</strong> avec <strong>Tailwind CSS</strong>, conçue pour afficher une liste de tâches (todos). 
          Les données des tâches sont récupérées via l'API publique <strong>JSONPlaceholder</strong>. 
          L'application utilise également <strong>Redux</strong> pour gérer l'état global de l'application, permettant de centraliser et de simplifier la gestion des données. 
          Enfin, <strong>React Router</strong> est utilisé pour la navigation entre les différentes pages de l'application, offrant une expérience utilisateur fluide et une structure de navigation claire.
        </p>
        <Link to="/todos" className="text-blue-500 hover:text-blue-700 font-semibold">
          Voir la liste des Todos
        </Link>
      </div>
    </div>
  );
}

export default Home;
