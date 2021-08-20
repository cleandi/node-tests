import {builder, asyncBuilder} from 'cleandi';

const provider = builder()
    .bindValue('msg', 'hello world!')
    .build('msg');

const asyncProvider = asyncBuilder()
    .bindValue('msg', 'hello world!')
    .build('msg');

const providerWorks = provider.msg === 'hello world!';

const asyncProviderWorks = (await asyncProvider.msg) === 'hello world!';

if (providerWorks && asyncProviderWorks)
    process.exit(0)
else
    process.exit(1)

export {};

