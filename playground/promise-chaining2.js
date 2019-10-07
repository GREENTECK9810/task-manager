require('../src/db/mongoose')

const Task = require('../src/models/tasks')


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed: false})

    return count
}

deleteTaskAndCount("5d98e1e4f12dc0cd78f652c9").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

