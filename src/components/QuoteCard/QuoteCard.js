import React from "react";
import "./QuoteCard.css";

const nelson = "Nelson Muntz";

function QuoteCard () {
    return (
        <figure className="QuoteCard">
            <img alt={nelson} src="https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"/>
            <figcaption>
                <blockquote>
                    Shoplifting is a victimless crime, like punching someone in the dark.
                </blockquote>
                <cite>{nelson} </cite>
            </figcaption>
        </figure>
    );
}

export default QuoteCard;