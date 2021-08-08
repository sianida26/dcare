import Dexie from 'dexie'

const db = new Dexie('appDB')

db.version(1).stores({
    auth: 'key, value'
});

export default db