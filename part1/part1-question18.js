let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const c in statistics) {
    if (c.startsWith('r') || statistics[c] % 2 == 1) {
        console.log(statistics[c]);
    }
}
