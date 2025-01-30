'use client'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';
const Cards = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('fake.json')
            const coffees = await data.json()
            setCoffees(coffees)
        }
        fetchData()
        
    }, [])

       
        
    
    

    return (
        <>
        <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
        <h1 className='text-center text-4xl font-extrabold mt-10'>Our Coffees</h1>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-10 items-center'>
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div></>
    );
};

export default Cards;