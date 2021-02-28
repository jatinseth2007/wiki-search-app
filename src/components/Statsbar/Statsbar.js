import './Statsbar.css';


export const Statsbar = ({ totalResults }) => {
    return (
        <div className="stats-bar-container">
            <span>Displaying <strong>{totalResults}</strong> results.</span>
        </div>
    );
}