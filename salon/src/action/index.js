const setUser = (name, password) => {
    return {
        type: "USER", name, password
    }
}
export { setUser }