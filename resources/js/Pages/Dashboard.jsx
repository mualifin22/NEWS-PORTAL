import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsnotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data)
        setIsnotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('/news')
        }
        return;
    }, [])

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    My News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 m-3">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="p-6 text-gray-900 bg-base-100">
                        {isNotif && <div role="alert" className="alert alert-info">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 shrink-0 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>{props.flash.message}</span>
                        </div>
                        }
                        <input type="text" placeholder="Title" className="m-2 input input-bordered w-full" onChange={(title) => setTitle(title.target.value)} value={title} />
                        <input type="text" placeholder="Description" className="m-2 input input-bordered w-full" onChange={(description) => setDescription(description.target.value)} value={description} />
                        <input type="text" placeholder="Category" className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} value={category} />
                        <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>SUBMIT</button>
                    </div>
                </div>
                <div className='p-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    {props.myNews && props.myNews.length > 0 ? props.myNews.map((news, i) => {
                        return (
                            <div key={i} className="mt-6 card w-full lg:w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {news.title}
                                        {/* <div className="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p>{news.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">{news.category}</div>
                                        <div className="badge badge-outline">
                                            <Link href={route('edit.news')} method='get' data={{ id: news.id }}>
                                            Edit
                                            </Link>
                                            </div>
                                        <div className="badge badge-outline">
                                            <Link href={route('delete.news')} method='post' data={{ id: news.id }}>
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <p>Anda Belum Memiliki Berita</p>}

                </div>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
