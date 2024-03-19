import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className={css.App}>
            {/* <NavBarSimple /> */}
            <NavBarForm />
            <Sidebar />
        </div>
    );
}

export default App;
