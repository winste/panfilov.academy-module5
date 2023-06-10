export  const deleteCharacter = array => array.map((item) => item.slice(1)).join(' - ')

export const addSpace = array => array.map((price) => price.replace('$', '$ ')).join(' - ')

export const formattedPrice = {
    deleteCharacterHyphen(array) {
        return array.map((item) => item.slice(1)).join(' - ')
    },

    addSpace(array) {
        return array.map((price) => price.replace('$', '$ ')).join(' - ')
    },

    addSpace2(array) {
        return array.map((price) => price.replace('$', '$ ')).join('')
    },
}