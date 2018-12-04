const world = 'Moon';

export function hello(word: string = world) {
    return `hello ${word}`;
}