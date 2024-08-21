for (let index = 0; index < 11; index++) {
    console.log(index);
    if (index==6) {
        break;
    }
}

console.log("========= continue ==================");
for (let index = 0; index < 5; index++) {
    console.log(index);
    if (index==2) {
        continue;
    }
    console.log("=========");
}