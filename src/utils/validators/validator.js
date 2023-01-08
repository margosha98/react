
export const requared = (value) => {
    if (value) return undefined
    return 'Value is requared'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `MaxLength is ${maxLength}`
    return undefined
}