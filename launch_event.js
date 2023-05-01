// Function to show the modal
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Close the modal when clicked outside
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwb98Sl_m_STXnGwWBlYPuvzJXndBsPOyWIyaypGqqM9-WDUsXaAYI2mIZ4ZWinhGQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()

  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Change submit button to "loading" state
  submitBtn.innerHTML = 'Loading...';
  submitBtn.classList.add('disabled');

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => showModal())
    .catch(error => console.error('Error!', error.message))
    .finally(() => {
        // Reset submit button to original state
        submitBtn.innerHTML = 'Submit';
        submitBtn.classList.remove('disabled');
      });
});