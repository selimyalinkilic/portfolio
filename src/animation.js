export const contentAnimation = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 85,
    transition: {
      duration: 1
    }
  }
}

export const titleAnimation = {
  hidden: { y: 200},
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut'    
    }
  }
}

export const fade = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
}

export const photoAnimation = {
  hidden: {scale: 0.8, opacity: 0},
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
}

export const scrollReveal = {
  hidden: { opacity: 0, scale: 0.8, transition: {duration: 0.5} },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    }
  }
}