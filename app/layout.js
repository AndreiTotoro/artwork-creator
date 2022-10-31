import './globals.css';
import Layers from './Layers';
import Settings from './Settings';

export default function RootLayout({ children }) {
	return (
		<html>
			<head></head>
			<body>{children}</body>
		</html>
	);
}
