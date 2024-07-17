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
        name: "Product 1",
        image:
        "https://images2.ray-ban.com//cdn-record-files-pi/389b6a45-c68e-4990-a2b5-b09e000d93de/dbfc6456-c4bb-43fc-962c-b09e000d96a9/0RB2140__1355R5__P21__shad__qt.png?impolicy=RB_Product_clone&width=2048&bgc=%23f2f2f2",
        price:"EUR 163,00",
        description:
        "ORIGINAL WAYFARER CLASSIC"
    },
    {
        id:"2",
        name: "Product 2",
        image:
        "https://images2.ray-ban.com//cdn-record-files-pi/b3edecd0-20a4-434b-83f8-b09d016fadb9/fdb5c1e7-2244-4eb5-8ac4-b09e00118c56/0RB4431__6763_2__P21__shad__qt.png?impolicy=RB_Product_clone&width=2048&bgc=%23f2f2f2",
        price:"EUR 157,00",
        description:
        "XAN BIO-BASED"
    },
    {
        id:"3",
        name: "Product 3",
        image: 
        "https://images2.ray-ban.com//cdn-record-files-pi/ec04a3ae-916d-4cbd-a691-a3d30001b05d/5d8261a8-931c-4f90-a14f-acfd003b9a31/0RB2180__710_73__STD__shad__qt.png?impolicy=RB_Product_clone&width=2048&bgc=%23f2f2f2",
        price:"EUR 162,00",
        description:
        "RB2180"
    },
    {
        id:"4",
        name: "Product 4",
        image: 
        "https://images2.ray-ban.com//cdn-record-files-pi/3a45e9d6-bfdc-4aa9-aa9a-af5400aff7ec/b31fb292-7a4c-4242-a44d-af5400affaf3/0RB4395__667980__P21__shad__qt.png?impolicy=RB_Product_clone&width=2048&bgc=%23f2f2f2",
        price:"EUR 152,00",
        description:
        "KILIANE BIO-BASED LIMITED"
    },
    {
        id:"5",
        name: "Product 5",
        image: 
        "https://images2.ray-ban.com//cdn-record-files-pi/6e05ca5e-5d46-480a-a6f8-ab5300de0f07/bc492286-e47e-4b89-a428-ad3301341a1b/0RB3548N__001_R5__STD__shad__qt.png?impolicy=RB_Product_clone&width=2048&bgc=%23f2f2f2",
        price:"EUR 163,00",
        description:
        "HEXAGONAL FLAT LENSES"
    },
    {
        id:"6",
        name: "Product 6",
        image: 
        "https://images2.ray-ban.com//cdn-record-files-pi/47667a3a-c22c-4288-be2d-b0a800ef5034/190becd0-415b-48cc-9508-b0a800f80679/0RB4395__135971__P21__shad__qt.png?impolicy=RB_Product_clone&width=2048&bgc=%23f2f2f2",
        price:"EUR 152,00",
        description:
        "KILIANE BIO-BASED"
    },
];
export default mockProducts;