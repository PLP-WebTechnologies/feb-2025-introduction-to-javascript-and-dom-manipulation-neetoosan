// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
  const dynamicText = document.getElementById('dynamicText');
  dynamicText.textContent = 'Text Changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('changeStyleButton').addEventListener('click', function() {
  const dynamicStyle = document.getElementById('dynamicStyle');
  dynamicStyle.style.color = 'blue';
  dynamicStyle.style.fontSize = '20px';
});

// Add or remove an element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
  const container = document.getElementById('dynamicElementContainer');
  const newElement = document.createElement('p');
  newElement.textContent = 'New Element Added';
  container.appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', function() {
  const container = document.getElementById('dynamicElementContainer');
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});
