


export const UseraccessToken = () => {
    const accessToken = localStorage.getItem('accessToken') !== 'undefined' ? JSON.parse(localStorage.getItem('accessToken')) : localStorage.clear()
        
    return accessToken;
}


export const fetchUserInfo = () => {
    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()

    return user
}