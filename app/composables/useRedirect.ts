export const useRedirect = () => {
  const { query } = useRoute()

  const redirect = (redirectURL: string) => {
    if (query.redirectUrl) {
      navigateTo(
        decodeURIComponent(
          (Array.isArray(query.redirectUrl)
            ? query.redirectUrl[0]
            : query.redirectUrl) ?? ''
        )
      )
    } else {
      navigateTo(redirectURL)
    }
  }

  return { redirect }
}
