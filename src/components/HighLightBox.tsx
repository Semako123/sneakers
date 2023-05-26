import ReactDOM from "react-dom";
import HighLightComp from "./HighLightComp";
import { closeIco } from "../assets";

const HighLightBox = ({
	setHighLightBox,
}: {
	setHighLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return ReactDOM.createPortal(
		<div
			className={`bg-black-opacity-75 absolute top-0 h-full  w-[100%] flex-col flex items-center justify-center z-30`}>
			<div
				onClick={() => {
					setHighLightBox(false);
				}}
				className="cursor-pointer font-bold mb-2 z-10 mx-auto w-[400px] flex justify-end">
				<img src={closeIco} alt="" className="h-5" />
			</div>
			<HighLightComp />
		</div>,
		document.querySelector("body")!
	);
};

export default HighLightBox;
