export default {
    separateWithDash(array) {
        return array.map((item) => item.slice(1)).join(' - ')
    },

    addSpace(array) {
        return array.map((price) => price.replace('$', '$ '))
    },

    addSpaceWithDash(array) {
        return array.map((price) => price.replace('$', '$ ')).join(' - ')
    },
}