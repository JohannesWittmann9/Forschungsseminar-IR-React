let interaction_id, doc_title, doc_position, doc_page_viewed;
let startTime, endTime;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "itemClicked") {
    // Extracting data from the message
    ({ interaction_id, doc_title, doc_position, doc_page_viewed } =
      message.data);
  }
});

chrome.tabs.onUpdated.addListener(() => {
  startTime = new Date();
});

chrome.tabs.onRemoved.addListener(() => {
  endTime = new Date();
  time_spent = endTime - startTime;

  sendDataToServer(
    interaction_id,
    doc_title,
    doc_position,
    doc_page_viewed,
    time_spent
  );
});

function sendDataToServer(
  interaction_id,
  doc_title,
  doc_position,
  doc_page_viewed,
  time_spent
) {
  fetch("http://localhost:7000/api/documents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      doc_id,
      interaction_id,
      doc_title,
      doc_position,
      doc_page_viewed,
      time_spent,
    }),
  })
    .then((response) => {
      console.log("Sending document data to server successfully!");
    })
    .catch((error) => {
      console.error("Error sending data to server:", error);
    });
}
