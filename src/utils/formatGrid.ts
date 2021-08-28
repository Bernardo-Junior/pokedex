
export const formatData = (data: any, columns: number) => {
  const rows = Math.floor(data.length / columns);

  let lastRowElements = data.length - rows * columns;
  while(lastRowElements !== columns) {
    data.push({
      name: (lastRowElements + (Math.random() * (9999 - 1) + 1)).toString(),
      titulo: "empty",
    })

    lastRowElements += 1;
  }

  return data;
}