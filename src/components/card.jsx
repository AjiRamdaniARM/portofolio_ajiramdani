import React from "react";

const Card = () => {
  return (
    <div className="card text-center" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
      {/* card1 */}
      <div style={{ backgroundColor: "rgba(11,114,113)" }} className=" max-w-sm overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4">
          <div
            className=" mb-2
          text-xl font-bold text-white"
            style={{ fontFamily: "ubuntu-bold" }}
          >
            Graphic Design
          </div>
          <p className="text-base text-white">Kumpulan project design yang saya buat</p>
        </div>
      </div>
      &nbsp;
      {/* card2 */}
      <div style={{ backgroundColor: "rgba(11,114,113)" }} className="max-w-sm overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4">
          <div
            className="
         mb-2 text-xl font-bold text-white"
            style={{ fontFamily: "ubuntu-bold" }}
          >
            Front End Develover
          </div>
          <p className="text-base text-white">Kumpulan project front end yang saya buat</p>
        </div>
      </div>
      &nbsp;
      {/* card3 */}
      <div style={{ backgroundColor: "rgba(11,114,113)" }} className="max-w-sm overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white" style={{ fontFamily: "ubuntu-bold" }}>
            UI UX DESIGN
          </div>
          <p className="text-base text-white">Kumpulan project design ui ux yang saya buat</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
