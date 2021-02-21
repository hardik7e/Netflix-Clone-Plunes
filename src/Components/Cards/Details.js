import React from 'react';
import './Details.css';

function Details({title,image}) {
    return (
        <div className="details">
            <div className="details_background">
                <div className="details_background_shadow"></div>
                <img className="details_background_image" src={image} alt="" srcSet=""/>
            </div>

            <div className="details_area">
                <div className="details_area_container">
                    <div className="details_title">{title}</div>
                    <div className="details_description">
                    Most of the carousel components are responsive to the viewport size, but this is not a real responsive support as we can have an element with a width:500px on a 1200px screen, most carousel component will "think" we are on a 1200px mode because they "watch" the view-port's size and not the wrapping element's size. This is the reason why react-eleastic-carousel is using the resize-observer which gives us a true responsive support, not matter on what screen size we are.
                    </div>
                </div>
                <button className="trailerButton">Trailer</button>
            </div>

                        
        </div>
    )
}

export default Details
