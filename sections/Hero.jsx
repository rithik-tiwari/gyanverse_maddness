'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TypingBtwText, TypingHeadingText } from '../components/CustomTexts';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.25 }}
           className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingHeadingText title="Gyanverse" textStyles="text-center" />
        </motion.h1>
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.25 }}
           className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingBtwText title="O&nbsp;F" textStyles="text-center" />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-row`}
        >
          <h1><TypingHeadingText title="Ma" textStyles="text-center" /></h1>
          <div className={styles.heroDText} />
          <h1><TypingHeadingText title="Ness" textStyles="text-center" /></h1>
          {/* <h1 className={styles.heroHeading}>Ness</h1> */}
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
