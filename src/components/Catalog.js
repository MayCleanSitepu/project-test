'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
          params: {
            'page[number]': 1,
            'page[size]': 10,
            append: ['small_image', 'medium_image'],
            sort: '-published_at',
          },
        });
        console.log(response.data.data); // Debug: Log data yang diambil dari API
        setCards(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {card.small_image && card.small_image.length > 0 ? (
              <img
                className='w-full h-32 object-cover mb-2 rounded-lg'
                src={card.small_image[0].url}
                alt={card.title}
              />
            ) : (
              <p>No Image Available</p>
            )}
            {/* <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: card.content }}></p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
