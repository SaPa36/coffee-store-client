import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })  
                .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
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
                        <Link to={`/update-coffee/${_id}`}>

                            <button className="btn join-item">Edit</button>
                        
                        
                        </Link>
                        <button onClick={() => handleDelete(_id)}
                            className="btn join-item bg-red-700">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;