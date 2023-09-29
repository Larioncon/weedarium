import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';

const Outletos = () => {
  return (
    <>
    <Header />
    <main>
    <Outlet />
    </main>
    </>
  )
}

export {Outletos}