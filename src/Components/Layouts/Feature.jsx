import { useEffect, useState } from 'react';
import FCard from './FCard';

const Feature = () => {

const [cards,setCards]=useState([])

useEffect(()=>{

    fetch('/fcard.json')
    .then(res => res.json())
    .then(data => setCards(data))

},[])

console.log(cards)

    return (
        <div className='py-10 space-y-3'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Enhance your Learning Experience with Learners</h2>
            <p className='text-slate-500 '>Explore the powerful features that make Learners the perfect platform for online group study. From creating assignments to tracking progress, see how Learners can enhance your academic experience </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-6'>
                {
                    cards.map((card,index) => <FCard key={index} card={card}></FCard>)
                }
            </div>
        </div>
    );
};

export default Feature;