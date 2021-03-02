import styled from 'styled-components';

export const NavbarContainer = styled.div`
	margin-bottom: 20px;
	box-shadow: 0 0 6px 1px ${({ theme }) => theme.Shadow};
	background: ${({ theme }) => theme.Header};
`;
export const NavBrandContainer = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;
`;
export const Logo = styled.img``;
export const Name = styled.span`
	font-size: 30px;
	font-weight: 600;
	padding: 5px 10px;
	color: ${({ theme }) => theme.HeaderText};
	text-shadow: 0 0 3px ${({ theme }) => theme.Shadow};
`;
