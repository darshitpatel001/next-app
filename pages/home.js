import styles from '../styles/Home.module.css';
import Header from './Header';
export default function     () {
const callAPI = async () => {
	try {
		const res = await fetch(`https://api.punkapi.com/v2/beers`);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
	return (
		<div >
			<Header />
			<h1>This Is A Page............</h1>
			<main>
				<button onClick={callAPI}>Make API call</button>
			</main>
		</div>
	);
}