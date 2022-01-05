





try {
  let x = 5
  let y = 6
  let total = x + y + z
} catch (err) {
  console.log(err)
} 



try {
  let x = 5
  let y = 6
  let total = x + y + z
} catch (err) {
  console.log(err)
} finally {
    console.log(`Just continue`)

}


try {
  let x = 5
  let y = 6
  let total = x + y + z
} catch (err) {
  console.log('Type of the error:', err.name)
  console.log('Description:', err.message)
} finally {
    console.log(`Just continue`)
    
}


