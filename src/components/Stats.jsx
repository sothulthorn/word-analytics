const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharacterLeft} label="Facebook" />
    </section>
  );
};

export default Stats;

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};
