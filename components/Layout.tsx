import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<motion.div
			initial={{ x: 1154 }}
			animate={{ x: 0 }}
			exit={{ x: -1154 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};

export default Layout;
