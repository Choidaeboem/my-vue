const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    const t = Math.random() * 1000
    setTimeout(() => {
      resolve(i)
    }, t)
  })
}

const foo = async () => {
  for (let i = 0; i < 10; i++) {
    try {
      const r = await longFunc(i)
      console.log(r)
    } catch (e) {
      console.log('error', e)
    }
  }
  return 'done'
}

foo()
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.log(e)
  })

export default {
  foo
}
