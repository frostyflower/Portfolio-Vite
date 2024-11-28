import React from "react";

function About() {
	return (
		<>
			<div className="grid place-items-center h-full mx-4 md:mx-24">
				<div className="md:flex flex-col md:flex-row gap-6 w-full backdrop-blur-2xl backdrop-brightness-[.85] p-[2rem] rounded-xl overflow-hidden border border-white border-opacity-20">
					<img
						src="https://nmsr.nickac.dev/fullbody/a2e71b1b-fb24-4b19-97ab-9a9f3bb38f61"
						alt="Skin"
						className="h-[400px] hidden md:block"
					/>
					<div className="md:hidden flex justify-center items-center">
						<img
							src="https://nmsr.nickac.dev/face/a2e71b1bfb244b1997ab9a9f3bb38f61"
							alt="Head"
							className="h-[100px] mb-3"
						/>
					</div>
					<div className="py-3">
						<div>
							<h1 className="text-2xl font-bold">
								Hi! I'm a 22 years old Minecraft plugin dev.
							</h1>
							<br />
							<p>
								I mainly do these work only for small to medium
								scale Minecraft server. Contact me if you want
								to make a customised plugin for your server at
								very decent prices or even free of charge for
								very small feature plugins.
							</p>
						</div>
						<div className="hidden md:flex items-center mt-6">
							<div className="mr-3">
								<button className="bg-[#7289da] rounded-lg flex hover:scale-[110%] drop-shadow-md ease-in-out duration-500 active:scale-95">
									<a href="#" className="p-3 px-5">
										<i className="fa-brands fa-discord fa-xl mr-3"></i>
										<span className="text-xl">Discord</span>
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black rounded-lg flex hover:scale-[110%] drop-shadow-md ease-in-out duration-500 active:scale-95">
									<a href="#" className="p-3 px-5">
										<i className="fa-brands fa-github fa-xl mr-3"></i>
										<span className="text-xl">GitHub</span>
									</a>
								</button>
							</div>
						</div>
						<div className="md:hidden flex gap-3 mt-6">
							<div>
								<button className="bg-[#7289da] rounded-lg flex">
									<a href="#" className="p-3 px-5">
										<i className="fa-brands fa-discord fa-md"></i>
										<span className="ml-2 text-md">Discord</span>
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black rounded-lg flex">
									<a href="#" className="p-3 px-5">
										<i className="fa-brands fa-github fa-md"></i>
										<span className="ml-2 text-md">GitHub</span>
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
