import invariant from 'invariant'

const isAbsolute = (pathname) =>
  pathname.charAt(0) === '/'

const isIndex = (pathname) =>
  pathname.charAt(pathname.length - 1) === '/'

const resolvePathname = (to, from = '/') => {
  if (!to)
    return from

  if (isAbsolute(to)) {
    invariant(
      to.indexOf('..') === -1,
      'Pathname "%s" is not a valid URL pathname',
      to
    )

    return to
  }

  const prefix = isAbsolute(from) ? '/' : ''
  const pathname = from + (isIndex(from) ? '' : '/../') + to
  const parts = pathname.split('/').filter(part => !!part)

  let up = 0
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i] === '..') {
      parts.splice(i, 1)
      up++
    } else if (up) {
      parts.splice(i, 1)
      up--
    }
  }

  invariant(
    up === 0,
    'Pathname "%s" is not a valid URL pathname',
    pathname
  )

  return prefix + parts.join('/')
}

module.exports = resolvePathname
