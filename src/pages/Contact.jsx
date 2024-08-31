import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
	return (
		<div className="flex h-screen flex-col ">
			<Navbar />
			<div className="mx-auto flex-grow px-4">
				<div className="mx-auto max-w-7xl py-12 md:py-24">
					<div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
						<div className="flex items-center justify-center">
							<div className="px-2 md:px-12">
								<p className="font-bold text-2xl text-secondary md:text-4xl">
									Get in touch
								</p>
								<p className="mt-4 text-lg text-text">
									Our friendly team would love to hear from you.
								</p>
								<form action="" className="mt-8 space-y-4">
									<div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
										<div className="grid w-full items-center gap-1.5">
											<label
												className="font-medium text-sm text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="first_name"
												id="first_name"
											>
												First Name
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="text"
												id="first_name"
												placeholder="First Name"
											/>
										</div>
										<div className="grid w-full items-center gap-1.5">
											<label
												className="font-medium text-sm text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="last_name"
											>
												Last Name
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="text"
												id="last_name"
												placeholder="Last Name"
											/>
										</div>
									</div>
									<div className="grid w-full items-center gap-1.5">
										<label
											className="font-medium text-sm text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											htmlFor="email"
										>
											Email
										</label>
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
											type="text"
											id="email"
											placeholder="Email"
										/>
									</div>
									<div className="grid w-full items-center gap-1.5">
										<label
											className="font-medium text-sm text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											htmlFor="phone_number"
										>
											Phone number
										</label>
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
											type="tel"
											id="phone_number"
											placeholder="Phone number"
										/>
									</div>
									<div className="grid w-full items-center gap-1.5">
										<label
											className="font-medium text-sm text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											htmlFor="message"
										>
											Message
										</label>
										<textarea
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
											id="message"
											placeholder="Leave us a message"
											cols="3"
										/>
									</div>
									<button
										type="button"
										className="w-full rounded-md bg-text px-3 py-2 font-semibold text-background text-sm shadow-sm hover:bg-text/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
									>
										Send Message
									</button>
								</form>
							</div>
						</div>
						<img
							alt="Contact us"
							className="mx-auto hidden max-h-full w-full rounded-lg object-contain lg:block "
							src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Contact;
