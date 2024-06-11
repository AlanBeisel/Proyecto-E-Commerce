import DemoSlider from "./components/Carousel/DemoSlider";
import CategoryContainer from "./components/Categorias/CategoryContainer";
import React from 'react';
import Carrusel from "./components/Carousel/Carrusel"





export default function Home() {


  return (
  <>
  <DemoSlider/>
    <div id="categoriaContenedor">
      <h1 className="text-3xl text-white pt-10 font-bold text-center mb-4">Encontrá lo que estás buscando en nuestras categorías</h1>
      <CategoryContainer/>
    </div>
    <div id="categoriaContenedor">
    <h1 className="text-3xl text-white pt-10 font-bold text-center mb-4">Productos más populares</h1>
    <Carrusel />
    </div>
  </>
  );
}
