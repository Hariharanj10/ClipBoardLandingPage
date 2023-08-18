import React from "react";
import { BrandSection, BrandLogo } from "./ClipboardStyles"; 

const brands = [
  { src: "./assets/logo-google.png", alt: "Google" },
  { src: "./assets/logo-ibm.png", alt: "IBM" },
  { src: "./assets/logo-microsoft.png", alt: "Microsoft" },
  { src: "./assets/logo-hp.png", alt: "HP" },
  { src: "./assets/logo-vector-graphics.png", alt: "VP" }
];

const BrandSec = () => {
  return (
    <BrandSection>
      {brands.map((brand, index) => (
        <BrandLogo key={index} src={brand.src} alt={brand.alt} />
      ))}
    </BrandSection>
  );
};

export default BrandSec;
