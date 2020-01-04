import readlineSync from 'readline-sync';

const userName = (ask) => {
    const name = readlineSync.question(ask);
    console.log('Hello ' + name + '!');
}
export default userName;