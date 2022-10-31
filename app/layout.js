import './globals.css';
import Layers from './Layers';
import Settings from './Settings';

export default function RootLayout({ children }) {
	return (
		<html>
			<head></head>
			<body className="flex divide-x">
				<div className="basis-1/5">
					<Layers />
				</div>
				<div className="basis-3/5">{children}</div>
				<div className="basis-1/5">
					<Settings />
				</div>
			</body>
		</html>
	);
}
