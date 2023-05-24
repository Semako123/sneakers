import React, { useState } from "react";
import {
	prod1thumb,
	prod2thumb,
	prod3thumb,
	prod4thumb,
	prod1,
	prod2,
	prod3,
	prod4,
} from "../assets";

const ProdLightBox = () => {
	const thumbnails = [
		{ thumb: prod1thumb, image: prod1 },
		{ thumb: prod2thumb, image: prod2 },
		{ thumb: prod3thumb, image: prod3 },
		{ thumb: prod4thumb, image: prod4 },
	];

	const handleThumbClick = (image: any) => {
		setCurrentImage(image);
	};

	const [currentImage, setCurrentImage] = useState(prod1);
	return (
		<div className="flex flex-col gap-10 items-center">
			<div className="hover:cursor-zoom-in">
				<img
					src={currentImage}
					alt=""
					className="w-[350px] h-[400px] rounded-3xl"
				/>
			</div>
			<div className="flex gap-6">
				{thumbnails.map((images, index) => (
					<div
						className={`${
							currentImage === images.image
								? "bg-light-opacity-blur"
								: "hover:bg-light-opacity"
						} hover:cursor-pointer rounded-md overflow-hidden w-20 h-20 relative`}
						onClick={() => {
							handleThumbClick(images.image);
						}}>
						<img
							src={images.thumb}
							alt=""
							className="absolute w-20 h-20 -z-10"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProdLightBox;
