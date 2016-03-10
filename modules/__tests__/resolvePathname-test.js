import expect from 'expect'
import resolvePathname from '../index'

describe('resolvePathname', () => {
  it('works when from is not given', () => {
    expect(resolvePathname('c')).toEqual('/c')
  })

  it('works when from is relative', () => {
    expect(resolvePathname('c', 'a/b')).toEqual('a/c')
  })

  it('works when to is absolute', () => {
    expect(resolvePathname('/c', '/a/b')).toEqual('/c')
  })

  it('works when to is empty', () => {
    expect(resolvePathname('', '/a/b')).toEqual('/a/b')
  })

  it('works when to is a sibling of the parent', () => {
    expect(resolvePathname('../c', '/a/b')).toEqual('/c')
  })

  it('works when to is a sibling path', () => {
    expect(resolvePathname('c', '/a/b')).toEqual('/a/c')
  })

  it('works when from is an index path', () => {
    expect(resolvePathname('c', '/a/')).toEqual('/a/c')
  })

  it('throws when to is an invalid pathname', () => {
    expect(() => resolvePathname('/../c')).toThrow()
  })

  it('throws when to is outside the root', () => {
    expect(() => resolvePathname('../../c', '/a/b')).toThrow()
  })
})
