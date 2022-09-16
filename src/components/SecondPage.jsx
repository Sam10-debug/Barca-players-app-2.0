
import { useContext } from 'react';
import { BarcaContext } from '../Context/BarcaContext';

const SecondPage = () => {

	const {data}=useContext(BarcaContext)

	return ( 
		<section className="">
			<div className="img-container flex items-center justify-center flex-col">
				<h1 className="text-4xl opacity-50 text-white font-bold">{data.name}</h1>
				<h2 className="text-6xl my-2 text-white">{data.squad_number}</h2>
				<img src={data.img} alt="player-image" className="h-[200px] w-1/2" />
			</div>
			<div className="info h-[50px] flex justify-center items-center">
				<h3 className="text-2xl font-bold">Player Info</h3>
			</div>
			<div className="px-2">
					<div className="border-slate-100 border-b-[2px] pb-2">
						<span className="">Name</span>
						<h2 className="font-bold text-[25px] leading-[29px] big-text ">{data.name}</h2>
					</div>
					<div className="border-slate-100 border-b-[2px]  pb-2">
						<span className="">Age</span>
						<h2 className="font-bold text-[25px] leading-[29px] big-text ">{data.age}</h2>
					</div>
					<div className="border-slate-100 border-b-[2px]  pb-2">
						<span className="">Position</span>
						<h2 className="font-bold text-[25px] leading-[29px] big-text ">{data.position}</h2>
					</div>
					<div className="border-slate-100 border-b-[2px]  pb-2">
						<span className="">Nationality</span>
						<h2 className="font-bold text-[25px] leading-[29px] big-text ">{data.country}</h2>
					</div>
			</div>
		</section>
		
	 );
}
 
export default SecondPage;