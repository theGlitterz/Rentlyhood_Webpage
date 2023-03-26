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

const scriptURL = 'https://script.google.com/macros/s/AKfycbysUgxC4i8yJ5FQykvidcM5ISBtxQ6gq3MceuF7skBhgP8cNcnqeKoOWGhhPNBxKvvQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => showModal())
    .catch(error => console.error('Error!', error.message))
});


// function handleFormSubmit(event) {
//     event.preventDefault(); // Prevent the form from submitting normally
//     var formData = new FormData(event.target);
//     var email = formData.get('email'); // Get the value of the email field

//     gapi.client.sheets.spreadsheets.values.get({
//       spreadsheetId: 'YOUR_SPREADSHEET_ID',
//       range: 'Sheet1!A:C',
//       majorDimension: 'ROWS'
//     }).then(function(response) {
//       var values = response.result.values;
//       for (var i = 0; i < values.length; i++) {
//         if (values[i][0] == email) { // Match the email address
//           var name = values[i][1];
//           var message = values[i][2];
//           console.log('Name:', name);
//           console.log('Message:', message);
//           // Do something with the data
//         }
//       }
//     }, function(error) {
//       console.error('Error reading data from Google Sheet', error);
//     });
//   }

//   var form = document.getElementById('my-form');
//   form.addEventListener('submit', handleFormSubmit);