import React from 'react'
import { useLocation } from "react-router-dom"
import Layout from '../../layout'
import BreadCrumbs from '../../../UI/BreadCrumbs'

const TrainingNotes = () => {
  const path = useLocation().pathname;
  return (
    <>

      <BreadCrumbs path={path}/>

      Training Notes
    </>
  )
}

export default TrainingNotes
