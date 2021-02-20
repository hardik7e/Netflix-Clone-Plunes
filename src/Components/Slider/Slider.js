import React, { useState, useEffect } from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel';
import Card from '../Cards/Card';
import Details from '../Cards/Details';

const movies=[
    {
        id:1,
        image:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg',
        imageBg:'https://media1.popsugar-assets.com/files/thumbor/Nx6oVxK94KWwtPEJNPPMe2WcMhs/0x128:3000x1364/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/08/738/n/41541398/bd845f4d5eb58c3857c961.13127877_.jpg',
        title:'Never Have I Ever'
    },
    {
        id:2,
        image:'https://deadline.com/wp-content/uploads/2020/10/money-heist-part-4-preview-netflix.jpg',
        imageBg:'https://filmdaily.co/wp-content/uploads/2019/07/13MH-1300x731.jpeg',
        title:'Money Heist'
    },
    {
        id:3,
        image:'https://hashtaglegend.com/storage/app/media/2019%20Articles/May/Ntflix%20black%20mirror/cropped-images/og-0-0-0-0-1558510331.jpeg',
        imageBg:'https://ds1.static.rtbf.be/article/image/1248x702/3/a/9/42ca90c19da1a087068405feab9f91fb-1546871833.jpg',
        title:'Black Mirror'
    },
    {
        id:4,
        image:'https://i.ytimg.com/vi/i1eJMig5Ik4/maxresdefault.jpg',
        imageBg:'https://i.ytimg.com/vi/rQvIR1oL1vE/maxresdefault.jpg',
        title:'Bojack Horseman'
    },
    {
        id:5,
        image:'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcZYLTMVLSMQCL5WrpoOycBX7LEB42HgaIwNeeLVpO-vsqmkqPzaJoEZDHia_nsZzXobJJKm2sdrYAUu3y6_5KUln5WSk_E1rZS5Ks5mA-vLmQ0vCyn_-gevieFlSw.jpg',
        imageBg:'https://educationpost.org/wp-content/uploads/2019/05/13reasonswhy.png',
        title:'13 Reasons Why'
    },
    {
        id:6,
        image:'https://i.ytimg.com/vi/i1eJMig5Ik4/maxresdefault.jpg',
        imageBg:'https://i.ytimg.com/vi/rQvIR1oL1vE/maxresdefault.jpg',
        title:'Bojack Horseman'
    },
]

function Slider() {

    const breackPoints = [
        {width:1, itemsToShow:1},
        {width:500, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:4},        
    ]

    const [button,setbutton] = useState(false);
    const [state,setState] = useState();

    useEffect(() => {
        setState(state)
        return () => {
        }
    }, [state]);
    
    let arr = [];

    const hey = ()=>{

    }

    const movieID = state;
    const movieClicks = [
        movies[movieID]
    ]

    const handleClick = (i,event)=>{
        arr = [i];
        setState(i);    
        setbutton(!button)
    }

    return (
        <div className="slidder">
            <Carousel breakPoints={breackPoints}>
                {movies.map((movie,i)=>(
                    <span key={i}>
                        <button className="button3" onClick={hey(), handleClick.bind(this,i)}><Card movie={movie} title={movie.title} image={movie.image} ></Card></button>
                    </span>
                ))}
            </Carousel>
            {button && movieClicks.map ((movieClick,i)=>(
                <span key = {i}>
                    <Details title={movieClick.title} image={movieClick.imageBg}>item1</Details>
                </span>
            ))}
        </div>
    )
}

export default Slider
