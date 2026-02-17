const Title = ({ title, desc }) => {
  return (
    <section className="w-full max-w-[1240px] mx-auto flex justify-center text-center">
      <div className="mx-4">
        <h1 className="text-4xl font-bold my-6">{title}</h1>
        <p className="my-6 text-lg font-light">{desc}</p>
      </div>
    </section>
  );
};

export default Title;
