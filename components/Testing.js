'use client'
import React, { useState } from 'react';

const Testing = () => {
    const products = [{
        category: 'game',
        color: 'red',
        size: '2x',
        priceRange: '200'
    },
    {
        category: 'giftCard',
        color: 'blue',
        size: '3x',
        priceRange: '300'
    },
    {
        category: 'keyPass',
        color: 'green',
        size: '4x',
        priceRange: '400'
    },
    {
        category: 'game',
        color: 'red',
        size: '1x',
        priceRange: '100'
    },
    {
        category: 'game',
        color: 'red',
        size: '5x',
        priceRange: '200'
    },
    {
        category: 'game',
        color: 'red',
        size: '5x',
        priceRange: '900'
    },
    ]
    const [category, setCategory] = useState('game')
    const [color, setColor] = useState('red')
    const [size, setSize] = useState('2x')
    const [priceRange, setPriceRange] = useState('200')
    const [minPrice,setMinPrice] = useState('200')
    const [maxPrice,setMamPrice] = useState('800')
    const filterProducts = () => {
        const data = products.filter(product => product.priceRange >= minPrice && product.priceRange <= maxPrice)
        console.log(data);
    }
    filterProducts()
};

export default Testing;