import img1 from '../assets/img/ORIGINAL WAYFARER CLASSIC.jpg';
import img2 from '../assets/img/XAN BIO-BASED.jpg';
import img3 from '../assets/img/RB2180.jpg';
import img4 from '../assets/img/KILIANE BIO-BASED LIMITED.jpg';
import img5 from '../assets/img/HEXAGONAL FLAT LENSES.jpg';
import img6 from '../assets/img/KILIANE BIO-BASED.jpg';

export interface Product{
    id: string;
    name: string;
    image?: string;
    price: string;
    description: string;
}

const mockProducts: Product[] = [
    {
        id:"1",
        name: "ORIGINAL WAYFARER CLASSIC",
        image: img1,
        price:"EUR 163,00",
        description:
        "ORIGINAL WAYFARER CLASSIC"
    },
    {
        id:"2",
        name: "XAN BIO-BASED",
        image: img2,
        price:"EUR 157,00",
        description:
        "XAN BIO-BASED"
    },
    {
        id:"3",
        name: "RB2180",
        image: img3,
        price:"EUR 162,00",
        description:
        "RB2180"
    },
    {
        id:"4",
        name: "KILIANE BIO-BASED LIMITED",
        image: img4,
        price:"EUR 152,00",
        description:
        "KILIANE BIO-BASED LIMITED"
    },
    {
        id:"5",
        name: "HEXAGONAL FLAT LENSES",
        image: img5,
        price:"EUR 163,00",
        description:
        "HEXAGONAL FLAT LENSES"
    },
    {
        id:"6",
        name: "KILIANE BIO-BASED",
        image: img6,
        price:"EUR 152,00",
        description:
        "KILIANE BIO-BASED"
    },
];
export default mockProducts;