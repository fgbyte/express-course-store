## ⚡️ Try it Online

[![](https://camo.githubusercontent.com/bf5c9492905b6d3b558552de2c848c7cce2e0a0f0ff922967115543de9441522/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667)](https://fakerjs.dev/new)

[API Documentation](https://fakerjs.dev/guide/)

## 🚀 Features

-   💌 Locations - Generate valid looking Addresses, Zip Codes, Street Names, States, and Countries!
-   ⏰ Time-based Data - Past, present, future, recent, soon... whenever!
-   🌏 Localization - Set a locale to generate realistic looking Names, Addresses, and Phone Numbers.
-   💸 Finance - Create stubbed out Account Details, Transactions, and Crypto Addresses.
-   👠 Products - Generate Prices, Product Names, Adjectives, and Descriptions.
-   👾 Hacker Jargon - “Try to reboot the SQL bus, maybe it will bypass the virtual application!”
-   🧍 Names - Generate virtual humans with a complete online and offline identity.
-   🔢 Numbers - Of course, we can also generate random numbers and strings.

> Note: Faker tries to generate realistic data and not obvious fake data. The generated names, addresses, emails, phone numbers, and/or other data might be coincidentally valid information. Please do not send any of your messages/calls to them from your test setup.

## 📦 Install

```shell
npm install --save-dev @faker-js/faker
```

## 🪄 Usage

```ts
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});
```

## 💎 Modules

An in-depth overview of the API methods is available in the [documentation](https://fakerjs.dev/guide/).  
The API covers the following modules:

| Module | Example | Output |
| --- | --- | --- |
| Animal | `faker.animal.cat()` | Norwegian Forest Cat |
| Color | `faker.color.rgb()` | #cdfcdc |
| Commerce | `faker.commerce.product()` | Polo t-shirt |
| Company | `faker.company.companyName()` | Zboncak and Sons |
| Database | `faker.database.engine()` | MyISAM |
| Datatype | `faker.datatype.uuid()` | 7b16dd12-935e-4acc-8381-b1e457bf0176 |
| Date | `faker.date.past()` | Sat Oct 20 2018 04:19:38 GMT-0700 (Pacific Daylight Time) |
| Finance | `faker.finance.amount()` | ¥23400 (After setting locale) |
| Git | `faker.git.commitMessage()` | feat: add products list page |
| Hacker | `faker.hacker.phrase()` | Try to reboot the SQL bus, maybe it will bypass the virtual application! |
| Helpers | `faker.helpers.arrayElement(['a', 'b', 'c'])` | b |
| Image | `faker.image.cats()` | [https://loremflickr.com/640/480/cats](https://loremflickr.com/640/480/cats) [![](https://camo.githubusercontent.com/2b0b0e6a1e2aa9985824e1d254f7e12789f8fb76399da5c7ee561fed280e50f8/68747470733a2f2f6c6f72656d666c69636b722e636f6d2f3634302f3438302f63617473)](https://camo.githubusercontent.com/2b0b0e6a1e2aa9985824e1d254f7e12789f8fb76399da5c7ee561fed280e50f8/68747470733a2f2f6c6f72656d666c69636b722e636f6d2f3634302f3438302f63617473) |
| Internet | `faker.internet.domainName()` | muddy-neuropathologist.net |
| Location | `faker.location.city()` | Lake Raoulfort |
| Lorem | `faker.lorem.paragraph()` | Porro nulla id vero perspiciatis nulla nihil. ... |
| Music | `faker.music.genre()` | R&B |
| Person | `faker.person.firstName()` | Cameron |
| Phone | `faker.phone.phoneNumber()` | +1 291-299-0192 |
| Random | `faker.random.locale()` | fr\_CA |
| Science | `faker.science.unit()` | `{ name: 'meter', symbol: 'm' }` |
| System | `faker.system.directoryPath()` | /root |
| Vehicle | `faker.vehicle.vehicle()` | Lamborghini Camry |
| Word | `faker.word.adjective()` | adorable |

### Templates

Faker contains a generator method `faker.helpers.fake` for combining faker API methods using a mustache string format.

```ts
console.log(
  faker.helpers.fake(
    'Hello {{person.prefix}} {{person.lastName}}, how are you today?'
  )
);
```

## 🌏 Localization

Faker has support for multiple locales.

The default language locale is set to English.

Setting a new locale is simple:

```ts
// sets locale to de
faker.locale = 'de';
```

See our documentation for a list of [provided languages](https://fakerjs.dev/guide/localization.html#available-locales)

Please note: not every locale provides data for every module. In our pre-made locales, we fallback to English in such a case as this is the most complete and most commonly used language.

## ⚙️ Setting a randomness seed

If you want consistent results, you can set your own seed:

```ts
faker.seed(123);

const firstRandom = faker.number.int();

// Setting the seed again resets the sequence.
faker.seed(123);

const secondRandom = faker.number.int();

console.log(firstRandom === secondRandom);
```

## 🤝 Sponsors

Faker is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome backers

### Sponsors

[![](https://camo.githubusercontent.com/0e6a39ef0086157d83cbe4dcd48cf331ebaf8bd0f11db800672b338426e65c83/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66616b65726a732f6f7267616e697a6174696f6e732e737667)](https://camo.githubusercontent.com/0e6a39ef0086157d83cbe4dcd48cf331ebaf8bd0f11db800672b338426e65c83/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66616b65726a732f6f7267616e697a6174696f6e732e737667)

### Backers

[![](https://camo.githubusercontent.com/49993acf9cdbd2a690fda5eb87d48fdc68e9b7e27ab80893c7c67da140286967/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66616b65726a732f696e646976696475616c732e737667)](https://camo.githubusercontent.com/49993acf9cdbd2a690fda5eb87d48fdc68e9b7e27ab80893c7c67da140286967/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66616b65726a732f696e646976696475616c732e737667)

## ✨ Contributing

Please make sure to read the [Contributing Guide](https://github.com/faker-js/faker/blob/next/CONTRIBUTING.md) before making a pull request.

## 📘 Credits

Thanks to all the people who already contributed to Faker!

[![](https://camo.githubusercontent.com/f9b39527b858709a6769f2d3496ab79abd82665cbd4ea8a3ad2091e22ba392a9/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66616b65726a732f636f6e7472696275746f72732e7376673f77696474683d383030)](https://github.com/faker-js/faker/graphs/contributors)

The [fakerjs.dev](https://fakerjs.dev/) website is kindly hosted by the Netlify Team. Also the search functionality is powered by [algolia](https://www.algolia.com/).

## 📝 Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/faker-js/faker/blob/next/CHANGELOG.md).

## 📜 What happened to the original faker.js?

Read the [team update](https://fakerjs.dev/update.html) (January 14th, 2022).

## 🔑 License

[MIT](https://github.com/faker-js/faker/blob/next/LICENSE)