import ResponsiveGallery from "react-responsive-gallery";
import React from "react";
import "../asset/css/Modal.css";

import pic1 from "../asset/gallery/pic1.jpg";
import pic2 from "../asset/gallery/pic2.jpg";
import pic3 from "../asset/gallery/pic3.jpg";
import pic4 from "../asset/gallery/pic4.jpg";
import pic5 from "../asset/gallery/pic5.jpg";
import pic7 from "../asset/gallery/pic7.jpg";
import pic8 from "../asset/gallery/pic8.jpg";
import pic9 from "../asset/gallery/pic9.jpg";
import pic10 from "../asset/gallery/pic10.jpg";
import pic11 from "../asset/gallery/pic11.jpg";
import pic12 from "../asset/gallery/pic12.jpg";
import pic13 from "../asset/gallery/pic13.jpg";
import pic14 from "../asset/gallery/pic14.jpg";
import pic15 from "../asset/gallery/pic15.jpg";
import pic16 from "../asset/gallery/pic16.jpg";
import pic17 from "../asset/gallery/pic17.jpg";
import pic18 from "../asset/gallery/pic18.jpg";
import pic19 from "../asset/gallery/pic19.jpg";
import pic20 from "../asset/gallery/pic20.jpg";

export default function Gallery() {
  const IMAGES = [
    {
      src: pic1,
      lightboxCaption: "캡션",
      lightboxTitle: "타이틀",
    },
    {
      src: pic2,
    },
    {
      src: pic3,
    },
    {
      src: pic4,
    },
    {
      src: pic5,
    },
    {
      src: pic7,
    },
    {
      src: pic8,
    },
    {
      src: pic9,
    },
    {
      src: pic10,
    },
    {
      src: pic11,
    },
    {
      src: pic12,
    },
    {
      src: pic13,
    },
    {
      src: pic14,
    },
    {
      src: pic15,
    },
    {
      src: pic16,
    },
    {
      src: pic17,
    },
    {
      src: pic18,
    },
    {
      src: pic19,
    },
    {
      src: pic20,
    },
  ];

  return (
    <div className="gallery_background">
      <ResponsiveGallery
        useLightBox
        images={IMAGES}
        numOfImagesPerRow={{
          xs: 1,
          s: 2,
          m: 3,
          l: 3,
          xl: 4,
          xxl: 4,
        }}
        imagesPaddingBottom={{
          xs: 5,
          s: 5,
          m: 5,
          l: 5,
          xl: 5,
          xxl: 5,
        }}
        imagesMaxWidth={{
          xs: 100,
          s: 100,
          m: 100,
          l: 100,
          xl: 100,
          xxl: 100,
        }}
        colsPadding={{
          xs: 5,
          s: 5,
          m: 5,
          l: 5,
          xl: 5,
          xxl: 5,
        }}
        imagesStyle={{}}
      />
    </div>
  );
}