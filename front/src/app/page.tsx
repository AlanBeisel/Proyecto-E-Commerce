"use client";
import DemoSlider from "./components/Carousel/DemoSlider";
import CategoryContainer from "./components/Categorias/Categoria";
import React, { useState, useEffect } from 'react';
import Carrusel from "./components/Carousel/Carrusel"






export default function Home() {

const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3001/products');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error('Error al obtener los productos:', response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    fetchProducts();
}, []);

const imageLinks = [
  "https://http2.mlstatic.com/D_NQ_976480-MLA75833607624_042024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_728428-MLA75985250771_042024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_771919-MLA76009036347_042024-OO.webp",
  "https://http2.mlstatic.com/D_NQ_719048-MLA75719183644_042024-OO.webp"
];

  return (
  <>
  
  <DemoSlider imageLinks={imageLinks} />
    <div id="categoriaContenedor">
      <h1 className="text-3xl text-white pt-10 font-bold text-center mb-4">Encontrá lo que estas buscando en nuestras categorías</h1>
      <CategoryContainer/>
    </div>
    <div id="categoriaContenedor">
    <h1 className="text-3xl text-white pt-10 font-bold text-center mb-4">Productos más populares</h1>
    <Carrusel products={products} />
    </div>
  </>
  );
}
