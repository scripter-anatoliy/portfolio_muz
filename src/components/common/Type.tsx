import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Музыкальный руководитель",
                    "Лучший музрук года",
                    "Создаю интересные сценарии",
                    "Обожаю свою работу",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;