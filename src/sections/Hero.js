// src/pages/Hero.js
import React from 'react';
import image from '../img/landingpage-hero-img.png';
function Hero() {
  return (
    <div class="grid gap-4 grid-cols-2 items-center m-10">
      <div class="p-5 rounded">
        <div class="p-5 my-5 rounded">
          <h1 class="text-dark-1 font-bold font-sans text-5xl mb-8">
            Jelajahi Perjalanan Kesehatan Mental Anda dengan Mindease
          </h1>
          <p class="text-dark-3 mb-12">
            Kami Hadir untuk Memberikan Dukungan dan Alat yang Anda Butuhkan untuk Mencapai Pikiran yang Lebih Sehat dan Tenang. Mari Bersama-sama Menghadapi Tantangan dan Menemukan Ketenangan.
          </p>
          <button type="button" class="text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
            Download Aplikasi
          </button>
        </div>
      </div>
      <div class="p-5 my-5 rounded">
        <div class="p-5 my-5 rounded">
          <img src={image} alt="" />
        </div>
      </div>
    </div>

  );
}

export default Hero;
