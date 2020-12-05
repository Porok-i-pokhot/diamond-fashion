import Card8Layout from "./Card8Layout";
import React from "react";

export function Cards8({cards}) {
    return <section className="images8-layout">
        {cards.map((item) => (
                <Card8Layout key={item.id} {...item} />
            )
        )}
    </section>;
}