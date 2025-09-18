import React, { useState } from "react";

function Image() {
    const [images, setImages] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const addImage = () => {
        setImages([...images, { src: "https://tvoemisto.tv/media/gallery/full/u/n/untitled-1_34659.jpg", width: 400 }]);
    };

    const increaseImage = () => {
        if (selectedIndex !== null) {
            const newImages = [...images];
            newImages[selectedIndex].width += 50;
            setImages(newImages);
        }
    };

    const decreaseImage = () => {
        if (selectedIndex !== null && images[selectedIndex].width > 50) {
            const newImages = [...images];
            newImages[selectedIndex].width -= 50;
            setImages(newImages);
        }
    };

    const removeImage = () => {
        if (selectedIndex !== null) {
            const newImages = images.filter((_, i) => i !== selectedIndex);
            setImages(newImages);
            setSelectedIndex(null);
        }
    };

    return (
        <div>
            <img
                src="https://tvoemisto.tv/media/gallery/full/u/n/untitled-1_34659.jpg"
                alt="Фото Києва"
                width={400}
                style={{ margin: "10px" }}
            />

            <div className="buttons">
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>

            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src}
                    alt="Фото Києва"
                    width={img.width}
                    style={{ border: selectedIndex === index ? "2px solid red" : "", margin: "10px", cursor: "pointer" }}
                    onClick={() => setSelectedIndex(index)}
                />
            ))}
        </div>
    );

}

export default Image;
