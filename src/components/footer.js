import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Savanna Biltong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
