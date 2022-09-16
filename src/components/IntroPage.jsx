import spotify from '../images/spotify-logo-svgrepo-com.svg'
import { useContext, useState } from 'react';
import { BarcaContext } from '../Context/BarcaContext';

const IntroPage = () => {
	const {showSecondPage,data,setData,fetchPlayerData}=useContext(BarcaContext)


	const handleData=(e)=>{
		setData(e.target.value)
		console.log(data)
	}

	return ( 
		<div className="">
			
			<div className="">
				<img src={spotify} alt="spotify-logo" className="w-12 h-12 mx-auto" />
				<div className="w-full flex justify-center items-center">
					<input onChange={handleData} placeholder='search'  type="text" className="border-[1px] text-2xl pl-2 my-4 mx-auto border-black rounded-sm w-[90%] h-[50px]" />
				</div>
				<div className="w-full flex justify-center items-center">
					<button onClick={showSecondPage} className="w-[90%] btn h-[51px] rounded-sm mx-auto text-white">Get Player Info</button>
				</div>
			</div>
		</div>
	 );
}
 
export default IntroPage;