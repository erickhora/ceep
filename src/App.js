import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";

function App() {
	return (
		<section className="conteudo">
			<FormularioCadastro />
			<ListaDeNotas />
		</section>
	);
}

export default App;
