// import React, { useEffect, useRef, useState } from "react";
// import "./saleSection.css";
// import Card from "./Card";
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import axios from "axios";


// const SalesSection = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://e-commerce-backend-opis.onrender.com/api/products");
//         setProducts(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);

//   const boxRef = useRef(null);

//   const btnpressnext = () => {
//     console.log("Button is pressed")
//     if (boxRef.current) {
//       console.log("It should move")
//       let width = boxRef.current.clientWidth / 5;
//       boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
//       boxRef.current.scrollBy({ left: width, behavior: "smooth" });
//     }
//   };

//   const btnpressprev = () => {
//     if (boxRef.current) {
//       let width = boxRef.current.clientWidth / 5;
//       boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
//       boxRef.current.scrollBy({ left: -width, behavior: "smooth" });
//     }
//   };

//   const getRandomProducts = () => {
//     const startIndex = Math.floor(Math.random() * (products.length - 7));
//     return products.slice(startIndex, startIndex + 7);
//   };

//   return (
//     <div className="saleSection">
//       <div className="writingSection">
//         <h4 className="heading4">Today's</h4>
//         <div className="slidingClass">
//           <h1 className="heading1">Flash Sales</h1>
//           <div className="buttonClass">
//             <button
//               style={{ width: "40px", height: "40px" }}
//               onClick={btnpressprev}
//             >
//               <NavigateBeforeIcon />
//             </button>
//             <button
//               style={{ width: "40px", height: "40px" }}
//               onClick={btnpressnext}
//             >
//               <NavigateNextIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//      <div className="cardContainer">
//      <div className="cardsSection" ref={boxRef}>
//         {getRandomProducts().map((ele) => {
//           return (
//             <Card
//               id={ele.id}
//               image={ele.image}
//               price={ele.price}
//               title={ele.title}
//             />
//           );
//         })}
//       </div>
//      </div>
//     </div>
//   );
// };

// export default SalesSection;

import React, { useEffect, useRef, useState } from "react";
import "./saleSection.css";
import Card from "./Card";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import axios from "axios";


const SalesSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-opis.onrender.com/api/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const boxRef = useRef(null);

  const btnpressnext = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth / 5;
      boxRef.current.scrollLeft += width;
    }
  };

  const btnpressprev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth / 5;
      boxRef.current.scrollLeft -= width;
    }
  };

  const getRandomProducts = () => {
    const startIndex = Math.floor(Math.random() * (products.length - 7));
    return products.slice(startIndex, startIndex + 7);
  };

  return (
    <div className="saleSection">
      <div className="writingSection">
        <h4 className="heading4">Today's</h4>
        <div className="slidingClass">
          <h1 className="heading1">Flash Sales</h1>
          <div className="buttonClass">
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={btnpressprev}
            >
              <NavigateBeforeIcon />
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={btnpressnext}
            >
              <NavigateNextIcon />
            </button>
          </div>
        </div>
      </div>
     <div className="cardContainer">
       <div className="cardsSection" ref={boxRef} >
          {getRandomProducts().map((ele) => {
            return (
              <Card
                key={ele.id}
                id={ele.id}
                image={ele.image}
                price={ele.price}
                title={ele.title}
              />
            );
          })}
        </div>
     </div>
    </div>
  );
};

export default SalesSection;

