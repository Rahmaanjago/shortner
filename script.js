const nav = document.querySelector(".nav");
const navigationBar = document.querySelector(".navigation_bar");

nav.addEventListener("click", function () {
  navigationBar.classList.toggle("hidden");
});

document.getElementById("shortenButton").addEventListener("click", async () => {
  const longUrl = document.getElementById("longUrlInput").value;

  try {
    const response = await fetch("http://localhost:3000/shorten-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: longUrl }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Long URL: ${longUrl}\nShortened URL: ${data.result_url}`);
    } else {
      alert(`Error: ${response.status}, ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while processing the request.");
  }
});
