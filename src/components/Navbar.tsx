import { avatar, cartIco, logo } from "../assets";

const Navbar = () => {
	return (
		<nav className="flex items-center py-6 border-b-[1px] mx-5">
			<img src={logo} alt="sneakers" />
			<div className="flex items-center w-full">
				<ul className="ml-12 flex list-none gap-6">
					<li className="text-sm text-gray-500 cursor-pointer">Collection</li>
					<li className="text-sm text-gray-500 cursor-pointer">Men</li>
					<li className="text-sm text-gray-500 cursor-pointer">Women</li>
					<li className="text-sm text-gray-500 cursor-pointer">About</li>
					<li className="text-sm text-gray-500 cursor-pointer">Contact</li>
				</ul>
				<img
					src={cartIco}
					alt="cart"
					className="h-5 ml-auto mr-10 cursor-pointer"
				/>
                <div className="hover:border-orange border-2 border-transparent rounded-full">
					<img src={avatar} alt="user" className="h-14 cursor-pointer" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
