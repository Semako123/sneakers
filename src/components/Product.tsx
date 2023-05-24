import React from "react";
import ProdDetail from "./ProdDetail";
import ProdLightBox from "./ProdLightBox";

const Product = () => {
	return (
		<div className="flex flex-wrap mx-auto my-10 w-fit">
			<ProdLightBox />
			<ProdDetail />
		</div>
	);
};

export default Product;
