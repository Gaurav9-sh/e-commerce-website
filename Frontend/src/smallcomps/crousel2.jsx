import React, { useEffect } from 'react';
import './crousel2.css';
import image56 from "../../public/images/image56.png"

function Crousel2() {

  const listItems = [
    {
        pic: image56,
        text1: "Tom Cruise",
        text2: "Founder & Chairman",
        text3: "----"
        
     },
     {
        pic: image56,
        text1: "Tom Cruise",
        text2: "Founder & Chairman",
        text3: "----"
        
     },
     {
        pic: image56,
        text1: "Tom Cruise",
        text2: "Founder & Chairman",
        text3: "----"
        
     },
     {
        pic: image56,
        text1: "Tom Cruise",
        text2: "Founder & Chairman",
        text3: "----"
        
     },
     {
        pic: image56,
        text1: "Tom Cruise",
        text2: "Founder & Chairman",
        text3: "----"
        
     }
    ];

  useEffect(() => {
    const list = document.getElementById('list');
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      list.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className='dabb'>
      <div id="rcontainer" data-animated>
        <ul id="list">
          {listItems.map((item, index) => (
            <li key={index} className='lii'>
                <div className='core'>
                <img src={item.pic} alt={`The picture of ${item.text1}`} />
                </div>
                <br />
                <br />
                <h4>{item.text1}</h4>
                <p>{item.text2}</p>
                <hr/>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Crousel2;
