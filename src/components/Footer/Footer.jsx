import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ethos Pro Realtors. All rights reserved.</p>
        <ul>
            <li className="inline mx-2">
                <a href="/privacy-policy" className="text-white hover:underline">
                Privacy Policy
                </a>
            </li>
            <li className="inline mx-2">
                <a href="/terms-of-service" className="text-white hover:underline">
                Terms of Service
                </a>
            </li>
            <li className="inline mx-2">
                <a href="/contact" className="text-white hover:underline">
                Contact Us
                </a>
            </li>
            <li className="inline mx-2">
                <a href="/about" className="text-white hover:underline">
                About Us
                </a>
            </li>
            <li className="inline mx-2">
                <a href="/careers" className="text-white hover:underline">
                Careers
                </a>
            </li>
            <li className="inline mx-2">
                <a href="/blog" className="text-white hover:underline">
                Blog
                </a>
            </li>
            <li className="inline mx-2">
                <a href="/sitemap" className="text-white hover:underline">
                Sitemap
                </a>
            </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;