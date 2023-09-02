import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpeg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Abdulqadir</h3>

        <p>
          Hey, Everyone I am Abdul, the founder of the Burger Shop.
          <br />
          Our aim is to make the most delicous burger on planet!!.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
