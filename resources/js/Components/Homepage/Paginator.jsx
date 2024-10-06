import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join">
            {prev && <Link href={prev} className="join-item btn">{current - 1}</Link>}
            <Link className="join-item btn btn-active">{current}</Link>
            {next && <Link href={next} className="join-item btn">{current + 1}</Link>}
        </div>
    )
}

export default Paginator
