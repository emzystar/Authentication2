//  CRUD
const getJournal = async (req, res)=> {
    res.send('get journal')
}


const getJournals = async (req, res)=>{
    res.send('get all journals')
}

const createJournals = async (req, res)=>{
    res.send('create journal')
}

const updateJournal = async (req, res)=>{
    res.send('update journal')
}

const deleteJournal = async (req, res)=>{
    res.send('delete journal')
}

module.exports ={
    getJournals,
    getJournal,
    createJournals,
    updateJournal,
    deleteJournal

}