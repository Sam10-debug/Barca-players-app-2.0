import React from 'react'
import Loading from './Loading'
import SecondPage from './SecondPage'
import { useContext, useState } from 'react';
import { BarcaContext } from '../Context/BarcaContext';

function MainPage() {
	const {data}=useContext(BarcaContext)
  return (
	<div>
		{!data&&<Loading />}
		{data&&<SecondPage />}
	</div>
  )
}

export default MainPage