import React from "react";
import GoodsCard from "./GoodsCard";

const legoProducts = [
    {
        name: "LEGO Star Wars 75375: Millennium Falcon",
        price: 4999,
        image: "https://www.lego.com/cdn/cs/set/assets/bltea91c53f2609bfa5/75375.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    },
    {
        name: "LEGO Star Wars 75355: X-Wing Fighter",
        price: 9499,
        image: "https://www.lego.com/cdn/cs/set/assets/bltec62b553a047fa14/75355_alt1.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75419: Death Star",
        price: 41999,
        image: "https://www.lego.com/cdn/cs/set/assets/bltaa004dbe06f406ed/75419_Box1_v39.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75417: Walker AT-ST",
        price: 7899,
        image: "https://www.lego.com/cdn/cs/set/assets/bltca30d9f8250ea54f/75417_boxprod_v39_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars: TIE Interceptor",
        price: 11699,
        image: "https://www.lego.com/cdn/cs/set/assets/bltc4bbe82059a1ae71/75382_boxprod_v39.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75429: At-At Driver helmet",
        price: 3949,
        image: "https://www.lego.com/cdn/cs/set/assets/bltb887e3d6862affea/75429_boxprod_v39_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75394: Imperial Star Destroyer",
        price: 7999,
        image: "https://www.lego.com/cdn/cs/set/assets/bltb6f5dfaf01195072/75394_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75407: Star Wars Logo",
        price: 2399,
        image: "https://www.lego.com/cdn/cs/set/assets/blt99c7eb3388a175f4/75407_boxprod_v39_sha_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75391: Y-Wing Starfighter",
        price: 499,
        image: "https://www.lego.com/cdn/cs/set/assets/blt3bfa965b35043abb/75391.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        name: "LEGO Star Wars 75399: U-Wing Rebel fighter",
        price: 2469,
        image: "https://www.lego.com/cdn/cs/set/assets/blt7927e79083610b0b/75399_boxprod_v39_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
];

function Gallery() {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            {legoProducts.map((product, index) => (
                <GoodsCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default Gallery;
