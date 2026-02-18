const Title = ({ title, desc }) => {
  return (
    <section className="w-full max-w-5xl mx-auto flex justify-center text-center">
      <div className="mx-4">
        <h1 className="text-4xl font-light  my-8 tracking-widest">{title}</h1>
        <p className="my-6 text-lg font-extralight">{desc}</p>
      </div>
    </section>
  );
};

export default Title;
