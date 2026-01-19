import React from 'react';

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-[#D2B48C] shadow-sm">
            <figure>
                <img
                    src={photo} alt={name} />
            </figure>
            <div className=" md:flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{quantity}</p>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View </button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item bg-red-700">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;