import React from "react";

function Gallery() {
  return (
    <div>
      <div className="grid grid-cols-4 bg-gradient-to-br from-pink-200 via-purple-300 to-blue-200">
        {[1,2,3,4,5,6].map((n) => (
          <img
            style={{height:'auto', width:"300px"}}
            key={n}
            src={`/Images/pic${n}.jpg`}
            alt={`Birthday ${n}`}
            className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
