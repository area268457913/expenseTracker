const Category = require('../category')
const db = require('../../config/mongoose')
const SEED_CATEGORY = [
  {
    name: '家居物業',
    icon: 'fas fa-home',
  },
  {
    name: '交通出行',
    icon: 'fas fa-shuttle-van',
  },
  {
    name: '休閒娛樂',
    icon: 'fas fa-grin-beam',
  },
  {
    name: '餐飲食品',
    icon: 'fas fa-utensils',
  },
  {
    name: '其他',
    icon: 'fas fa-pen',
  },
]


db.once('open', () => {
  Category.create(SEED_CATEGORY)

    .then(() => {
      console.log('insert product done....!');
      return db.close();
    })
    .then(() => console.log('database connection closed'))
    .catch((error) => console.log(error));
});