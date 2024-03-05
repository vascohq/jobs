import vascoLogo from "../../assets/vasco.svg";

export function Hero() {
  return (
    <section>
      <div>
        <img src={vascoLogo} className="logo vasco" alt="Vasco logo" />
      </div>
      <h1>Vasco Frontend Challenge</h1>
      <p>Good luck and have fun!</p>
    </section>
  );
}
