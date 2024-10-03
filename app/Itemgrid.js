'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchableItemGrid({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 rounded text-black"
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <Link
            href={`/pokemon/${item.name}`}
            key={index}
            className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="text-center">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto w-24 h-24"
              />
              <h2 className="text-lg font-semibold capitalize mt-2 text-white">{item.name}</h2>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}