import { jwtDecode } from 'jwt-decode'
import moment from 'moment'

export const isTokenExpired = (token: string) => {
  const { exp } = jwtDecode(token)

  if (!exp) {
    return true
  }

  const now = moment()
  const offset = now.clone().add(10, 'seconds')
  const expirationTime = moment.unix(exp)

  return expirationTime.isSameOrBefore(offset)
}
