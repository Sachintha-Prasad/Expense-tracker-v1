export const useGetUserInfo = () => {
    const { name, profilePhoto, isAuth, userId } =
        JSON.parse(localStorage.getItem('auth')) || {}

    return { name, profilePhoto, isAuth, userId }
}
