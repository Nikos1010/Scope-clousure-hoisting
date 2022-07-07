const moneyBox = (function() {
    let _quantityCoins = 0;
    function saveCoins(coins) {
        return _quantityCoins += coins;
    }
    function takeCoins(coins) {
        return _quantityCoins -= coins;
    }
    function showCoins() {
        console.log(`MoneyBox: $${_quantityCoins}`);
    }
    return {
        saveCoins,
        takeCoins,
        showCoins
    }
})();

moneyBox.saveCoins(10);
moneyBox.saveCoins(30);
moneyBox.takeCoins(5);
moneyBox.showCoins();


function moneyBoxNoith() {
    let _quantityCoins = 0;
    function saveCoins(coins) {
        return _quantityCoins += coins;
    }
    function takeCoins(coins) {
        return _quantityCoins -= coins;
    }
    function showCoins() {
        console.log(`MoneyBox: $${_quantityCoins}`);
    }
    return {
        saveCoins,
        takeCoins,
        showCoins
    }
};

const moneyBoxAna = moneyBoxNoith();
moneyBoxAna.saveCoins(10);
moneyBoxAna.saveCoins(1);
moneyBoxAna.takeCoins(3);
moneyBoxAna.showCoins();
