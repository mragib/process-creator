import { Link } from "react-router-dom";
import useProcess from "./useProcess";
import useCreateProcess from "./useCreateProcess";
import useDeleteProcess from "./useDeleteProcess";

function Process() {
  const { isLoading, processes, error } = useProcess();
  const { createProcess, isCreating } = useCreateProcess();
  const { isDeleting, deleteProcess } = useDeleteProcess();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h2>Something went wrong!🔥</h2>;

  function handleCreateProcess() {
    createProcess();
  }

  return (
    <div>
      <button
        className="my-2"
        disabled={isCreating}
        onClick={handleCreateProcess}
      >
        create a process
      </button>
      {processes.length ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Process ID</th>
              <th>Creation Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {processes.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <Link to={`/process/${item.processId}`}>
                    {item.processId}
                  </Link>
                </td>
                <td>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(item.created_at)}
                </td>
                <td>
                  <span>
                    <Link to={`/process/${item.processId}`}>👁</Link>
                  </span>
                  <button
                    disabled={isDeleting}
                    onClick={() => deleteProcess(item.processId)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>There is no data.</h2>
      )}
    </div>
  );
}

export default Process;
