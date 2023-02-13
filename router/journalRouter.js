const router = require('express').Router();
const {getJournals,
    getJournal,
    createJournals,
    updateJournal,
    deleteJournal} = require('../controller/journal')


    router.route('/').get(getJournals).post(createJournals)
    router.route('/:journalId').get(getJournal).patch(updateJournal).delete(deleteJournal)


    module.exports = router;