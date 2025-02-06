import React from 'react';

const LocationMap = () => {
  return (
    <div className='py-24'>
        <div className="container mx-auto px-6 h-96 md:h-[500px] lg:h-[600px] mb-8">
      <h3 className="text-3xl font-semibold text-center mb-4">
        Our Location
      </h3>
      <div className="relative w-full h-full">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d73482.34118107829!2d-71.32756152699584!3d46.80816976374295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQu%C3%A9bec%20City%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738767179577!5m2!1sen!2sbd"
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