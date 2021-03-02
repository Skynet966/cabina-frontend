import CameraFeed from '../components/camera-feed/camera-feed.component';
import Navbar from '../components/navbar/navbar.component';

const HomeLayout = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<CameraFeed />
		</>
	);
};

export default HomeLayout;
