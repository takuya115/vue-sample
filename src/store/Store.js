export default {
    db: {
        state: 0,
        records: [],
    },
    setState(newState) {
        this.db.state = newState;
    },
    setRecord(newRecord) {
        this.db.records.push(newRecord);
    }
}