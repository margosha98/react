
export let getUsersPage = (state) => {
    return state.usersPage
}

export let getCurrenttPage = (state) => {
    return state.usersPage.currentPage
}

export let getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

export let getPageSize = (state) => {
    return state.usersPage.pageSize
}

export let getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export let getIsToggle = (state) => {
    return state.usersPage.isToggle
}