import React, { useEffect, useState } from "react";
import zombie1 from "../../assets/1.png";
import zombie2 from "../../assets/3.png";
import zombie3 from "../../assets/4.png";
import zombie4 from "../../assets/5.png";

function TargetPreAim({ score, setScore }) {
  const zombieArray = [zombie1, zombie2, zombie3, zombie4];
  let zombie = 0;
  const [xCoord, setxCoord] = useState(1);
  const [yCoord, setyCoord] = useState(1);
  const [zombieFace, setZombieFace] = useState(zombieArray[zombie]);

  const handleScore = (e) => {
    if (e.buttons === 3) {
      setScore((prev) => prev + 1);
    }
  };

  let x = window.innerWidth - 120;
  let y = window.innerHeight - 150;

  console.log(xCoord, yCoord);

  useEffect(() => {
    setxCoord(Math.floor(Math.random() * (x - 20) + 20));
    setyCoord(Math.floor(Math.random() * (y - 50) + 50));

    zombie = Math.floor(Math.random() * 4);
    setZombieFace(zombieArray[zombie]);
  }, [score]);

  const buttonStyle = {
    position: "absolute",
    top: yCoord,
    left: xCoord,
    height: "100px",
    width: "100px",
    border: "none",
    backgroundImage: zombie1,
  };

  return (
    <div
      style={buttonStyle}
      onMouseDown={(e) => handleScore(e)}
      className="button"
    >
      <img src={zombieFace} alt="Zombie" />
    </div>
  );
}

export default TargetPreAim;
