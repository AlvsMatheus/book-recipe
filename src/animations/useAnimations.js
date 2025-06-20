
const useAnimations = () => {
    const slideInFromLeft = {
        hidden: { opacity: 0, x: -50},
        show: { opacity: 1, x: 0,
            transition: {
            duration: 1,
            ease: "easeOut"
        }
        }, 
    };

    const fadeIn = {
        hidden: { opacity: 0},
        show: { opacity: 1, 
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
    };

    const scaleUp = {
        hidden: { scale: 0.9, opacity: 0},
        show: { scale:1, opacity: 1},
    };


    return {
        slideInFromLeft,
        fadeIn,
        scaleUp,
    };
};
 
export default useAnimations;