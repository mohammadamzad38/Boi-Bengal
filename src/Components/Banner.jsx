import React from 'react';
import bannerimg from '../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerimg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
      <button className="btn text-white bg-green-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;