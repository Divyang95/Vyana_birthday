import React from "react";
import pic1 from '/Images/pic1.jpg'
import pic2 from '/Images/pic2.jpg'
import pic3 from '/Images/pic3.jpg'
import pic4 from '/Images/pic4.jpg'
import pic5 from '/Images/pic5.jpg'
import pic6 from '/Images/pic6.jpg'

function Gallery() {
  return (
    <div>
      <div className="grid grid-cols-4 bg-gradient-to-br from-pink-200 via-purple-300 to-blue-200">
        {[pic1,pic2,pic3,pic4,pic5,pic6].map((n,i) => (
          <img
            style={{height:'auto', width:"300px"}}
            key={i}
            src={n}
            alt={`Birthday ${i}`}
            className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
