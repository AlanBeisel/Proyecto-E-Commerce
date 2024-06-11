import Link from 'next/link';


interface Category {
    title: string;
    imageSrc: string;
    link: string;
}


const CategoryCard: React.FC<Category> = ({ title, imageSrc, link }) => {
    return (
        <div id='categorias' className=" p-4 m-4 relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            
            <img src={imageSrc} alt={title} className="w-full h-48 rounded-t-xl object-cover" />
            
            <div  className="p-4">
                
                <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
                
                <Link href={link}>
                    <button  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        Ir a la categoría
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;


