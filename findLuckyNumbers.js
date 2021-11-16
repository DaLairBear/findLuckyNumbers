function luckyNumbers(n){
    let arr = []
    while(arr.length < n){
        let r = Math.floor(Math.random() * 10) + 1
        if(arr.indexOf(r) === -1){
            arr.push(r)
        }
    }
    console.log(arr)
}

luckyNumbers(10)


