"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Catalog = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortOrder, setSortOrder] = useState("-published_at");
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // This code will run once when the component is mounted
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(parseInt(savedPage));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": currentPage,
              "page[size]": pageSize,
              append: ["small_image", "medium_image",],
              sort: sortOrder,
            },
          }
        );
        console.log(response.data.data); // Debug: Log data yang diambil dari API
        setCards(response.data.data);
        setTotalPages(response.data.meta.total_pages); // Update total pages from response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, pageSize]); // Add dependencies

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1); // Reset to first page on sort change
    localStorage.removeItem("currentPage");
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page on page size change
    localStorage.removeItem("currentPage");
  };

  return (
    <div className="container relative mx-auto -my-5 p-4 ">
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Sort by:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="p-2 border rounded"
          >
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Items per page:</label>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="p-2 border rounded"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {card.small_image && card.small_image.length > 0 ? (
              <img
                className="w-full h-32 object-cover mb-2 rounded-lg"
                src={card.small_image[0].url}
                alt={card.title}
                loading="lazy"
                c
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }} // Handle image error
              />
            ) : (
              <img
                className="w-full h-32 object-cover mb-2 rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Placeholder"
              />
            )}
            <h2 className="text-sm text-gray-400 font-bold mt-10">
              {card.created_at}
            </h2>
            <h2 className="text-xl font-bold mb-2 line-clamp-3">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
        >
          &lt;
        </button>
        <span className="px-4 py-2">{currentPage} </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
        >
          &gt;
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Catalog;
