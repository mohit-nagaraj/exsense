import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import Loginpage from "./pages/LoginPage.jsx";
import SignUppage from "./pages/SignUpPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import NotFoundpage from "./pages/NotFoundPage.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/login' element={<Loginpage />} />
				<Route path='/signup' element={<SignUppage />} />
				<Route path='/transaction/:id' element={<TransactionPage />} />
				<Route path='*' element={<NotFoundpage />} />
			</Routes>
		</>
	);
}
export default App;