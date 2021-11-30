
export const stagger = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			delayChildren: 0.2
		}
	}
};


export const fadeInUp = {
	hidden: { opacity: 0, y: 100 },

	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			type: 'spring',
			dampness: 20,
			stiffness: 90
		}
	}
};


export const routeFade = {
	initial: { opacity: 0, x: '-50%'},

	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: "easeIn",
			type: 'spring',
			dampness: 10,
			stiffness: 80
		}
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.1,
			ease: 'easeInOut'
		}
	}
};
