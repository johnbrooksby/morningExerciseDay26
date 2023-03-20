// return one line of tower for each 1 in the num parameter
// every line of the tower needs to contain 2 more stars than the one above it.


function tower(num){
    let asterisk = '*';
    let towerArr = [];
    for(let i = 0; i < num; i++){
        towerArr.push(asterisk);
        asterisk += '**';

        for (let j = 0; j < i; j++){
            towerArr[j] = (` ${towerArr[j]} `);
        };
    };
    return towerArr;
};

console.log(tower(6));