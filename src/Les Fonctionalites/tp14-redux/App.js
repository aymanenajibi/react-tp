import { useSelector, useDispatch } from "react-redux";
import { increment, decremente,reset} from "./reducers";

export default function App() {
    const cpt = useSelector((state) => state.value);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h4 style={{ color: 'greenyellow' }}>Compteur</h4>
            <div className="row">
                <button className="button" onClick={() => dispatch(decremente())}>
                    -1
                </button>
                <span className="value" style={{ color: 'red', fontSize: '2em' }}>
                    {cpt}
                </span>
                <button className="button" onClick={() => dispatch(increment())}>
                    +
                </button>
                <button className="button" onClick={() => dispatch(reset())}>
                    Reset
                </button>
            </div>
        </div>
    )
}
