import styled from 'styled-components';

export const CameraFeedContainer = styled.div`
	display: flex;
	flex-flow: column;
	gap: 20px;
	align-items: center;
`;

export const VideoFeed = styled.video`
	max-width: 661px;
	width: 100%;
	height: 421px;
	position: absolute;
	top: 137px;
	z-index: -1;
`;

export const Frame = styled.img`
	width: 700px;
`;

export const Canvas = styled.canvas`
	max-width: 661px;
	width: 100%;
	height: 421px;
	position: absolute;
	top: 73%;
	z-index: -1;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-flow: row;
	gap: 20px;
`;

export const Button = styled.button`
	background: ${({ theme }) => theme.Shadow};
	color: ${({ theme }) => theme.HeaderText};
	box-shadow: 0 0 3px 1px ${({ theme }) => theme.Header};
	border: none;
	text-transform: uppercase;
	border-radius: 5px;
	padding: 10px 15px;
	font-size: 1em;
	font-weight: 600;
	margin-bottom: 10px;
	outline: none;
	&:hover {
		box-shadow: 0 0 5px 2px ${({ theme }) => theme.Header};
	}
`;
