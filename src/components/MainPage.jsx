import React from 'react'
import Loading from './Loading'
import SecondPage from './SecondPage'
import { useContext, useState } from 'react';
import { BarcaContext } from '../Context/BarcaContext';

function MainPage() {
	const {data,isLoading}=useContext(BarcaContext)
  return (
	<div>
		{isLoading? <Loading />:<SecondPage />}
	</div>
  )
}

export default MainPage