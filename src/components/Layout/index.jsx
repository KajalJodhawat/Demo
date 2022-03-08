import React from 'react'
import header from './header';
import Footer from './footer';

export default function index(props) {
    return (
        <div>
            <header />
            {props.children}
            <Footer />
        </div>
    )
}
