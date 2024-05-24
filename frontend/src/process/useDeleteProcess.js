import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProcess as deleteProcessApi } from "../services/apiProcess";
import toast from "react-hot-toast";

function useDeleteProcess() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProcess } = useMutation({
    mutationFn: (id) => deleteProcessApi(id),
    onSuccess: () => {
      toast.success("A Process has been deleted");
      queryClient.invalidateQueries({
        queryKey: ["process"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProcess };
}

export default useDeleteProcess;
