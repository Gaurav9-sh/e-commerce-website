import React from 'react'
import "./About.css"
import storypic from '../../public/images/storypic.png'
import shoppingbag from "../../public/images/shoppingbag.png"
import iconSale from "../../public/images/IconSale.png"
import delivery from "../../public/images/icondelivery.jpg"
import Group from "../../public/images/Group.png"
import bagg from "../../public/images/bagg.png"
import shield from "../../public/images/shield.png"
import icco from "../../public/images/icco.png"
import Smallcomps from '../smallcomps/Smallcomps'
import Crousel2 from '../smallcomps/crousel2'
import { useState } from 'react'

function About() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  let box = [
    {
      pic: Group,
      text1: "10.5k",
      text2: "Seller active our site",
      ht: "220px",
      wd: "250px"
   },
    {
        pic: iconSale,
        text1: "33k",
        text2: "Monthly Product Sale",
        ht: "220px",
        wd: "250px"
    },
    {
      pic: shoppingbag,
      text1: "45.5k",
      text2: "Customer active in our site",
      ht: "220px",
      wd: "250px"
    },
    {
      pic: bagg,
      text1: "25k",
      text2: "Annual gross sale in our site",
      ht: "220px",
      wd: "250px"
    }

  ]

  let boxx2 = [
    {
      pic: delivery,
      text1: "FREE AND FAST DELIVERY",
      text2: "Seller active our site",
      ht: "250px",
      wd: "354px"
   },
    {
        pic: icco,
        text1: "24/7 CUSTOMER SERVICE",
        text2: "Monthly Product Sale",
        ht: "250px",
        wd: "354px"
    },
    {
      pic: shield,
      text1: "MONEY BACK GUARANTEE",
      text2: "Customer active in our site",
      ht: "250px",
      wd: "354px"
    }

  ]

  return (
   
   <>
   <div className="top">
    <div className="top-left" data-aos="zoom-in" data-aos-duration="700">
      <div id="top-left-inner">
      <h2 className='hh2'>Our Story</h2>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eaque suscipit laudantium doloribus fugiat dolorum minima distinctio atque veniam magnam exercitationem pariatur modi beatae ducimus blanditiis eveniet officiis voluptate voluptatum. Enim impedit ratione iste optio laborum veniam repellendus expedita officiis ad maxime esse error aspernatur minima vel rerum quisquam, deserunt corrupti quam a consequatur repellat quia? Consectetur sequi corporis nam enim neque harum consequatur dolorum repellendus recusandae assumenda numquam officia perspiciatis architecto illum voluptatibus blanditiis non, in quo velit ut id tempore! Dicta accusamus alias ratione rem veritatis maxime laudantium culpa, harum numquam quas perspiciatis necessitatibus, adipisci porro repellendus nulla.
      </p>
      </div>
    </div>
    {viewportWidth > 768 && (
          <div className="top-right">
            <img src={storypic} />
          </div>
        )}
   </div>
   <div className="mid1">
      {
        box.map((item, index) => (
          <Smallcomps key={index} pic={item.pic} text1={item.text1} text2={item.text2} height={item.ht} width={item.wd} />
        ))
      }

     
   </div>
   <div className='bottom1'>
      <Crousel2 />
   </div>

   <div className='bottom2'>
   {
        boxx2.map((item, index) => (
          <Smallcomps key={index} pic={item.pic} text1={item.text1} text2={item.text2} height={item.ht} width={item.wd} />
        ))
      }
   </div>
   </>

  )
}

export default About