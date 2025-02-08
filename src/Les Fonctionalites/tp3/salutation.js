export function Salam() {
    const T = ['brahim', 'said', 'aissa'];
    return (
        <>
            <h1>salam alaikoum</h1>
            <ul>
                {T.map((elt) => (
                    <li>{elt}</li>
                ))}
            </ul>
        </>
    );
}