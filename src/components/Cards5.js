import Card5Layout from "./Card5Layout";
import React from "react";

export function Cards5({cards}) {
    return <section className="images5-layout">
        {cards.map((item) => (
                <Card5Layout key={item.id} {...item} />
            )
        )}
    </section>;
}