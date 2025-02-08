import React from 'react';

const LocationMap = () => {
  return (
    <div className='py-24 bg-[#EAEEFE] dark:bg-transparent'>
        <div className="container mx-auto px-6 h-96 md:h-[500px] lg:h-[600px] mb-8">
      <h3 className="text-3xl font-semibold text-center mb-4">
        Our Location
      </h3>
      <div className="relative w-full h-full">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178638.9708228981!2d-73.70950899999998!3d45.605943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc92107b4dfda6b%3A0x2eb4b26fe333c419!2sLaval%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1739034883997!5m2!1sen!2sbd"
          className="w-full h-full rounded-lg shadow-lg"
          style={{ border: '0' }}
          
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    </div>
  );
};

export default LocationMap;