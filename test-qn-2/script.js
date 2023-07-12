function addText() {
    var inputElement = document.getElementById('inputText');
    var inputValue = inputElement.value.trim();
  
    if (inputValue !== '') {
      var textList = document.getElementById('textList');
      var newItem = document.createElement('li');
      newItem.textContent = inputValue;
      textList.appendChild(newItem);
  
      inputElement.value = '';
    }
  }
  