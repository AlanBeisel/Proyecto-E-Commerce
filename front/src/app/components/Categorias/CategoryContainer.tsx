import CategoryCard from "./Categoria";


interface Category {
    title: string;
    imageSrc: string;
    link: string;
}


const CategoryContainer: React.FC = () => {

    const categories: Category[] = [
        {
            title: 'Celulares',
            imageSrc: 'https://img.freepik.com/foto-gratis/composicion-creativa-carretes_23-2149711507.jpg?t=st=1714143908~exp=1714147508~hmac=72ac56ccf5be32974df82c394ca84f50744ab11ae30608fc051164a9449de83a&w=1380', // Cambia esta URL a la imagen correspondiente
            link: '/categorias/smartphones'
        },
        {
            title: 'Notebooks',
            imageSrc: 'https://img.freepik.com/psd-gratis/mock-up-portatil-sobre-fondo-azul_1022-178.jpg?w=996&t=st=1714144092~exp=1714144692~hmac=85184caa6367f9f7122b25ab95e5954ff320ebe93b089dc42f7f696dd5672129', // Cambia esta URL a la imagen correspondiente
            link: '/categorias/laptops'
        },
        {
            title: 'Auriculares',
            imageSrc: 'https://img.freepik.com/foto-gratis/auriculares-vista-superior-sobre-fondo-rosa_23-2148681142.jpg?t=st=1714144133~exp=1714147733~hmac=e21150dca2f471aef78768aa82f7bc2a82795cec9bb4dc4b7046d055a7de2468&w=826', // Cambia esta URL a la imagen correspondiente
            link: '/categorias/headphones'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
            ))}
        </div>
    );
};


export default CategoryContainer;