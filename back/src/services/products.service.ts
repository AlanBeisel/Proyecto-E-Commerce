import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getProductByIdService = async (id: number): Promise<Product | null> => {
  try {
      // Buscar el producto por su ID en la base de datos
      const product: Product | null = await ProductRepository.findOneBy({id: id}
      );

      // Si no se encuentra el producto, devuelve null
      if (!product) {
          return null;
      }

      // Devuelve el producto encontrado
      return product;
  } catch (error) {
      // Manejo de errores
      throw new Error("Error al obtener el producto por su ID");
  }
};
