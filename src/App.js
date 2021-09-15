import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import './App.css'
import FabButton from './Components/FabButton'
import Home from './Components/Home'
import store from './redux/store'

function App(props) {
	return (
		<Provider store={store}>
			<div className='container'>
				<Home />
				<FabButton />
			</div>
		</Provider>
	)
}

export default App
