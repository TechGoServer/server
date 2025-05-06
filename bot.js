const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'ITechWorld.aternos.me',
    port: 25565,
    username: 'EncoAfkBot', // можно поменять ник
    version: false // автоопределение версии
  });

  bot.on('spawn', () => {
    console.log('✅ Бот зашёл на сервер и стоит AFK!');
    
    // Вводим команду /login AutoBot111
    bot.chat('/login AutoBot111');
  });

  bot.on('end', () => {
    console.log('❌ Бот отключился. Перезапуск через 5 секунд...');
    setTimeout(createBot, 5000);
  });

  bot.on('kicked', console.log);
  bot.on('error', console.log);
}

createBot();
