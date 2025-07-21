import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="flex flex-wrap justify-between p-16 ">
        <div className="flex flex-col basis-full md:basis-[25%] gap-5">
          <Image
            src="/icons/footer-logo.svg"
            width={150}
            height={57}
            alt="footer-logo"
          />
          <p className="text-[#ccc]  max-w-[230px] min-w-[230px] w-full ">
            CineSphere is your go-to platform for a world of entertainment,
            offering a vast library of films, TV shows, and exclusive content.
          </p>
          <div className="flex gap-2">
            <div className="bg-white cursor-pointer rounded-full p-2 flex items-center justify-center">
              <Image
                src="/Images/facebook.png"
                width={20}
                height={20}
                alt="Facebook"
              />
            </div>
            <div className="bg-white cursor-pointer rounded-full p-2 flex items-center justify-center">
              <Image
                src="/Images/twitter.png"
                width={20}
                height={20}
                alt="twitter"
              />
            </div>
            <div className="bg-white cursor-pointer rounded-full p-2 flex items-center justify-center">
              <Image
                src="/Images/instagram.png"
                width={20}
                height={20}
                alt="instagram"
              />
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-[25%]">
          <ul className="list-none flex flex-col gap-10">
            <li>
              <h3 className="text-lg font-semibold">Company</h3>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Investors
              </a>
            </li>
          </ul>
        </div>

        <div className="basis-full md:basis-[25%]">
          <ul className="list-none flex flex-col gap-10">
            <li className="mb-2 text-lg font-semibold">Help & Support</li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Account & Billing
              </a>
            </li>
          </ul>
        </div>

        <div className="basis-full md:basis-[25%]">
          <ul className="list-none flex flex-col gap-10">
            <li className="mb-2 text-lg font-semibold">Legal</li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-400">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center text-center border-[#444] p-12 text-xl text-white">
        <p>&copy; All Rights Reserved. 2024 Cinesphere Movies</p>
      </div>
    </footer>
  );
};

export default Footer;
