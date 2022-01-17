import React, { ButtonHTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'

function Button({
  children,
  className,
  ...props
}: MotionProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      className={
        (className =
          'w-full h-16 font-semibold text-white md:w-1/2 rounded-3xl ' +
          className)
      }
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
