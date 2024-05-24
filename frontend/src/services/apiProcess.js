import axios from "axios";

const BASE_URL = "http://localhost:3000";
export async function getProcesses() {
  const res = await axios.get(`${BASE_URL}/get-all`);
  if (res.status !== 200) throw new Error("Something went wrong!🔥");
  return res.data;
}

export async function getProcess(id) {
  const res = await axios.get(`${BASE_URL}/get-single/${id}`);
  if (res.status !== 200) throw new Error("Something went wrong!🔥");
  return res.data;
}

export async function addProcess() {
  const res = await axios.post(`${BASE_URL}/create-process`);
  if (res.status !== 201) throw new Error("Something went wrong!🔥");
  return res.data;
}

export async function deleteProcess(id) {
  const res = await axios.delete(`${BASE_URL}/delete/${id}`);

  if (res.status !== 200) throw new Error("Something went wrong!🔥");
  return res.data;
}
