function previewFeedback() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
  
    document.getElementById("previewName").innerText = name;
    document.getElementById("previewEmail").innerText = email;
    document.getElementById("previewFeedback").innerText = feedback;
  
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("previewContainer").style.display = "block";
  }
  
  function editFeedback() {
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("previewContainer").style.display = "none";
  }

  function confirmSaveChanges() {
    
    alert("Your Feedback is submitted !");
    
}