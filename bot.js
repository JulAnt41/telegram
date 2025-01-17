const { Bot } = require('grammy');

const bot = new Bot('7829361609:AAHWyDb-SJKYJECYTt0D01vEFBe_SGU2xHw');

bot.command('start', (ctx) => {
    ctx.reply('Привет! Напиши /help, чтобы узнать, что я умею!');
});

bot.command('help', (ctx) => {
    ctx.reply('/start - приветствие\n/help - помощь\n/echo - повторить сообщение\n/joke - расскажи шутку');
});

bot.command('echo', (ctx) => {
    const message = ctx.message.text.split(' ').slice(1).join(' ');
    ctx.reply(message || 'Пожалуйста, введите сообщение для повторения.');
});

bot.command('joke', async (ctx) => {
    const jokes = [
        '- Как нужно ходить в шахматах, чтобы создать морально-психологический дискомфорт сопернику?\n- Под себя.',
        'Мужик поймал такси.\n- Куда вам?\n- Нет, к удавам я не поеду.\n- Нет, вы меня не правильно поняли! Куда вам надо?\n- Ну раз надо, то поехали к удавам.',
        'Атеисты такие: С Новым 4524732345 годом!',
    ];

    const randomJoke = jokes[Math.floor(Math.random()  * jokes.length)];
    await ctx.reply(randomJoke);

});

bot.start();
console.log('Бот запущен.');