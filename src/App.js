import { ThemeProvider } from 'styled-components';
import { AppContainer, GlobalStyle, theme } from './App.styled';
import HomeLayout from './layouts/home.layout.component';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppContainer>
				<HomeLayout />
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
