fetch("/data.json")
.then(response => response.text())
.then(data=>{
    const json = JSON.parse(data);
    json.forEach(({category,score})=>{
        console.log(category)
        console.log(score)
    })
})

