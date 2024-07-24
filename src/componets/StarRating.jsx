import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='mt-20 h-60 '>
            <div className='flex justify-center items-center '>
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label key={index}>
                            <input
                                type='radio'
                                name='rating'
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                className='hidden'
                            />
                            <FaStar
                                size={50}
                                className='cursor-pointer'
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            <div className='ml-4 text-lg '>{rating ? `Rating: ${rating}/5` : 'Rate me!'}</div>
        </div>
    );
};

export default StarRating;
