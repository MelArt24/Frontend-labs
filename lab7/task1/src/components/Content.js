import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle5: false,
            toggle6: false,
        };
    }

    toggleItem = (item) => {
        this.setState((prev) => ({ [item]: !prev[item] }));
    };

    render() {
        const { toggle5, toggle6 } = this.state;

        return (
            <div>
                <h3>Моє хобі</h3>
                <ul>
                    <li
                        style={{
                            backgroundColor: toggle5 ? "black" : "lightgreen",
                            color: toggle5 ? "lightgreen" : "black",
                            cursor: "pointer",
                        }}
                        onClick={() => this.toggleItem("toggle5")}
                    >
                        Програмування
                    </li>
                    <li
                        style={{
                            backgroundColor: toggle6 ? "blue" : "yellow",
                            color: toggle6 ? "yellow" : "blue",
                            cursor: "pointer",
                        }}
                        onClick={() => this.toggleItem("toggle6")}
                    >
                        Гра на гітарі
                    </li>
                    <li>Колекціонування LEGO фігурок</li>
                </ul>

                <h3>Мої улюблені книги/фільми</h3>
                <ol>
                    <li>1984 — Джордж Орвелл</li>
                    <li>Буквар</li>
                    <li>Star Wars - George Lucas</li>
                </ol>

                <p>
                    Мені сподобався Київ — це столиця України з унікальною архітектурою, історією та атмосферою. У Києві є багато цікавих місць, пам’ятників архітектури. Найвідоміші локації – це Майдан Незалежності, Хрещатик та Софіїївська площа, які знаходяться у центрі столиці. Зазвичай там відбуваються великі заходи та святкування. Тут є багато кафе та ресторанів, де можна скуштувати смачну українську їжу.
                </p>
            </div>
        );
    }
}

export default Content;
