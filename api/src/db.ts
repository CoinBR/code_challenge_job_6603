interface Person {
  id: number;
  name: string;
}

const db = {
  _idCounter: 0, // Private property to track IDs

  collections: {
    person: [] as Person[],
  },

  generateId: (): number => {
    return ++db._idCounter;
  },

  reset: (): void => {
    db._idCounter = 0;
    db.collections.person = []; 
  }
};

export default db;

