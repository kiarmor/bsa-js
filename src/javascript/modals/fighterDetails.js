import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

export  function showWinnerDetailsModal(fighter) {
    const title = 'Win';
    const bodyElement = createWinnerDetails(fighter);
    showModal({ title, bodyElement });
}

function createWinnerDetails(fighter) {
    const { name } = fighter;
    const { health } = fighter;
    const { source } = fighter;

    const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
    const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });

    const healthElement = createElement({ tagName: 'p', className: 'fighter-health' });
    let attributes = { src: source };
    const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });
    nameElement.innerText = name;
    healthElement.innerText = 'Health left: ' + health;
    fighterDetails.append(nameElement, healthElement, imgElement);

    return fighterDetails;
}


function createFighterDetails(fighter) {
    const { name } = fighter;
    const { health } = fighter;
    const { attack } = fighter;
    const { defense } = fighter;
    const { source } = fighter;

    const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
    const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });

    // show fighter name, attack, defense, health, image

    const healthElement = createElement({ tagName: 'p', className: 'fighter-health' });
    const attackElement = createElement({ tagName: 'p', className: 'fighter-attack' });
    const defenseElement = createElement({ tagName: 'p', className: 'fighter-defense' });
    let attributes = { src: source };
    const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });

    nameElement.innerText = name;
    healthElement.innerText = 'Health: ' + health;
    attackElement.innerText = 'Attack: ' + attack;
    defenseElement.innerText = 'Defense: ' + defense;

    fighterDetails.append(nameElement, healthElement,  attackElement, defenseElement, imgElement);

    return fighterDetails;
}
