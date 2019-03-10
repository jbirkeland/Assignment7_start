//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

var ConsoleDisplay = document.getElementById("ConsoleDisplay");
console.log(ConsoleDisplay);

ConsoleDisplay.appendChild(BtnChurchill);

ConsoleDisplay.appendChild(BtnGhandi);

ConsoleDisplay.appendChild(BtnDemosthenes);

ConsoleDisplay.appendChild(BtnDonate);

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  var newChTag = document.createElement('p');
  BtnChurchill.appendChild(newChTag);

  var newChText = document.createTextNode('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);
  newChTag.appendChild(newChText);

  //console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    var newChTag2 = document.createElement('p');
  BtnChurchill.appendChild(newChTag2);
    var newChText2 = document.createTextNode('This speech took place before the common era.');
    newChTag2.appendChild(newChText2);
  }else{
    var newChTag2 = document.createElement('p');
  BtnChurchill.appendChild(newChTag2);
    var newChText2 = document.createTextNode('This speech took place during the common era.');
    newChTag2.appendChild(newChText2);
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;
  
  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    var newChTag3 = document.createElement('p');
  BtnChurchill.appendChild(newChTag3);
    var newChText3 = document.createTextNode('This is the oldest speech on the page.');
    newChTag3.appendChild(newChText3);
  }
  if(speechesArray[0].year === newest){
    var newChTag3 = document.createElement('p');
  BtnChurchill.appendChild(newChTag3);
    var newChText3 = document.createTextNode('This is the most recent speech on the page.');
    newChTag3.appendChild(newChText3);
  }
});


document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  var newGhTag = document.createElement('p');
  BtnGhandi.appendChild(newGhTag);

  var newGhText = document.createTextNode('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);
  newGhTag.appendChild(newGhText);

  if(speechesArray[1].yearIsBCE === true){
    var newGhTag2 = document.createElement('p');
  BtnGhandi.appendChild(newGhTag2);
    var newGhText2 = document.createTextNode('This speech took place before the common era.');
    newGhTag2.appendChild(newGhText2);
  }else{
    var newGhTag2 = document.createElement('p');
  BtnGhandi.appendChild(newGhTag2);
    var newGhText2 = document.createTextNode('This speech took place during the common era.');
    newGhTag2.appendChild(newGhText2);
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    var newGhTag3 = document.createElement('p');
  BtnGhandi.appendChild(newGhTag3);
    var newGhText3 = document.createTextNode('This is the oldest speech on the page.');
    newGhTag3.appendChild(newGhText3);
  }
  if(speechesArray[1].year === newest){
    var newGhTag3 = document.createElement('p');
  BtnGhandi.appendChild(newGhTag3);
    var newGhText3 = document.createTextNode('This is the most recent speech on the page.');
    newGhTag3.appendChild(newGhText3);
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  var newDeTag = document.createElement('p');
  BtnDemosthenes.appendChild(newDeTag);

  var newDeText = document.createTextNode('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);
  newDeTag.appendChild(newDeText);

  if(speechesArray[2].yearIsBCE === true){
    var newDeTag2 = document.createElement('p');
  BtnDemosthenes.appendChild(newDeTag2);
    var newDeText2 = document.createTextNode('This speech took place before the common era.');
    newDeTag2.appendChild(newDeText2);
  }else{
    var newDeTag2 = document.createElement('p');
  BtnDemosthenes.appendChild(newDeTag2);
    var newDeText2 = document.createTextNode('This speech took place during the common era.');
    newDeTag2.appendChild(newDeText2)
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    var newDeTag3 = document.createElement('p');
  BtnDemosthenes.appendChild(newDeTag3);
    var newDeText3 = document.createTextNode('This is the oldest speech on the page.');
    newDeTag3.appendChild(newDeText3);
  }
  if(speechesArray[2].year === newest){
    var newDeTag3 = document.createElement('p');
  BtnDemosthenes.appendChild(newDeTag3);
    var newDeText3 = document.createTextNode('This is the most recent speech on the page.');
    newDeTag3.appendChild(newDeText3);
  }
});