import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, details, category, photo};

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                },
                body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })  
            }
        })


    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold text-purple-600 text-center">Add New Coffee</h1>
            <p className="text-center mt-5 mb-10 text-gray-600">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
    );
};

export default AddCoffee;