import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const token = 'faf65fd969174722bf6141659240405';

  const handleSearch = async (location) => {
    console.log(`Searching for ${location}`);
    setLocation(location);

    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${token}&q=${location}&aqi=yes`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
        }
  };

  return (
    <>
      <div className="image-overlay"></div>
      <Header location={location} onSearch={handleSearch} />
      {data && <Card data={data} />}
      <Footer/>
    </>
  );
}

export default Home;
