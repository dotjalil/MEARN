function showSuccessMessage() {
  var msgContainer = document.querySelector(".message");
  var msg = `
    <h1>Success</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p>This is a success message</p>
    `;
  msgContainer.className = "message success";
  msgContainer.innerHTML = msg;
}

function showDangerMessage() {
  var msgContainer = document.querySelector(".message");
  var msg = `
      <h1>Error</h1>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        </svg>
  
        <p>This is an error message</p>
      `;
  msgContainer.className = "message danger";
  msgContainer.innerHTML = msg;
}
