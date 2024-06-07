'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Catalog = () => {
    const cardliss = [
        { title: 'Card 1', description: 'This is card 1.' },
        { title: 'Card 2', description: 'This is card 2.' },
        { title: 'Card 3', description: 'This is card 3.' },
        { title: 'Card 4', description: 'This is card 4.' },
        { title: 'Card 5', description: 'This is card 5.' },
        { title: 'Card 6', description: 'This is card 6.' },
        { title: 'Card 7', description: 'This is card 7.' },
        { title: 'Card 8', description: 'This is card 8.' },
      ];
    
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
        setCards(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

//   console.log(cards)

      return (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img className='w-full h-32 object-cover mb-2 ' src={card.small_image[0].url} alt={card.title} />
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Catalog