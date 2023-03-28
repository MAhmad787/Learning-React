import Org from './Org';

const Orgs = ({ orgs, onDelete }) => {
  return (
    <section className="mt-5">
      <h1 className="text-blue-700 font-bold text-3xl text-center mb-4">
        Your Educational Institutes
      </h1>
      {orgs.length !== 0 ? (
        <div className="w-screen flex flex-col items-center justify-center">
          {orgs.map((org) => (
            <Org org={org} key={org.id} onDelete={onDelete} />
          ))}
        </div>
      ) : (
        <h3 className="text-black font-semibold text-xl text-center mb-4">
          No Institutes to show
        </h3>
      )}
    </section>
  );
};

export default Orgs;
