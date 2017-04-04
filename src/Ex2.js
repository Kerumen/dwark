import Promise from 'bluebird';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const returnNameWithADelay = async name => {
  const delay = randomInt(1, 3);
  return new Promise(resolve => setTimeout(() => {
    console.log(`${name} ${delay}`);
    resolve();
  }, delay * 1000));
};

const f1 = () => returnNameWithADelay('f1');
const f2 = () => returnNameWithADelay('f2');
const f3 = () => returnNameWithADelay('f3');

const all = async () => {
  const list = [f1, f2, f3];
  await Promise.each(list, func => func());
  console.log('Done!');
};

(async () => {
  await all();
})();
