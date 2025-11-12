function loadTemplate(type) {
  const name = document.getElementById("name").value || "[Candidate Name]";
  const position = document.getElementById("position").value || "[Position]";

  const templates = {
    selected: `Dear ${name},

We are pleased to inform you that you have been selected for the position of ${position}.

Please reply to this email to confirm your acceptance.

Best regards,
HR Team`,
    rejected: `Dear ${name},

Thank you for applying for the position of ${position}.

We regret to inform you that we have decided to move forward with other candidates.

Best regards,
HR Team`
  };

  document.getElementById("content").value = templates[type];
}

document.getElementById("previewBtn").addEventListener("click", () => {
  const content = document.getElementById("content").value;
  const previewBox = document.getElementById("previewBox");

  previewBox.innerText = content;
  previewBox.classList.remove("hidden");
});

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  // Show popup message
  showPopup("Email sent successfully!");
});

function showPopup(message) {
  const msgBox = document.createElement("div");
  msgBox.className = "popupMessage";
  msgBox.innerText = message;

  document.body.appendChild(msgBox);

  setTimeout(() => {
    msgBox.remove();
  }, 2000);
}
