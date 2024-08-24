import React, { useEffect, useState } from "react";

const Todos = () => {
  const [t, setT] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then(setT);
  }, []);

  return (
    <>
      <div className="flex flex-wrap space-x-1">
        {t.map((item) => (
          <div
            key={item.id}
            className="rounded overflow-hidden shadow-lg w-60 h-64"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {item.id} -
                {item.title}
              </div>
              <p className="text-gray-700 text-base">
                {item.completed.toString()}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
