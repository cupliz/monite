import data from '../data'

const setAuth = (name, password) => {
    return {
        type: "AUTH", name, password
    }
}

const logOut = () => {
    return {
        type: "LOGOUT"
    }
}

const editData = (value) => {
    const index = data.findIndex(res => res.id === value.id)
    data[index] = value
    return {
        type: "DATA", data
    }
}

const addData = (value) => {
    data.push(value)
    return {
        type: "DATA", data
    }
}

const deleteData = (index) => {
    data.splice(index, 1)
    return {
        type: "DATA", data
    }
}

export { setAuth, editData, deleteData, addData, logOut }