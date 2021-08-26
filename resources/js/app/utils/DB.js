import Dexie from 'dexie'

const db = new Dexie('dcare')

db.version(1).stores({
    auth: 'key, value',
    disability: 'key, value',
    terapist: 'key, value',
});

export default db