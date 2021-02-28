import './Logo.css';

export function Logo(){
    return (
        <section className="logo-container">
          <div className="logo" aria-hidden="true">
          <span className="blue">Search</span>
                <span className="red">With</span>
                <span className="yellow">Jatin</span>
                <span className="green exclaim">!</span>
          </div>
        </section>
      );
}