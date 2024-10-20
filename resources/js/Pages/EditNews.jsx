import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function EditNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }
        Inertia.post('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title || 'Homepage'} />
            <Navbar user={props.auth.user} />
            <div className="mt-6 card w-full lg:w-96 bg-base-100 shadow-xl">
               <div className='p-4 text-2xl'>EDIT BERITA</div>
                <div className="card-body">
                    <input type="text" placeholder="Title" className="m-2 input input-bordered w-full" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
                    <input type="text" placeholder="Description" className="m-2 input input-bordered w-full" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
                    <input type="text" placeholder="Category" className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
                    <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>UPDATE</button>
                </div>
            </div>
        </div>
    )
}


