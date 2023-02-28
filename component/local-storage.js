const setData = (key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
const getData = (key)=>{
    let value=JSON.parse(localStorage.getItem(key))
    return value
}

export {setData,getData}