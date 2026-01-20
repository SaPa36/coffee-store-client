import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
    
            const newCoffee = { name, quantity, supplier, taste, category, details, photo };
            console.log(newCoffee);
    
            // send data to the server
            fetch(`http://localhost:3000/coffee/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
    }

    return (
        <div className='bg-[#FFFFFF] p-24'>
            <h2 className='text-5xl text-green-800  '>Update Coffee {name}</h2>
            <form onSubmit={handleUpdateCoffee}>

                {/* Name and Quantity row */}
                <div className='md:flex  '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Name</legend>
                            <input type="text" className="input w-full" name='name' defaultValue={name} placeholder="Name" />
                        </fieldset>
                    </div>

                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Available Quantity</legend>
                            <input type="text" className="input w-full " name='quantity' defaultValue={quantity} placeholder="Available Quantity" />
                        </fieldset>
                    </div>
                </div>

                {/* Supplier and Taste row */}
                <div className='md:flex  '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Supplier</legend>
                            <input type="text" className="input w-full" name='supplier' defaultValue={supplier} placeholder="Supplier" />
                        </fieldset>
                    </div>

                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Taste</legend>
                            <input type="text" className="input w-full " name='taste' defaultValue={taste} placeholder="Taste" />
                        </fieldset>
                    </div>
                </div>

                {/* Category and Details row */}
                <div className='md:flex  '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Category</legend>
                            <input type="text" className="input w-full" name='category' defaultValue={category} placeholder="Category" />
                        </fieldset>
                    </div>

                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Details</legend>
                            <input type="text" className="input w-full " name='details' defaultValue={details} placeholder="Details" />
                        </fieldset>
                    </div>
                </div>

                {/* Photo URL row */}
                <div className='md:flex mr-4 '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Photo URL</legend>
                            <input type="text" className="input w-full" name='photo' defaultValue={photo} placeholder="Photo URL" />
                        </fieldset>
                    </div>

                </div>

                <input type="submit" value="Update Coffee" className='btn btn-block mt-6 bg-green-800 text-white' />
            </form>
        </div>
    );
};

export default UpdateCoffee;