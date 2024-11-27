import React from 'react';

function LandingPage() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
			<div className="bg-white p-6 md:p-8 px-10 sm:px-6 rounded-lg shadow-lg text-center max-w-full sm:max-w-lg md:max-w-2xl">
				<h1 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">Welcome to Mern Curd Application</h1>
				<p className="text-sm sm:text-base text-gray-700 mb-8">
					A simple application to manage users. You can create, update, delete, and search for users. Sign up to get started or log in
					if you already have an account.
				</p>
			</div>
		</div>
	);
}

export default LandingPage;
