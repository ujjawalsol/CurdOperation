import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState(null);
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setError(null);
		try {
			await login(email, password);
		} catch (error) {
			setError('There was an error logging in!');
		}
	};

	const handleForgotPassword = () => {
		navigate('/forgot-password');
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Login</h2>
				{error && <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block mb-2 text-gray-700">Email</label>
						<input
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div className="mb-6 relative">
						<label className="block mb-2 text-gray-700">Password</label>
						<input
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 focus:outline-none mt-8"
						>
							{showPassword ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12l-3-3m0 0l-3 3m3-3v12" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
								</svg>
							)}
						</button>
					</div>
					<button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700">
						Login
					</button>
				</form>
				<div className="flex justify-between mt-4">
					<Link to="/forgot-password" className="text-blue-500 hover:underline">
						Forgot Password
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
