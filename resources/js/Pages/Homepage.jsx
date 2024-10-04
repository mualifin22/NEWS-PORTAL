import NewsLists from '@/Components/Homepage/NewsLists';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title || 'Homepage'} />
            <Navbar />
            <NewsLists />
        </div>
    )
}
