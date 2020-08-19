'use strict';

(function () {
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
  var wizards = generateWizardsData(4);
  var wizardsBlock = generateWizardsBlock(wizards);
  var similarList = document.querySelector('.setup-similar-list');
  var setupSimilar = setup.querySelector('.setup-similar');

  similarList.appendChild(wizardsBlock);
  setupSimilar.classList.remove('hidden');

  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function(evt) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов')
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function(evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов')
    } else {
      target.setCustomValidity('');
    }
  });

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('[name="coat-color"]');

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var getRandFromArray = function(arr) {
    var randKey = Math.floor(Math.random() * arr.length);
    return arr[randKey];
  };

  var changeCoatColor = function() {
    var color = getRandFromArray(coatColors);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };

  wizardCoat.addEventListener('click', function(evt) {
    changeCoatColor();
  });

  //window.colorize(wizardCoat);
  //window.colorize(fireball);

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('[name="eyes-color"]');

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var changeEyesColor = function() {
    var color = getRandFromArray(eyesColors);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };

  wizardEyes.addEventListener('click', function() {
    changeEyesColor();
  });

  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('[name="fireball-color"]');

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var changeFireballColor = function() {
    var color = getRandFromArray(fireballColors);
    fireball.style.background = color;
    fireballInput.value = color;
  };

  fireball.addEventListener('click', function() {
    changeFireballColor();
  });
})();
