export default function random_choice(list) {
    var rand = Math.random();
    rand *= list.length;
    rand = Math.floor(rand);

    return list[rand];
}