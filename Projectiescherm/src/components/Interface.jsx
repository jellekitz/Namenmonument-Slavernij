const Interface = ({ addName, addPersonalName }) => {
  return (
    <section className="interface">
      <button onClick={addName} className="interface__button">
        Zoek highlight
      </button>
      <button onClick={addPersonalName} className="interface__button">
        Persoonlijk verhaal highlight
      </button>
    </section>
  );
};

export default Interface;
