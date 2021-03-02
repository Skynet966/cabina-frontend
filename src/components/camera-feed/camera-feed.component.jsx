import { useState } from 'react';
import {
	ButtonContainer,
	CameraFeedContainer,
	Button,
	VideoFeed,
	Frame,
	Canvas
} from './camera-feed.styles';

import flower from '../../assets/frames/flower.png';
import axios from 'axios';

const CameraFeed = () => {
	const [video, setVideo] = useState();
	const [canvasImg, setCanvasImg] = useState();
	const [frame, setFrame] = useState();

	const setDeviceFeed = () => {
		navigator.mediaDevices
			.enumerateDevices()
			.then(devices => {
				devices.forEach(device => {
					navigator.mediaDevices
						.getUserMedia({
							audio: false,
							video: device.groupId
						})
						.then(feed => (video.srcObject = feed))
						.catch(err => console.log(err));
				});
			})
			.catch(err => console.log(err));
	};

	const startFeed = () => setDeviceFeed();

	const captureImage = () => {
		canvasImg
			.getContext('2d')
			.drawImage(video, 0, 0, 1000, 1075, 0, 0, 500, 375);
		canvasImg
			.getContext('2d')
			.drawImage(
				frame,
				0,
				0,
				frame.naturalWidth,
				frame.naturalHeight,
				0,
				0,
				canvasImg.width,
				canvasImg.height
			);
		axios
			.post('http://localhost:3001/api/upload', {
				data: canvasImg.toDataURL('image/png')
			})
			.then(res => console.log(res.data.url))
			.catch(err => console.log(err));
	};

	return (
		<CameraFeedContainer>
			<Frame src={flower} ref={frame => setFrame(frame)} />
			<VideoFeed ref={stream => setVideo(stream)} autoPlay={true} />
			<ButtonContainer>
				<Button onClick={startFeed}>Start Feed</Button>
				<Button onClick={captureImage}>Capture</Button>
			</ButtonContainer>
			<Canvas ref={canvasImg => setCanvasImg(canvasImg)} />
		</CameraFeedContainer>
	);
};

export default CameraFeed;
