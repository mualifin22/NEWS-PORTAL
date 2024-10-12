import { Link } from "@inertiajs/inertia-react"

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl">INUMA NEWS</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                {!user ?
                                    <>
                                        <div className="avatar bg-white">
                                            <div className="w-12">
                                                <img src="https://cdn-icons-png.flaticon.com/128/10412/10412383.png"/>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <><span className="text-xs">{user.name.charAt(0).toUpperCase()}{user.name.charAt(1).toUpperCase()}</span>
</>
                                }
                            </div>
                        </div>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {!user ?
                            <>
                                <li><Link href={route('login')} as="button">Login</Link></li>
                                <li><Link href={route('register')} as="button">Register</Link></li>
                            </>
                            :
                            <>
                                <li>
                                    <Link href={route('dashboard')} as="button" className="justify-between">
                                        Dashboard
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link href={route('logout')} as="button" method="post">Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
