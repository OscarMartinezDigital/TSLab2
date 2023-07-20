/* Implement an asynchronous function named fetchData that simulates fetching data from an API.
The function should take a url parameter and return a promise that resolves with the fetched data after a delay of 2 seconds. */

async function fetchData(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "success") {
        resolve({
          status: "success",
          data: [1, 2, 3, 4, 5],
        });
      } else if (url === "error") {
        reject("Error");
      }
    }, 2000);
  });
}

/* Implement an asynchronous function named processData that takes the fetched data and performs a simple processing step.
The function should return a promise that resolves with the processed data after a delay of 1 second. */
async function processData(data: any): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = data.data.map((element: number) => element * 2);
      resolve(processedData);
    }, 1000);
  });
}

/* Implement an asynchronous function named displayData that takes the processed data and logs it to the console. */
async function displayData(processedData: any): Promise<void> {
  console.log("Processed Data:", processedData);
}

/* Create a function named fetchAndProcessData that invokes the fetchData, processData, and displayData functions in a sequential manner.
Handle any errors that occur during the asynchronous operations using try-catch blocks. */
async function fetchAndProcessData(url: string): Promise<void> {
  try {
    const fetchedData = await fetchData(url);
    const processedData = await processData(fetchedData);
    await displayData(processedData);
  } catch (error) {
    console.error(error);
  }
}

/* Call fetchAndProcessData function with url set to "success" */
fetchAndProcessData("success");

/* Call fetchAndProcessData function with url set to "error" */
fetchAndProcessData("error");
