
import Image from 'next/image';
import React from 'react';

const Card = ({coffee}) => {
    const {coffeeName, price, ratings, image}= coffee;
    return (
        <div className='card shadow-lg p-4 text-center rounded-md'>
            <Image
            className='rounded-md'
            src={image}
            height={300}
            width={400}
            alt='img'></Image>
            <div className=' card-body
            flex justify-between items-center'>
                <div className=''>
                <h1 className='card-title font-extrabold '>{coffeeName}</h1>
            <p>price:<span className='font-semibold'>${price}</span></p>
            <p>ratings: <span className='text-teal-600 font-semibold'>{ratings}</span></p>
                </div>
                <div className='card-actions'>
                    <button className='btn btn-outline '>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;