import {faker, fakerDA} from '@faker-js/faker';
import { Thread, User } from '../.expo/types/threads';

export function createRamdomFollower():User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const name = firstName + " " + lastName;

    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name,
        verified: Math.random() >= 0.5,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
    };
}

export function createRamdomUser():User {    
    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        verified: Math.random() >= 0.5,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
        followers: new Array(Math.floor(Math.random() * 10))
        .fill(null).map((_) => createRamdomFollower())
    };
}

export function createRamdomThread(): Thread {
    const author= createRamdomUser();
    const mentionUser = createRamdomUser();
    
    return {
        id: faker.string.uuid(),
        author,
        content: faker.lorem.paragraph(),
        image: Math.random() > 0.5 ? faker.image.url() : undefined,
        replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
            id: faker.string.uuid(),
            author: createRamdomUser(),
            content: faker.lorem.sentence(),
            likes: Math.floor(Math.random() * 1000),
            createAt: faker.date.recent().toISOString(),
        })),
        repliesCount: Math.floor(Math.random() * 100),
        likesCount: Math.floor(Math.random() * 1000),
        mention: Math.random() > 0.5,
        mentionUser,
        createAt: faker.date.recent().toISOString(),
    };
}

export function generateRamdomThread():Thread[] {
    return new Array(50).fill(null).map((_) => createRamdomThread())
}