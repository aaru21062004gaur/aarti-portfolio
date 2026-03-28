// For Vite, we need to use this syntax
onmessage = (event) => {
  console.log("Worker received:", event.data);
  postMessage(`Worker says: "${event.data}" received`);
};
