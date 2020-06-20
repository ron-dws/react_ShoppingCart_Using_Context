import React, { Component } from 'react';
import { TshirtList } from './TshirtList';
import { InCart } from './InCart';


export const Home = () => {

    return (
       <>
        <InCart />
        <TshirtList />
       </>
    )
}