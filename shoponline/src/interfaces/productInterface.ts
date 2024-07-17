export interface Product{
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
}

const mockProducts: Product[] = [
    {
        id:"1",
        name: "Product 1",
        image:
        "https://unsplash.com/it/foto/white-and-brown-chairs-beside-wicker-basket-near-white-wall-7tFlUFGa7Dk",
        price:"9.99",
        description:
        "Foto, Camera, Spazio, Interni"
    },
    {
        id:"2",
        name: "Product 2",
        image:
        "https://unsplash.com/it/foto/divano-a-pozzetto-imbottito-in-pelle-nera-e-marrone-Uxqlfigh6oE",
        price:"19.99",
        description:
        "Foto, Architettura & Interni, Colore dell'acqua"
    },
    {
        id:"3",
        name: "Product 3",
        image:
        "https://unsplash.com/it/foto/brown-wooden-framed-yellow-padded-chair-_HqHX3LBN18",
        price:"29.99",
        description:
        "Foto, Rendering 3D, Architettura & Interni"
    },
];
export default mockProducts;