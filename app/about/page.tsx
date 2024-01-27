'use client'

import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-2">
        <Image alt="Profile picture" src="/about.png" width={250} height={100} />
        <div>
            <p className="mb-2">Started painting in the “Alla Prima” technique after watching Bob Ross with some friends one evening in 2018. The way he mentioned that anyone could paint inspired me to try for myself. After seeing the magic, I started getting serious about the craft. Learning the nuances and gaining a clear understanding of how to create beautiful landscapes.</p>
            <p className="mb-2">Thus far I’ve gone through two phases.</p>
            <p className="mb-2">The first, a time of trial and error. Hands on learning with minimal material on small canvas just to get familiar with the basics. These are not glamorous, but I consider them my "Early Works".</p>
            <p className="mb-2">The second, a time in my life which I dedicated most of my time to the craft. A few were inspired by tutorials, but the rest are from inside my heart. I consider these my "Works of Dedication."</p>
            <p className="mb-2">In the next phase, I plan to bring more of myself to the center of my art. </p>
        </div>
    </div>
  );
}
