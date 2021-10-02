/* Minimum number of bills  function: Rends l'argent ! */

function minBills(bills, ammount)
{
    //Possible bills you can use
    var possibleBills = bills;

    var result = [];

    // Current ammount we have
    var currentAmount = ammount;

    // Go through all possible bills
    for (var i = 0; i < possibleBills.length; i++) {
        // Loop while deducting bills
        while (currentAmount - possibleBills[i] >= 0) {

            currentAmount -= possibleBills[i];
            result.push(possibleBills[i]);

            // Return length if the current amount is 0
            if (currentAmount === 0) {
                return result.length;
            }
        }
    }

    // Return -1 if it can't be changed into bills
    if (currentAmount > 0) {
        return -1;
    }

    return result.length;
}


/* Maximum number of consecutive function: Des 1 et des 0 à devenir fou ! */

function maxZeros(N)
{

    if (N == 0)
        return 1;

    let max = -1;

    let cnt = 0;

    while (N != 0)
    {
        if ((N & 1) == 0 )
        {
            cnt++;
            N >>= 1;
            max = Math.max(max, cnt);
        }
        else
        {
            max = Math.max(max, cnt);
            cnt = 0;
            N >>= 1;
        }
    }
    return max;
}


/* Maximum path function: Pic pic pic ! */

function maxPath(grid){

    // Get max width of the grid
    const maxWidth = grid[0].length-1;
    // Get max height of the grid
    const maxHeight = grid.length-1;

    // Initialize next which will contain all possible nodes
    let next = [{ x: 0, y: 0, weight: grid[0][0] }];
    let arr = next;

    do {
        arr = next;
        next = [];

        for (let i = 0; i < arr.length; ++i) {
        let node = arr[i];

        // Check Right
        if (node.x < maxWidth) {
            next.push({
            x: node.x + 1,
            y: node.y,
            weight: node.weight + grid[node.y][node.x + 1]
            });
        }

        //Check Down
        if (node.y < maxHeight) {
            next.push({
            x: node.x,
            y: node.y + 1,
            weight: node.weight + grid[node.y + 1][node.x]
            });
        }
        }
    } while (next.length);

    // Return max of all possible paths
    return Math.max(...arr.map(o => o.weight));
};

module.exports = {minBills, maxZeros, maxPath}