const sideSize = 6; // Grid de lado 6
const gridPosBase = [[1,1],[4,1],[2,2],[6,2],[5,3],[1,4],[4,4],[3,5],[6,5]];
const encriptedMessage = 'lróaon. sg sdersoildsu.:.cc kiomamii';

/*
    TU CODIGO PARA RESOLVERLO
        
*/

const decryptedMessage = decrypt(encriptedMessage, gridPosBase);
console.log(decryptedMessage);