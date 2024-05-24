import useProces from "./useProces";

function Proces() {
  const { isLoading, proces, error } = useProces();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h2>Something went wrong!🔥</h2>;
  if (!proces.length)
    return <h2>There is no data.Wait for 5 second and refresh</h2>;

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Time Stamp</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        {proces.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Proces;
