'use strict';

var generateWizardsData = function(wizardsCount) {
  var wizards = [];

  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  var surnames = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  var colors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];

  var eyesColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];

  for (let i = 0; i < wizardsCount; i++) {
    let newNameKey = Math.floor(Math.random() * names.length);
    let newName = names[newNameKey];
    let newSurnameKey = Math.floor(Math.random() * surnames.length);
    let newSurname = surnames[newSurnameKey];
    let newFullname = newName + ' ' + newSurname;
    var newColor = colors[Math.floor(Math.random() * colors.length)];
    var newEyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)];

    var newWizard = {
      name: newFullname,
      coatColor: newColor,
      eyesColor: newEyesColor,
    };

    wizards.push(newWizard);
  }

  return wizards;
};

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var generateWizardElement = function(wizard) {
  var newWizard = wizardTemplate.cloneNode(true);

  newWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  newWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  newWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return newWizard;
};

var generateWizardsBlock = function(wizards) {
  var wizardsFragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    let wizard = wizards[i];
    var newWizard = generateWizardElement(wizard);

    wizardsFragment.appendChild(newWizard);
  }

  return wizardsFragment;
};


// Start
var setup = document.querySelector('.setup');

setup.classList.remove('hidden');

var wizards = generateWizardsData(4);
var wizardsBlock = generateWizardsBlock(wizards);
var similarList = document.querySelector('.setup-similar-list');
var setupSimilar = setup.querySelector('.setup-similar');

similarList.appendChild(wizardsBlock);
setupSimilar.classList.remove('hidden');
