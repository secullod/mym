import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.scss'
import {NASA_API_KEY} from "../../variables";

export const Home = () => {
    const [imageURL, setImageURL] = useState<string>('');
    const [imageText, setImageText] = useState<string>('');
    const [imageTitle, setImageTitle] = useState<string>('');


    useEffect(() => {
        const getNasaImage = async () => {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`, {});
            setImageURL(response.data.url);
            setImageText(response.data.explanation)
            setImageTitle(response.data.title)
        }

        getNasaImage();
    }, []);

    return (
        <div className='container'>
            <div className="image-title"><strong>Image Title: </strong>{imageTitle}</div>
            <div className='image'> {imageURL && <img src={imageURL} alt="NASA Image of the Day" />}</div>
            <div className="image-text"><strong>Image description: </strong> {imageText}</div>
        </div>
    );
}
