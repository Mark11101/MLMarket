import notUndefined from '../notUndefined'

const appendClassName = (baseClass, extendClass) => {
  if (!extendClass) {
    return baseClass
  }

  if (Array.isArray(extendClass)) {
    const classList = extendClass.filter(className => className && notUndefined(className))
    return [baseClass, ...classList].join(' ').trim()
  }

  return [baseClass, extendClass].join(' ').trim()
}

export default appendClassName
