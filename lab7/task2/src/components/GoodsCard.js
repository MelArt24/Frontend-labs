import React from "react";

function GoodsCard({ name, price, image }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                margin: "10px",
                width: "200px",
                textAlign: "center",
                flex: "0 0 22%"
            }}
        >
            <img
                src={image}
                alt={name}
                width="180"
                style={{
                    height: "130px",
                    width: "auto",
                    borderRadius: "5px",
            }}
        />
            <h3 style={{ fontSize: "16px", margin: "10px 0 5px 0" }}>{name}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>{price} грн</p>
        </div>
    );
}

export default GoodsCard;
