import React from 'react';
import './Banner.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

function Banner() {
    return (
        <div className="banner" >
            <img className="banner_image" src="https://i0.wp.com/www.secondhalftravels.com/wp-content/uploads/2018/08/Dark-German-series-Netflix.jpg?fit=1800%2C720&ssl=1" alt="" srcSet="" />
            <h3>NETFLIX <small>ORIGINAL</small></h3>
            <h1>DARK</h1>

            <div className="button_container">
                <button className="button1">
                    <PlayArrowIcon style={{ fontSize: 10 }} />Play
                    </button>
                <button className="button2">
                    <AddIcon style={{ fontSize: 10 }} />My List
                    </button>
            </div>
            <div className="intro_container">
                <p className="intro">
                    A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.
                        </p>
            </div>

        </div>
    )
}

export default Banner; 
