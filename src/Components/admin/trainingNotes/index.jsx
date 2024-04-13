import React from 'react'
import { useLocation } from "react-router-dom"
import Layout from '../../layout'
import BreadCrumbs from '../../../UI/BreadCrumbs'

const TrainingNotes = () => {
  const path = useLocation().pathname;
  return (
    <Layout>

      <BreadCrumbs path={path}/>

      Training Notes
    </Layout>
  )
}

export default TrainingNotes
