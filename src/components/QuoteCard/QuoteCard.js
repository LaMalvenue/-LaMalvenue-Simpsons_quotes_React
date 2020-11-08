import React from "react";
import "./QuoteCard.css";
import PropTypes from 'prop-types';

function QuoteCard (props) {
    return (
        <figure className="QuoteCard">
            <img alt={props.character} src={props.image}/>
            <figcaption>
                <blockquote>
                    {props.quote}
                </blockquote>
                <cite>{props.character}</cite>
            </figcaption>
        </figure>
    );
}
QuoteCard.propTypes = {
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
export default QuoteCard;