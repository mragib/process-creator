import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProcess } from "../services/apiProcess";

function useProces() {
  const { id } = useParams();
  const {
    isPending: isLoading,
    data: proces,
    error,
  } = useQuery({
    queryKey: ["proces", id],
    queryFn: () => getProcess(id),
  });
  return { isLoading, proces, error };
}

export default useProces;
