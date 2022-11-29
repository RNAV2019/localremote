import { useEffect, useState } from "react";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./App.css";

function App() {
	const [apiResponse, setApiResponse] = useState("");

	useEffect(() => {
		testAPI();

		return () => {};
	}, []);

	function testAPI() {
		fetch("http://192.168.0.130:8080/testAPI")
			.then((res) => res.text())
			.then((res) => setApiResponse(res));
	}
	function volumeUp() {
		fetch("http://192.168.0.130:8080/volumeup");
	}
	function volumeDown() {
		fetch("http://192.168.0.130:8080/volumedown");
	}
	function playpause() {
		fetch("http://192.168.0.130:8080/playpause");
	}

	return (
		<div className='App'>
			<div className='App-header'>
				<p className='title'>
					Local{" "}
					<a href='/' className='blue'>
						Remote
					</a>
				</p>
				<div className='flex'>
					<div className='padded' onClick={() => playpause()}>
						<PlayCircleOutline className='icon' />
					</div>
					<div className='padded' onClick={() => volumeUp()}>
						<AddCircleOutlineIcon className='icon' />
					</div>
					<div className='padded' onClick={() => volumeDown()}>
						<RemoveCircleOutlineIcon className='icon' />
					</div>
				</div>
				<p className='footer'>
					{apiResponse !== ""
						? apiResponse
						: "The API is not working correctly..."}
				</p>
			</div>
		</div>
	);
}

export default App;
