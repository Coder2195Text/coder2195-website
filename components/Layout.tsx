import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	const width = useWindowWidth();
	return (
		<motion.div
			initial={{ x: width }}
			animate={{ x: 0 }}
			exit={{ x: -width }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};

export default Layout;
