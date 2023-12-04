class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    sameOwner(otherPet) {
      if (this.ownerName === otherPet.ownerName) {
        return true;
      } else {
        return false;
      }
    }
  }  

  const petForm = document.getElementById('petForm');
  const petList = document.getElementById('petList');
  const sameOwnerPetsList = document.getElementById('sameOwnerPets');
  const petsArray = [];

  petForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const petName = petForm.petName.value;
    const ownerName = petForm.ownerName.value;
    const species = petForm.species.value;
    const breed = petForm.breed.value;

    const newPet = new Pet(petName, ownerName, species, breed);
    petsArray.push(newPet);
    displayPet(newPet);
    petForm.reset();
  });

  function displayPet(pet) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nome Animale: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
  }

  function findPetsWithSameOwner() {
    sameOwnerPetsList.innerHTML = '';

    const ownerName = owner.ownerN.value;
    const sameOwnerPets = petsArray.filter(pet => pet.ownerName === ownerName);

    if (sameOwnerPets.length > 0) {
      sameOwnerPets.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome Animale: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        sameOwnerPetsList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement('li');
      listItem.textContent = `Nessun animale trovato per il proprietario ${ownerName}`;
      sameOwnerPetsList.appendChild(listItem);
    }
  }

  const findSameOwnerBtn = document.getElementById('findSameOwnerBtn');
    findSameOwnerBtn.addEventListener('click', findPetsWithSameOwner);
 


  
  console.log(petsArray)