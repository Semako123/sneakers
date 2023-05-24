import React from "react";
import ProdDetail from "./ProdDetail";
import ProdLightBox from "./ProdLightBox";

const Product = () => {
	return (
		<div className="flex flex-wrap my-10 justify-evenly">
			<ProdLightBox />
			<ProdDetail />
		</div>
	);
};

export default Product;
