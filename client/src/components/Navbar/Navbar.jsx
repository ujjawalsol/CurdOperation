import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function Navbar() {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className="bg-[#08162E] p-4 text-white">
			<div className="max-w-full mx-auto flex justify-between items-center">
				{/* Logo Section */}
				<Link to="/" className="flex items-center">
					<img src="merncurd.png" alt="Logo" className="w-40 h-8 md:w-[100%] md:h-8" /> {/* Add your logo path here */}
				</Link>

				{/* Navigation Links */}
				<div className="flex items-center space-x-4">
					{user ? (
						<>
							<span className="mr-4 hidden md:block">Welcome: {user.firstname}</span>
							<button onClick={logout} className="bg-red-500 px-3 py-2 rounded hover:bg-red-700">
								Logout
							</button>
						</>
					) : (
						<>
							<Link style={{ fontWeight: '20px' }} to="/signup" className="bg-white text-gray-600 px-3 py-2 rounded hover:bg-gray-200">
								Sign Up
							</Link>
							<Link style={{ fontWeight: '20px' }} to="/login" className="bg-white text-gray-600 px-3 py-2 rounded hover:bg-gray-200">
								Sign In
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
