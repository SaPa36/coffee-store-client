import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
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
        fetch('coffee-store-server-mwf4-8f385vin6-nur-sapas-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-[#FFFFFF] p-24'>
            <h2 className='text-5xl text-green-800  '>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>

                {/* Name and Quantity row */}
                <div className='md:flex  '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Name</legend>
                            <input type="text" className="input w-full" name='name' placeholder="Name" />
                        </fieldset>
                    </div>

                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Available Quantity</legend>
                            <input type="text" className="input w-full " name='quantity' placeholder="Available Quantity" />
                        </fieldset>
                    </div>
                </div>

                {/* Supplier and Taste row */}
                <div className='md:flex  '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Supplier</legend>
                            <input type="text" className="input w-full" name='supplier' placeholder="Supplier" />
                        </fieldset>
                    </div>

                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Taste</legend>
                            <input type="text" className="input w-full " name='taste' placeholder="Taste" />
                        </fieldset>
                    </div>
                </div>

                {/* Category and Details row */}
                <div className='md:flex  '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Category</legend>
                            <input type="text" className="input w-full" name='category' placeholder="Category" />
                        </fieldset>
                    </div>

                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Details</legend>
                            <input type="text" className="input w-full " name='details' placeholder="Details" />
                        </fieldset>
                    </div>
                </div>

                {/* Photo URL row */}
                <div className='md:flex mr-4 '>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Photo URL</legend>
                            <input type="text" className="input w-full" name='photo' placeholder="Photo URL" />
                        </fieldset>
                    </div>

                </div>

                <input type="submit" value="Add Coffee" className='btn btn-block mt-6 bg-green-800 text-white' />
            </form>
        </div>
    );
};

export default AddCoffee;