export async function postDataToServer(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save data to the server");
    }
    console.log("Data saved successfully to the server");
  } catch (error) {
    console.error("Error while posting data to the server:", error.message);
  }
}
