import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpperWear from '../images/upperWear.webp'
import BottomWear from '../images/dressPants.jpg'
import DressShoes from '../images/dressShoes.jpeg'

const AllCategories = () => {
//     const selectCategory = (category) => {
//         setCategory(category);
//         navigate("/product/" + category);
//         window.location.reload(true);
//         return category;
//     }

    return (
        <div className='container-fluid'>
            <div className='row text-start mb-3 mt-3 p-5'>
                <h2 style={{ fontWeight: 300 }}>Fabriko From Head-to-Toe</h2>
            </div>
            <div className='row d-flex justify-content-around align-items-center pb-5'>
                <div className='col-3'>
                    <a href='/product/upper wear' style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
                        <img className='' src={UpperWear} alt='UpperWear' style={{height: '500px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '75px', paddingLeft: '75px',paddingTop: '20px', paddingBottom: '20px' }} onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }} />
                        <h5 className='mt-3' style={{
                            textAlign: 'center', fontWeight: 300, color: "black", transition: 'font-size 0.2s', fontSize: '1.3em'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.fontSize = '1.5em';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.fontSize = '1.3em';
                            }}>Upper Wear</h5>
                    </a>
                </div>
                <div className='col-3'>
                    <a href='/product/bottom wear' style={{ textDecoration: 'none' }}>
                        <img className='pb-3' src={BottomWear} alt='BottomWear' style={{ height: '500px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s' }} onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }} />
                        <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: "black" }}>Bottom Wear</h5>
                    </a>
                </div>
                <div className='col-3'>
                    <a href='/product/shoes' style={{ textDecoration: 'none' }}>
                        <img src={DressShoes} alt='DressShoes' style={{ height: '500px', transition: 'transform 0.2s' }} onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }} />
                        <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: "black" }}>Dress Shoes</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AllCategories