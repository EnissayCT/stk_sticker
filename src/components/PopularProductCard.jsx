import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, rating, name, price }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-64 shadow-xl bg-white/30 backdrop-blur-md border border-gray-200 mx-auto">
        <figure>
          <img src={imgURL} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            <img src={star} alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
              {rating}
            </p>
          </div>
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold font-montserrat text-red-600 text-2xl leading-normal">
            {price}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
