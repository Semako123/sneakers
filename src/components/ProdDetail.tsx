import React, { useState } from "react";
import Button from "./Button";
import { cartIco2 } from "../assets";

const ProdDetail = () => {
	const handleIncrement = () => {
		setQuantity((state) => (state += 1));
	};

	const handleDecrement = () => {
		setQuantity((state) => (state === 0 ? state : (state -= 1)));
	};

	const [quantity, setQuantity] = useState(0);
	return (
		<div className=" w-[500px] flex flex-col justify-center">
			<h3 className="text-orange uppercase text-[0.85rem] tracking-widest">
				Sneaker Company
			</h3>
			<h2 className="capitalize font-bold text-5xl mt-5 mb-7">
				Fall Limited Edition Sneakers
			</h2>
			<p className="text-base text-gray-500">
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer
			</p>

			<div className="flex gap-4 items-center mt-5 mb-2">
				<p className="font-bold text-2xl">$125.00</p>
				<div className="rounded text-orange text-sm font-bold grid place-items-center h-5 px-2 bg-pale-orange">
					50%
				</div>
			</div>
			<p className="font-bold text-gray-300 line-through">$250.00</p>
			<div className="mt-5 flex gap-3">
				<div className="flex bg-grayish-blue w-[30%] justify-evenly h-12 rounded-md">
					<button
						className="text-light-orange font-bold text-2xl"
						onClick={handleDecrement}>
						-
					</button>
					<div className="grid place-items-center font-bold">{quantity}</div>
					<button
						className="text-light-orange font-bold text-2xl"
						onClick={handleIncrement}>
						+
					</button>
				</div>
				<Button active={quantity !== 0}>
					<div className="flex gap-3 items-center">
						<img src={cartIco2} alt="" className="h-4" /> Add to Cart
					</div>
				</Button>
			</div>
		</div>
	);
};

export default ProdDetail;
