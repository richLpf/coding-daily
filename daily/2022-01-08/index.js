function pMap(list, mapper, concurrency = Infinity) {
    // list 为 Iterator，先转化为 Array
    list = Array.from(list)
    return new Promise((resolve, reject) => {
      let currentIndex = 0
      let result = []
      let resolveCount = 0
      let len = list.length
      function next() {
        const index = currentIndex
        currentIndex++
        Promise.resolve(list[index]).then(o => {
            // console.log("o11111", index, mapper(o, index))
            return mapper(o, index)
        }).then(o => {
          result[index] = o
          resolveCount++
          if (resolveCount === len) { resolve(result) }
          if (currentIndex < len) { next() }
        })
      }
      for (let i = 0; i < concurrency && i < len; i ++) {
        next()
      }
    })
  }
  
  const sleep = seconds => new Promise(resolve => {
      console.log("seconds", seconds)
      setTimeout(resolve, seconds)
  })
  
  
  const now = Date.now()
    console.log('Start')
    pMap([1, 2, 3, 1, 1, 1], x => sleep(x*1000)).then(o => {
        console.log("o", o)
        console.log(Date.now() - now, 'seconds')
    })
  
  // pMap([1, 2, 3], x => x * 3).then(o => console.log(o))

  pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x * 1);