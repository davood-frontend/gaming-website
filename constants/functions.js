
//a costum function for picking 8 none-repetitive items from allProducts array
export const randomDataPicker = (items) => {
    const slicedArray = []
    let prevRandomNumbers = []
    while (slicedArray.length < 8) {
        const randomNumber = Math.floor(Math.random() * items.length)
        if (!prevRandomNumbers.includes(randomNumber)) {
            slicedArray.push(items[randomNumber])
        }
        prevRandomNumbers.push(randomNumber)
    }
    return slicedArray
}

//picking latest items (sort by the order thay come from dataBase not by a specefic date)
export const latestItemsPicker = (data) => {
    const endPoint = data.length
    const startPoint = endPoint - 8
    const res = data.slice(startPoint, endPoint)
    return res
}

//picking first items (sort by the order thay come from dataBase not by a specefic date)
export const firstItemsPicker = (data) => {
    const res = data.slice(0, 7)
    return res
}
export const numberFormatter = (num) => {
    num = parseInt(num)
    let formatted = num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 3 })
    return formatted
}