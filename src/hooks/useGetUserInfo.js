export const useGetUserInfo = () => {
    const { userId, name, profilePhoto, isAuth } = JSON.parse(
        localStorage.getItem('auth')
    )

    return { userId, name, profilePhoto, isAuth }
}
