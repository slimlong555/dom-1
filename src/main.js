const div = dom.create('<td>hi</td>')
console.log(div)
const nodes = dom.empty(window.empty)
console.log(nodes)


dom.attr(test, 'tittle', 'hi i am so cool')
const tittle = dom.attr(test, 'tittle')
console.log(`tittle: ${tittle}`)


dom.text(test, '你好，这是新的内容')
const text1 = dom.text(test)
console.log(text1)

dom.style(test, {border: '1px solid red' , color:'blue'})
console.log(dom.style(test,'border'))
dom.style(test,'border','1px solid black')
   

dom.class.add(test,'red')
dom.class.remove(test,'red')
console.log(dom.class.has(test,'red'))

dom.on(test, 'click', ()=>{
    console.log('我点击了一下')
})


const test2 =  dom.find('#test2')[0]
console.log(dom.find('.red',test2)[0])

console.log(dom.parent(test))
console.log(dom.siblings(dom.find('#e2')[0]))