import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './containers/Main'
import GlobalStyle from './globalStyle'
import { store } from './store'

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Header />
            <Main />
            <Footer />
        </Provider>
    )
}

export default App
