for (let key in global) { 
    console.log(key);
}

console.log(" # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # ")

console.log(process.argv)

process.stdin.on("data", (data) => {
    process.stdout.write(data)
});