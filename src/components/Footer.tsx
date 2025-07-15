import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-12 py-5">
      <div className="flex flex-wrap justify-between gap-y-10">
        <div className="flex flex-col basis-full md:basis-[50%] lg:basis-[25%]">
          <Image
            src="/footer-logo.svg"
            width={187}
            height={57}
            alt="footer-logo"
            className="mb-4"
          />
          <p className="text-[#ccc] pr-10 max-w-[220px]">
            CineSphere is your go-to platform for a world of entertainment, offering a vast library of films, TV shows, and exclusive content.
          </p>
          <div className="flex gap-2 mt-4">
            <div className="bg-white cursor-pointer rounded-full p-2 flex items-center justify-center">
              <Image src="/facebook.png" width={24} height={24} alt="Facebook" />
            </div>
            <div className="bg-white cursor-pointer rounded-full p-2 flex items-center justify-center">
              <Image src="/twitter.png" width={24} height={24} alt="Facebook" />
            </div>
            <div className="bg-white cursor-pointer rounded-full p-2 flex items-center justify-center">
              <Image src="/instagram.png" width={24} height={24} alt="Facebook" />
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-[50%] lg:basis-[25%]">
          <h3 className="mb-2 font-semibold">Company</h3>
          <ul className="list-none p-0">
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">About Us</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Careers</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Press</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Investors</a></li>
          </ul>
        </div>

        <div className="basis-full md:basis-[50%] lg:basis-[25%]">
          <h3 className="mb-2 font-semibold">Help & Support</h3>
          <ul className="list-none p-0">
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Help Center</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">FAQ</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Support</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Account & Billing</a></li>
          </ul>
        </div>

        <div className="basis-full md:basis-[50%] lg:basis-[25%]">
          <h3 className="mb-2 font-semibold">Legal</h3>
          <ul className="list-none p-0">
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Terms of Service</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Privacy Policy</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Cookie Preferences</a></li>
            <li className="mb-[50px]"><a href="#" className="text-[#aaa] underline hover:text-white">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-[134px] border-t border-[#444] pt-[10px] text-sm text-[#aaa]">
        <p>&copy; All Rights Reserved. 2024 Cinesphere Movies</p>
      </div>
    </footer>
  );
};


export default Footer;
