import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black text-center py-4 bg-sky-50">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
