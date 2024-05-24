import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProcess } from "../services/apiProcess";

function useCreateProcess() {
  const queryClient = useQueryClient();
  const { mutate: createProcess, isPending: isCreating } = useMutation({
    mutationFn: addProcess,
    onSuccess: () => {
      toast.success("A process has been created");
      queryClient.invalidateQueries({
        queryKey: ["process"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createProcess };
}

export default useCreateProcess;
