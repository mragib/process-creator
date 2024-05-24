import { useQuery } from "@tanstack/react-query";
import { getProcesses } from "../services/apiProcess";

function useProcess() {
  const {
    isPending: isLoading,
    data: processes,
    error,
  } = useQuery({
    queryKey: ["process"],
    queryFn: getProcesses,
  });
  return { isLoading, processes, error };
}

export default useProcess;
