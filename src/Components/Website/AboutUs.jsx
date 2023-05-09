import React from 'react'
import './../../CSS/About.css'
import Amro from './../../Images/Amro-About.jpg'
import Bashar from './../../Images/BasharAbout.jpg'
import Iyad from './../../Images/Iyad-About.jpg'
import Omar from './../../Images/omar-About.png'
import Tamara from './../../Images/tamara-About .jpg'

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="landing flex justify-center items-center w-full">
      </div>
      <div className="cards flex flex-col justify-center items-center w-11/12">
        <div className="ourStory">
          <h1 className="p-5 font-bold text-2xl text-center main-green">Our story</h1>
          <p className="font-light text-sm md:text-lg">
            Tech-House, a secure, fast, and low-cost global payment solution
            provider. Established and headquartered in Hong Kong in 2014,
            Tech-House has branch offices in China, USA, the United Kingdom,
            Europe, and Samoa, and obtained Hong Kong financial services
            license, EMI and PCI security certification in the early years. Tech-House
            focuses on providing comprehensive financial services such as online
            deposit and withdrawal services, online payment, currency exchange,
            and global remittance. Tech-House has a total of 1000,000 global users and
            more than 200 cooperative banks and financial institutions,
            connecting with all major financial regions of the world. Tech-House leads
            financial services with "technological innovation", and is committed
            to becoming the most popular payment system in the world. Tech-House
            wishes to build a cross-border payment clearing center, link with
            the global payment channels and merchants, and lead the global
            payment innovation development.
          </p>
        </div>
      </div>


      <h1 className="text-center p-5 font-bold text-2xl main-green our-team">Our Team</h1>


      <div className="team flex flex-col md:flex-row gap-8 w-11/12">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Bashar}
            alt="Bashar"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://www.linkedin.com/in/bashar-omush-b12a06267/" target='_blank'>Bashar Al-Omoush</a></div>
              <div class="text-slate-700 dark:text-slate-500">
              Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Iyad}
            alt="Iyad"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://www.linkedin.com/in/iyad-raslan-4221591a1/" target='_blank'>Iyad Raslan</a></div>
              <div class="text-slate-700 dark:text-slate-500">
              Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <figure class="team my-8 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-11/12">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Omar}
            alt="Omar"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://www.linkedin.com/in/omar-hassouna-97b76b1aa/" target="_blank">Omar Hassoneh</a></div>
              <div class="text-slate-700 dark:text-slate-500">
              Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>

      <div className="team flex flex-col md:flex-row gap-8 mb-8 w-11/12">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Tamara}
            alt="Tamara"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://github.com/tamarabanighanem" target="_blank">Tamara Bani-Ghanem</a></div>
              <div class="text-slate-700 dark:text-slate-500">
              Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Amro}
            alt="Amro"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://github.com/amrokh1996" target="_blank">Amro Al-Khazaleh</a></div>
              <div class="text-slate-700 dark:text-slate-500">
              Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}